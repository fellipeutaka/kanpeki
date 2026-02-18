# Input Validation

## Priority: HIGH

Server functions cross a network boundary — a trust boundary. Always validate inputs on the server, even if the client already validates.

## `inputValidator` Chain

```tsx
import { createServerFn } from '@tanstack/react-start'

const updateProfile = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; email: string }) => data)
  .handler(async ({ data }) => {
    // data is typed as { name: string; email: string }
    return db.users.update({ data })
  })
```

## Validation with Zod

```tsx
import { z } from 'zod'

const createPostSchema = z.object({
  title: z.string().min(1).max(200),
  body: z.string().min(1),
  tags: z.array(z.string()).max(5).optional(),
})

const createPost = createServerFn({ method: 'POST' })
  .inputValidator(createPostSchema)
  .handler(async ({ data }) => {
    // data is typed as z.infer<typeof createPostSchema>
    return db.posts.create({ data })
  })
```

## Shared Schemas (Client + Server)

Share validation schemas between forms and server functions to keep rules consistent.

```tsx
// lib/schemas.ts
export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(1).max(100),
})

// server/auth.ts
const signupFn = createServerFn({ method: 'POST' })
  .inputValidator(signupSchema)
  .handler(async ({ data }) => {
    const hashedPassword = await hash(data.password)
    return db.users.create({
      data: { ...data, password: hashedPassword },
    })
  })

// components/SignupForm.tsx
function SignupForm() {
  const handleSubmit = (e: FormEvent) => {
    const formData = new FormData(e.currentTarget)
    const parsed = signupSchema.safeParse(Object.fromEntries(formData))

    if (!parsed.success) {
      // Show client-side errors
      return
    }

    signupFn({ data: parsed.data })
  }
}
```

## Standard Schema Support

TanStack Start's `inputValidator` accepts any Standard Schema–compatible library:

```tsx
// Zod
import { z } from 'zod'
const schema = z.object({ name: z.string() })

// Valibot
import * as v from 'valibot'
const schema = v.object({ name: v.string() })

// ArkType
import { type } from 'arktype'
const schema = type({ name: 'string' })
```

All work identically with `.inputValidator(schema)`.

## Strip Sensitive Fields

Never trust client-supplied fields like `role` or `isAdmin`:

```tsx
const updateUser = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      name: z.string(),
      email: z.string().email(),
      // Don't accept role, isAdmin, etc. from client
    })
  )
  .handler(async ({ data }) => {
    return db.users.update({
      where: { email: data.email },
      data: { name: data.name }, // Only update allowed fields
    })
  })
```

## Error Handling for Validation

```tsx
// inputValidator throws automatically on invalid input
// The error is returned as a proper HTTP error response

// For custom error responses:
const createPost = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => {
    const result = createPostSchema.safeParse(data)
    if (!result.success) {
      throw new Error(result.error.issues[0].message)
    }
    return result.data
  })
  .handler(async ({ data }) => {
    return db.posts.create({ data })
  })
```

## Rules

- **ALWAYS** use `.inputValidator()` before `.handler()` when accepting data
- **ALWAYS** validate on the server — client validation is for UX only
- Share schemas between client and server to keep rules consistent
- Strip fields clients shouldn't control (role, permissions, IDs)
- Use Zod or any Standard Schema library — all work with `inputValidator`
- Place `.inputValidator()` before `.middleware()` in the chain

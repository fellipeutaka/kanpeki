# SSR / Meta-Framework Integration

TanStack Form provides dedicated adapters for server-side validation with TanStack Start, Next.js, and Remix. Each uses framework-specific import paths.

## Import Paths

| Framework | Import |
|-----------|--------|
| TanStack Start | `@tanstack/react-form-start` |
| Next.js App Router | `@tanstack/react-form-nextjs` |
| Remix | `@tanstack/react-form-remix` |

## Core Pattern

All meta-framework integrations follow the same pattern:

1. Define `formOptions` using the framework-specific import
2. Create `serverValidate` with `createServerValidate` for server-side validation
3. Merge server state into client form using `useTransform` + `mergeForm`

## TanStack Start

```tsx
// Shared form options
import { formOptions } from '@tanstack/react-form-start'

export const formOpts = formOptions({
  defaultValues: { firstName: '', age: 0 },
})
```

```tsx
// Server function
import { createServerValidate, ServerValidateError } from '@tanstack/react-form-start'

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.age < 12) return 'Must be at least 12 to sign up'
  },
})

export const handleForm = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => {
    if (!(data instanceof FormData)) throw new Error('Invalid form data')
    return data
  })
  .handler(async (ctx) => {
    try {
      const validatedData = await serverValidate(ctx.data)
      // Persist to database
    } catch (e) {
      if (e instanceof ServerValidateError) return e.response
      throw e
    }
  })
```

```tsx
// Client component
import { mergeForm, useForm, useStore, useTransform } from '@tanstack/react-form-start'

function Home() {
  const { state } = Route.useLoaderData()
  const form = useForm({
    ...formOpts,
    transform: useTransform((baseForm) => mergeForm(baseForm, state), [state]),
  })

  return (
    <form action={handleForm.url} method="post" encType="multipart/form-data">
      {/* fields */}
    </form>
  )
}
```

## Next.js App Router

```tsx
// shared-code.ts
import { formOptions } from '@tanstack/react-form-nextjs'

export const formOpts = formOptions({
  defaultValues: { firstName: '', age: 0 },
})
```

```tsx
// action.ts
'use server'
import { ServerValidateError, createServerValidate } from '@tanstack/react-form-nextjs'

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.age < 12) return 'Must be at least 12 to sign up'
  },
})

export default async function someAction(prev: unknown, formData: FormData) {
  try {
    const validatedData = await serverValidate(formData)
    // Persist to database
  } catch (e) {
    if (e instanceof ServerValidateError) return e.formState
    throw e
  }
}
```

```tsx
// client-component.tsx
'use client'
import { useActionState } from 'react'
import { initialFormState, mergeForm, useForm, useStore, useTransform } from '@tanstack/react-form-nextjs'

export function ClientComp() {
  const [state, action] = useActionState(someAction, initialFormState)

  const form = useForm({
    ...formOpts,
    transform: useTransform((baseForm) => mergeForm(baseForm, state!), [state]),
  })

  return (
    <form action={action as never} onSubmit={() => form.handleSubmit()}>
      {/* fields */}
    </form>
  )
}
```

**Known Next.js issue**: If you get `useState` import errors, ensure server-side code imports from `@tanstack/react-form-nextjs`, not `@tanstack/react-form`.

## Remix

```tsx
// routes/_index/route.tsx
import { formOptions } from '@tanstack/react-form-remix'
import { ServerValidateError, createServerValidate } from '@tanstack/react-form-remix'

export const formOpts = formOptions({
  defaultValues: { firstName: '', age: 0 },
})

const serverValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (value.age < 12) return 'Must be at least 12 to sign up'
  },
})

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  try {
    await serverValidate(formData)
  } catch (e) {
    if (e instanceof ServerValidateError) return e.formState
    throw e
  }
}

export default function Index() {
  const actionData = useActionData<typeof action>()
  const form = useForm({
    ...formOpts,
    transform: useTransform(
      (baseForm) => mergeForm(baseForm, actionData ?? initialFormState),
      [actionData],
    ),
  })

  return (
    <Form method="post" onSubmit={() => form.handleSubmit()}>
      {/* fields */}
    </Form>
  )
}
```

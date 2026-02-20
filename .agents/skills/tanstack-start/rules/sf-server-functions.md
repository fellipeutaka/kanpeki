# Server Functions

## Priority: CRITICAL

Server functions are the core primitive for server-side code in TanStack Start. They create type-safe RPC endpoints that can be called from both client and server.

## `createServerFn` Basics

```tsx
import { createServerFn } from '@tanstack/react-start'

// GET — for reading data (default)
const getUsers = createServerFn({ method: 'GET' })
  .handler(async () => {
    return db.users.findMany()
  })

// POST — for mutations
const createUser = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; email: string }) => data)
  .handler(async ({ data }) => {
    return db.users.create({ data })
  })
```

## Method Selection

| Method | Use For | Caching | Body |
|--------|---------|---------|------|
| `GET` | Reading data, loaders | Cacheable by browsers/CDNs | Query params only |
| `POST` | Mutations, side effects | Not cached | Request body |

```tsx
// GET — data is serialized as query params
const getPost = createServerFn({ method: 'GET' })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    return db.posts.findUnique({ where: { id: data.id } })
  })

// POST — data is sent in request body
const deletePost = createServerFn({ method: 'POST' })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    await db.posts.delete({ where: { id: data.id } })
  })
```

## Calling from Components

```tsx
// In a loader
export const Route = createFileRoute('/')({
  loader: async () => await getUsers(),
  component: UsersPage,
})

// In an event handler
function CreateUserForm() {
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    await createUser({
      data: {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
      },
    })
    router.invalidate()
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

## Calling from Other Server Functions

```tsx
const getUser = createServerFn({ method: 'GET' })
  .handler(async () => {
    return db.users.findFirst()
  })

const getDashboard = createServerFn({ method: 'GET' })
  .handler(async () => {
    // Call another server fn directly
    const user = await getUser()
    const stats = await db.stats.forUser(user.id)
    return { user, stats }
  })
```

## Redirects from Server Functions

```tsx
import { redirect } from '@tanstack/react-router'

const requireAuth = createServerFn({ method: 'GET' })
  .handler(async () => {
    const user = await getCurrentUser()
    if (!user) {
      throw redirect({ to: '/login' })
    }
    return user
  })
```

**Note**: When a server function throws `redirect`, the return value on the client is `undefined`. Always check the result if the function can redirect:

```tsx
const result = await loginFn({ data: credentials })
if (result) {
  // Safe to use — no redirect happened
  console.log(result.name)
}
```

## Accessing Request Context

```tsx
import { getRequestHeaders } from '@tanstack/react-start/server'

const getAuthenticatedUser = createServerFn({ method: 'GET' })
  .handler(async () => {
    const headers = getRequestHeaders()
    const token = headers.get('authorization')?.replace('Bearer ', '')

    if (!token) throw redirect({ to: '/login' })

    return verifyToken(token)
  })
```

## Rules

- **ALWAYS** use `createServerFn` for database access, secret keys, and server-only logic
- **ALWAYS** specify `method: 'GET'` for reads, `method: 'POST'` for mutations
- **ALWAYS** use `.inputValidator()` before `.handler()` when accepting input
- **NEVER** import server-only modules (e.g., `node:fs`) outside of server functions
- Prefer `GET` for loader data — it's cacheable and can be prefetched
- Keep server functions focused — one operation per function
- Use `router.invalidate()` after mutations to refetch loader data

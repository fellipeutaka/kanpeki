# Middleware

## Priority: HIGH

Middleware provides reusable logic that runs before server function handlers. TanStack Start supports two middleware types: **request middleware** (runs on every request) and **function middleware** (wraps specific server functions).

## Creating Middleware

```tsx
import { createMiddleware } from '@tanstack/react-start'

const loggingMiddleware = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    const start = Date.now()
    const result = await next()
    console.log(`Server fn took ${Date.now() - start}ms`)
    return result
  })
```

## Client + Server Execution

Middleware can run on both client and server. Client middleware runs before the network request, server middleware runs on the server.

```tsx
const authMiddleware = createMiddleware({ type: 'function' })
  .client(async ({ next }) => {
    // Runs on client before sending request
    const token = getToken()
    return next({
      headers: { Authorization: `Bearer ${token}` },
    })
  })
  .server(async ({ next }) => {
    // Runs on server before handler
    const user = await getUser()
    return next({ context: { user } })
  })
```

## Passing Context

Middleware can add typed context that downstream middleware and handlers can access.

```tsx
const dbMiddleware = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    const db = createDbConnection()
    return next({ context: { db } })
  })

// Handler receives context from middleware
const getUsers = createServerFn({ method: 'GET' })
  .middleware([dbMiddleware])
  .handler(async ({ context }) => {
    // context.db is typed
    return context.db.users.findMany()
  })
```

## Chaining Middleware

Middleware runs in order. Each middleware's context is available to the next.

```tsx
const authMiddleware = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    const user = await getCurrentUser()
    if (!user) throw redirect({ to: '/login' })
    return next({ context: { user } })
  })

const adminMiddleware = createMiddleware({ type: 'function' })
  .server(async ({ next, context }) => {
    // context.user available from authMiddleware
    if (context.user.role !== 'admin') {
      throw new Error('Forbidden')
    }
    return next()
  })

const adminAction = createServerFn({ method: 'POST' })
  .middleware([authMiddleware, adminMiddleware])
  .handler(async ({ context }) => {
    // context.user is typed and guaranteed to be admin
    return db.admin.doAction()
  })
```

## Auth Middleware Pattern

```tsx
const authMiddleware = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    const session = await getSession()

    if (!session?.userId) {
      throw redirect({ to: '/login' })
    }

    const user = await db.users.findUnique({
      where: { id: session.userId },
    })

    if (!user) {
      throw redirect({ to: '/login' })
    }

    return next({ context: { user, session } })
  })
```

## Reusable Middleware Across Functions

```tsx
// lib/middleware.ts
export const withAuth = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    const user = await requireAuth()
    return next({ context: { user } })
  })

export const withRateLimit = createMiddleware({ type: 'function' })
  .server(async ({ next }) => {
    await checkRateLimit()
    return next()
  })

// routes/api.ts
const sensitiveAction = createServerFn({ method: 'POST' })
  .middleware([withAuth, withRateLimit])
  .handler(async ({ context }) => {
    // Both auth and rate limit applied
  })
```

## Rules

- Use `type: 'function'` for middleware that wraps server functions
- Chain middleware in dependency order — auth before authorization
- Always call `next()` to continue the chain (or throw to abort)
- Pass data to handlers via `context`, not globals
- Keep middleware focused — one concern per middleware
- Extract shared middleware to a `lib/middleware.ts` file

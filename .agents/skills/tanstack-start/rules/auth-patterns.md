# Authentication Patterns

## Priority: HIGH

TanStack Start auth combines server functions for session management with `beforeLoad` route guards for protection. Cookie forwarding requires special handling.

## Auth Server Functions

```tsx
// server/auth.ts
import { createServerFn } from '@tanstack/react-start'
import { redirect } from '@tanstack/react-router'

export const loginFn = createServerFn({ method: 'POST' })
  .inputValidator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
    const user = await authenticateUser(data.email, data.password)

    if (!user) {
      return { error: 'Invalid credentials' }
    }

    const session = await useAppSession()
    await session.update({ userId: user.id })

    throw redirect({ to: '/dashboard' })
  })

export const logoutFn = createServerFn({ method: 'POST' })
  .handler(async () => {
    const session = await useAppSession()
    await session.clear()
    throw redirect({ to: '/' })
  })

export const getCurrentUserFn = createServerFn({ method: 'GET' })
  .handler(async () => {
    const session = await useAppSession()
    if (!session.data.userId) return null
    return db.users.findUnique({ where: { id: session.data.userId } })
  })
```

## Route Guard with `beforeLoad`

Use a pathless layout route to protect all child routes:

```tsx
// routes/_authed.tsx
import { createFileRoute, redirect } from '@tanstack/react-router'
import { getCurrentUserFn } from '../server/auth'

export const Route = createFileRoute('/_authed')({
  beforeLoad: async ({ location }) => {
    const user = await getCurrentUserFn()

    if (!user) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      })
    }

    // Pass user to all child routes via context
    return { user }
  },
})
```

```tsx
// routes/_authed/dashboard.tsx
export const Route = createFileRoute('/_authed/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const { user } = Route.useRouteContext()
  return <h1>Welcome, {user.name}!</h1>
}
```

## Role-Based Access

```tsx
// routes/_authed/_admin.tsx
export const Route = createFileRoute('/_authed/_admin')({
  beforeLoad: async ({ context }) => {
    // context.user comes from parent _authed route
    if (context.user.role !== 'admin') {
      throw redirect({ to: '/dashboard' })
    }
  },
})

// routes/_authed/_admin/users.tsx — only accessible to admins
```

## Post-Login Redirect

```tsx
// routes/login.tsx
export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const search = Route.useSearch<{ redirect?: string }>()

  const handleLogin = async (credentials: { email: string; password: string }) => {
    const result = await loginFn({ data: credentials })

    if (result?.error) {
      // Show error
      return
    }

    // loginFn throws redirect, so we only reach here on error
  }

  return <LoginForm onSubmit={handleLogin} />
}
```

## Cookie Forwarding with Stateful Backends

Server functions originate from the Start server, not the browser. Cookies are **not** automatically forwarded.

### Option 1: `createIsomorphicFn` (preferred for reads)

Runs on the client when possible, preserving browser cookies:

```tsx
import { createIsomorphicFn } from '@tanstack/react-start'

const getUserData = createIsomorphicFn()
  .handler(async () => {
    // Runs on client — browser cookies are sent
    const response = await fetch('https://api.example.com/user')
    return response.json()
  })
```

### Option 2: Manual Header Forwarding (for server-only operations)

```tsx
import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'

const getProtectedData = createServerFn({ method: 'GET' })
  .handler(async () => {
    const headers = getRequestHeaders()

    const response = await fetch('https://api.example.com/protected', {
      headers: {
        Cookie: headers.get('cookie') || '',
        'X-XSRF-TOKEN': headers.get('x-xsrf-token') || '',
      },
    })

    return response.json()
  })
```

## Rules

- Use `beforeLoad` on layout routes to protect groups of pages
- Pass authenticated user via route context, not global state
- Always redirect to login with the original URL in search params
- Check server function return values — redirects resolve to `undefined`
- Use `createIsomorphicFn` for stateful backend reads (preserves cookies)
- Use manual header forwarding when the operation must run server-side

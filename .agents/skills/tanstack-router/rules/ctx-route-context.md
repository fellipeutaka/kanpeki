# Route Context

Route context enables dependency injection — pass services, auth state, and clients through the route tree without prop drilling or global state.

## createRootRouteWithContext

Define the context type at the root. All child routes inherit it.

```tsx
// routes/__root.tsx
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

interface RouterContext {
  queryClient: QueryClient
  auth: {
    user: User | null
    login: (credentials: Credentials) => Promise<void>
    logout: () => Promise<void>
  }
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
})
```

Provide the context when creating the router:

```tsx
// router.tsx
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: createAuthContext(),
  },
})
```

## Accessing Context in Routes

Context is available in `loader`, `beforeLoad`, and via `useRouteContext()`:

```tsx
export const Route = createFileRoute('/dashboard')({
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(dashboardQueryOptions)
  },
  component: Dashboard,
})

function Dashboard() {
  const { auth } = Route.useRouteContext()
  return <h1>Welcome, {auth.user?.name}</h1>
}
```

## beforeLoad — Augment Context

`beforeLoad` runs before the loader. Use it to add route-specific context or perform auth checks.

```tsx
export const Route = createFileRoute('/admin')({
  beforeLoad: ({ context }) => {
    if (!context.auth.user) {
      throw redirect({ to: '/login' })
    }
    // Return value merges into context for this route and children
    return {
      isAdmin: context.auth.user.roles.includes('admin'),
    }
  },
  loader: ({ context }) => {
    // context.isAdmin is available here
    if (!context.isAdmin) throw redirect({ to: '/' })
    return fetchAdminData()
  },
})
```

## Auth Guard Pattern

Use a pathless layout to protect multiple routes:

```tsx
// routes/_auth.tsx
export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.user) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      })
    }
  },
  component: () => <Outlet />,
})

// routes/_auth.dashboard.tsx — protected by _auth
export const Route = createFileRoute('/_auth/dashboard')({
  component: Dashboard,
})

// routes/_auth.settings.tsx — also protected by _auth
export const Route = createFileRoute('/_auth/settings')({
  component: Settings,
})
```

## RBAC (Role-Based Access Control)

```tsx
export const Route = createFileRoute('/_auth/admin')({
  beforeLoad: ({ context }) => {
    if (!context.auth.user?.roles.includes('admin')) {
      throw redirect({ to: '/' })
    }
  },
})
```

## Nested Context

Context merges hierarchically. Each `beforeLoad` can add to the context, and children see the merged result.

```
__root.tsx     → context: { queryClient, auth }
  _auth.tsx    → beforeLoad adds: { user } (from auth check)
    admin.tsx  → beforeLoad adds: { isAdmin }
      users.tsx → loader sees: { queryClient, auth, user, isAdmin }
```

```tsx
// _auth.tsx
beforeLoad: ({ context }) => {
  if (!context.auth.user) throw redirect({ to: '/login' })
  return { user: context.auth.user } // Merges into context
}

// _auth.admin.tsx
beforeLoad: ({ context }) => {
  // context.user is available from parent's beforeLoad
  return { isAdmin: context.user.roles.includes('admin') }
}
```

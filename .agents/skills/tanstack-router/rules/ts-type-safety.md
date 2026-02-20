# Type Safety

Type safety is TanStack Router's core differentiator. Proper setup gives you autocomplete and compile-time errors for routes, params, search params, and loader data across your entire app.

## Register Your Router

Without registration, all hooks return union types of all possible routes — essentially `unknown`.

```tsx
// src/router.tsx
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({ routeTree })

// ✅ Register for global type inference
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
```

This enables:
- `<Link to="/posts/$postId">` — autocomplete for routes, type error on typos
- `useParams()` — typed params based on current route
- `useSearch()` — typed search params based on route's `validateSearch`
- `useLoaderData()` — typed return from route's `loader`
- `useNavigate()` — type-safe `to`, `params`, `search`

## Use the `from` Parameter

Without `from`, hooks return a union of all possible types across all routes. With `from`, you get the exact type for a specific route.

```tsx
// ❌ Without from — type is union of ALL routes' params
function Component() {
  const params = useParams() // { postId?: string, userId?: string, ... }
}

// ✅ With from — exact type for this route
function Component() {
  const params = useParams({ from: '/posts/$postId' }) // { postId: string }
}
```

## Route.useX() — Best Pattern

When the component is defined in the same file as the route, use `Route.useX()` methods. The `from` is automatically inferred.

```tsx
export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => fetchPost(params.postId),
  component: PostComponent,
})

function PostComponent() {
  const post = Route.useLoaderData()   // Typed from loader return
  const { postId } = Route.useParams() // { postId: string }
  const search = Route.useSearch()     // Typed from validateSearch
  return <h1>{post.title}</h1>
}
```

## getRouteApi() — For Code-Split Components

When the component is in a different file (e.g., `.lazy.tsx`), use `getRouteApi()` to get typed access without importing the route.

```tsx
// posts.$postId.lazy.tsx
import { createLazyFileRoute, getRouteApi } from '@tanstack/react-router'

const routeApi = getRouteApi('/posts/$postId')

export const Route = createLazyFileRoute('/posts/$postId')({
  component: PostComponent,
})

function PostComponent() {
  const post = routeApi.useLoaderData()   // Still fully typed
  const { postId } = routeApi.useParams()
  return <h1>{post.title}</h1>
}
```

## strict: false — Shared Components

For components used across multiple routes, use `strict: false` to opt out of route-specific typing. Properties become optional unions.

```tsx
function Breadcrumb() {
  // Works on any route, but types are optional
  const params = useParams({ strict: false })
  // params.postId is string | undefined
}
```

## Type-Safe Path Params

Path params are always strings from the URL. Parse them in `params` for type safety:

```tsx
export const Route = createFileRoute('/posts/$postId')({
  params: {
    parse: (params) => ({ postId: parseInt(params.postId) }),
    stringify: (params) => ({ postId: String(params.postId) }),
  },
  loader: ({ params }) => fetchPost(params.postId), // postId is number
})
```

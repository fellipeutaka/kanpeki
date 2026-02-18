# TanStack Query Integration

Integrate TanStack Query with TanStack Router for robust caching, background refetching, and cache invalidation on top of route-based data loading.

## Setup — Provide QueryClient via Context

```tsx
// src/routes/__root.tsx
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'

interface RouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
})
```

```tsx
// src/router.tsx
import { createRouter } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
})

export const router = createRouter({
  routeTree,
  context: { queryClient },
})
```

```tsx
// src/main.tsx
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
```

## ensureQueryData in Loaders

`ensureQueryData` respects the Query cache — returns cached data if fresh, fetches if stale or missing.

```tsx
import { queryOptions } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['posts', 'detail', postId],
    queryFn: () => fetchPost(postId),
    staleTime: 1000 * 60 * 5,
  })

export const Route = createFileRoute('/posts/$postId')({
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(postQueryOptions(params.postId)),
  component: PostComponent,
})

function PostComponent() {
  const post = Route.useLoaderData()
  // Or use useQuery for background refetching:
  // const { data: post } = useSuspenseQuery(postQueryOptions(postId))
  return <h1>{post.title}</h1>
}
```

## Parallel Loading with Query

```tsx
export const Route = createFileRoute('/dashboard')({
  loader: async ({ context }) => {
    const [users, stats] = await Promise.all([
      context.queryClient.ensureQueryData(usersQueryOptions),
      context.queryClient.ensureQueryData(statsQueryOptions),
    ])
    return { users, stats }
  },
})
```

## ensureQueryData vs prefetchQuery vs fetchQuery

| Method | Returns | Uses cache | Always fetches |
|--------|---------|-----------|----------------|
| `ensureQueryData` | data | Yes — skips fetch if fresh | No |
| `prefetchQuery` | void | Yes — skips fetch if fresh | No |
| `fetchQuery` | data | No — always fetches | Yes |

Use `ensureQueryData` in loaders (need the data). Use `prefetchQuery` for fire-and-forget preloading.

## Dependent Queries in Loaders

```tsx
export const Route = createFileRoute('/users/$userId/posts')({
  loader: async ({ context, params }) => {
    const user = await context.queryClient.ensureQueryData(
      userQueryOptions(params.userId)
    )
    const posts = await context.queryClient.ensureQueryData(
      userPostsQueryOptions(user.id)
    )
    return { user, posts }
  },
})
```

## Set Router staleTime to Infinity

When using TanStack Query for cache management, set the router's `staleTime` to `Infinity` so the router never refetches — let Query handle it:

```tsx
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: Infinity, // Let TanStack Query manage refetching
  context: { queryClient },
})
```

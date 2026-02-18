# Error Handling

## errorComponent

Catches errors thrown in a route's `loader`, `beforeLoad`, or `component`.

```tsx
export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => fetchPost(params.postId),
  errorComponent: ({ error, reset }) => (
    <div role="alert">
      <h2>Failed to load post</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  ),
})
```

Set a global default in the router:

```tsx
const router = createRouter({
  routeTree,
  defaultErrorComponent: ({ error, reset }) => (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  ),
})
```

## notFoundComponent

Handles 404s. Can be set at root, per-route, or triggered programmatically.

### Root Level

```tsx
// routes/__root.tsx
export const Route = createRootRoute({
  notFoundComponent: () => (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Go home</Link>
    </div>
  ),
  component: () => <Outlet />,
})
```

### Route Level

```tsx
export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => {
    const post = await fetchPost(params.postId)
    if (!post) throw notFound()
    return post
  },
  notFoundComponent: () => <div>Post not found</div>,
})
```

### Programmatic notFound()

Use `notFound()` instead of throwing generic errors for 404 cases:

```tsx
import { notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => {
    const post = await fetchPost(params.postId)
    if (!post) {
      throw notFound()
    }
    return post
  },
})
```

Pass data to the not-found component:

```tsx
throw notFound({ data: { id: params.postId } })

// In notFoundComponent:
notFoundComponent: ({ data }) => (
  <div>Post {data.id} not found</div>
)
```

## Not Found Bubbling

If a route doesn't define `notFoundComponent`, the `notFound()` error bubbles up through the route tree until it finds one. The root route's `notFoundComponent` is the final catch.

## Catch-All Route

For handling any unmatched path:

```tsx
// routes/$.tsx — matches everything not matched by other routes
export const Route = createFileRoute('/$')({
  component: () => <div>404 — Page not found</div>,
})
```

**Difference**: `notFoundComponent` handles `notFound()` thrown from loaders. A catch-all `$` route matches unmatched URLs. Use both for complete 404 coverage.

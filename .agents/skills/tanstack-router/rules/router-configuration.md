# Router Configuration

## Default Options

Configure global defaults when creating the router. Routes can override these individually.

```tsx
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',          // Preload on hover/focus
  defaultPreloadDelay: 50,            // ms before preload starts
  scrollRestoration: true,            // Restore scroll position on back/forward
  defaultPendingMs: 1000,             // Wait before showing pending UI
  defaultPendingMinMs: 300,           // Minimum time to show pending UI (prevents flash)
  defaultErrorComponent: DefaultErrorComponent,
  defaultNotFoundComponent: DefaultNotFoundComponent,
  defaultPendingComponent: DefaultPendingComponent,
})
```

## Default Error Component

Shown when a route's loader or component throws an unhandled error.

```tsx
import { ErrorComponent, type ErrorComponentProps } from '@tanstack/react-router'

function DefaultErrorComponent({ error, reset }: ErrorComponentProps) {
  return (
    <div role="alert">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  )
}
```

## Default Not Found Component

Shown when no route matches the URL.

```tsx
import { Link } from '@tanstack/react-router'

function DefaultNotFoundComponent() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Go home</Link>
    </div>
  )
}
```

## Default Pending Component

Shown while route loaders are running (after `defaultPendingMs` delay).

```tsx
function DefaultPendingComponent() {
  return <div>Loading...</div>
}
```

## Scroll Restoration

Built-in scroll restoration for browser back/forward navigation:

```tsx
const router = createRouter({
  routeTree,
  scrollRestoration: true,
  // Optionally customize:
  getScrollRestorationKey: (location) => location.pathname, // Group by pathname
})
```

## Route-Level Overrides

Any route can override the global defaults:

```tsx
export const Route = createFileRoute('/posts/$postId')({
  pendingMs: 500,             // Override global pendingMs
  pendingMinMs: 200,
  errorComponent: PostErrorComponent,
  pendingComponent: () => <PostSkeleton />,
})
```

# Preloading

Preloading fetches route data and code before navigation, making transitions feel instant.

## Intent Preloading (Recommended)

Preload when the user hovers over or focuses a link. Best default for most apps.

```tsx
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadDelay: 50, // ms before preload starts (default: 50)
})
```

Per-link override:

```tsx
<Link to="/posts/$postId" params={{ postId: '123' }} preload="intent" preloadDelay={100}>
  View Post
</Link>
```

## Viewport Preloading

Preload when a link enters the viewport (good for above-the-fold links):

```tsx
<Link to="/featured" preload="viewport">
  Featured Posts
</Link>
```

## Render Preloading

Preload as soon as the link renders (use sparingly — preloads even if never visible):

```tsx
<Link to="/critical-page" preload="render">
  Critical Page
</Link>
```

## Disable Preloading

```tsx
<Link to="/rarely-visited" preload={false}>
  Rarely Visited
</Link>
```

## Manual Preloading

Preload programmatically (e.g., on a custom event):

```tsx
const router = useRouter()

const handleMouseEnter = () => {
  router.preloadRoute({
    to: '/posts/$postId',
    params: { postId: '123' },
  })
}
```

## Preload + staleTime

Configure how long preloaded data stays fresh:

```tsx
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 1000 * 30, // Preloaded data fresh for 30s (default: 30s)
})
```

Per-route override:

```tsx
export const Route = createFileRoute('/posts')({
  loader: () => fetchPosts(),
  preloadStaleTime: 1000 * 60, // This route's preloaded data fresh for 1 min
})
```

## What Gets Preloaded

When a route is preloaded:
1. **Code** — the route's lazy-loaded component chunk
2. **Data** — the route's `loader` function runs
3. **Nested routes** — child route loaders also preload (if the preloaded route has child matches)

This means hovering a link can preload the entire page's data and code before the user clicks.

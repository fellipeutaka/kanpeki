# Code Splitting

## .lazy.tsx — Manual Split

Split the component from the loader. The loader runs on the critical path (needed before render); the component loads after.

```tsx
// routes/posts.tsx — critical path (loader stays here)
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  loader: () => fetchPosts(),
})

// routes/posts.lazy.tsx — split component (loaded lazily)
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/posts')({
  component: PostsComponent,
  pendingComponent: PostsSkeleton,
  errorComponent: PostsError,
})
```

**What goes where:**

| `.tsx` (critical) | `.lazy.tsx` (split) |
|-------------------|---------------------|
| `loader` | `component` |
| `beforeLoad` | `pendingComponent` |
| `validateSearch` | `errorComponent` |
| `loaderDeps` | `notFoundComponent` |
| `context` | |

## Auto Code Splitting (Vite Plugin)

Let the plugin automatically split routes. No manual `.lazy.tsx` files needed.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({ autoCodeSplitting: true }),
    react(),
  ],
})
```

With auto code splitting, every route's component is automatically split into its own chunk.

### Custom Split Behavior

```ts
tanstackRouter({
  autoCodeSplitting: true,
  codeSplittingOptions: {
    defaultBehavior: [
      ['loader'],     // Loader in its own chunk
      ['component'],  // Component in its own chunk
    ],
  },
})
```

## When to Code Split

- **Always split** large page components with heavy dependencies
- **Don't split** small, shared layouts that render on most pages
- **Don't split loaders** unless they import heavy libraries (splitting loaders adds a network request before data fetching can start)

## Virtual Routes

If a route only has a `.lazy.tsx` file (no critical-path `.tsx`), TanStack Router auto-generates a virtual route for it. No need for an empty `.tsx` file.

```
src/routes/
├── about.lazy.tsx    # Only lazy file — virtual route auto-generated
├── posts.tsx         # Has loader — critical path
└── posts.lazy.tsx    # Split component
```

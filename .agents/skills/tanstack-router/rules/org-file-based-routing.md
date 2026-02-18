# File-Based Routing

TanStack Router's file-based routing auto-generates the route tree from your file structure. The Vite plugin watches for changes and regenerates `routeTree.gen.ts`.

## File Naming Conventions

| Pattern | Route Path | Example |
|---------|-----------|---------|
| `index.tsx` | `/` | Home page |
| `about.tsx` | `/about` | Static route |
| `posts.tsx` | `/posts` (layout) | Layout with `<Outlet />` |
| `posts.index.tsx` | `/posts` (index) | Content for `/posts` exactly |
| `posts.$postId.tsx` | `/posts/:postId` | Dynamic segment |
| `_auth.tsx` | (no path) | Pathless layout |
| `_auth.dashboard.tsx` | `/dashboard` | Wrapped by `_auth` layout |
| `(settings)/` | (group) | Directory group (no path segment) |
| `posts_.new.tsx` | `/posts/new` | Escapes parent layout |

## Route Tree Structure

```
src/routes/
├── __root.tsx                  # Root layout (always rendered)
├── index.tsx                   # "/"
├── about.tsx                   # "/about"
├── posts.tsx                   # "/posts" layout (has <Outlet />)
├── posts.index.tsx             # "/posts" index content
├── posts.$postId.tsx           # "/posts/:postId"
├── _auth.tsx                   # Pathless auth layout
├── _auth.dashboard.tsx         # "/dashboard" (guarded by _auth)
├── _auth.settings.tsx          # "/settings" (guarded by _auth)
└── (admin)/
    ├── admin.tsx               # "/admin" layout
    └── admin.users.tsx         # "/admin/users"
```

## Layouts with Outlet

A layout file renders shared UI and an `<Outlet />` for child routes.

```tsx
// routes/posts.tsx — layout for all /posts/* routes
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
  component: PostsLayout,
})

function PostsLayout() {
  return (
    <div>
      <h1>Posts</h1>
      <nav>{/* post navigation */}</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  )
}
```

## Pathless Layouts (Prefix: `_`)

Group routes under a shared layout without adding a URL segment. Useful for auth guards.

```tsx
// routes/_auth.tsx — no URL path, just a wrapper
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context }) => {
    if (!context.auth.user) {
      throw redirect({ to: '/login' })
    }
  },
  component: () => <Outlet />,
})

// routes/_auth.dashboard.tsx — URL is "/dashboard", wrapped by _auth
export const Route = createFileRoute('/_auth/dashboard')({
  component: Dashboard,
})
```

## Index Routes

`posts.index.tsx` renders when the URL matches `/posts` exactly (not `/posts/something`).

```tsx
// routes/posts.index.tsx
export const Route = createFileRoute('/posts/')({
  component: () => <p>Select a post from the list</p>,
})
```

## Route Groups (Parentheses)

Group files in directories without affecting the URL. Useful for organization.

```
src/routes/
├── (marketing)/
│   ├── about.tsx        # "/about"
│   └── pricing.tsx      # "/pricing"
├── (app)/
│   ├── dashboard.tsx    # "/dashboard"
│   └── settings.tsx     # "/settings"
```

## Flat Routes (Dot Notation)

Dots in filenames create nested paths without nested directories:

```
posts.$postId.tsx        → /posts/:postId
posts.$postId.edit.tsx   → /posts/:postId/edit
```

Equivalent directory structure:
```
posts/
├── $postId.tsx
└── $postId/
    └── edit.tsx
```

Both are valid. Dot notation keeps the routes directory flat; directory structure is better when routes have many sibling files.

## Layout Escape (Suffix: `_`)

Escape a parent layout by adding `_` after the parent segment:

```tsx
// routes/posts.tsx       — layout with sidebar
// routes/posts.index.tsx — rendered inside posts layout
// routes/posts_.new.tsx  — "/posts/new" but NOT inside posts layout
```

## Dynamic Segments ($)

`$` prefix creates dynamic path parameters:

```tsx
// routes/posts.$postId.tsx
export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => fetchPost(params.postId),
  component: PostComponent,
})
```

## Catch-All Routes ($)

A single `$` catches all remaining path segments:

```tsx
// routes/files.$.tsx — matches /files/any/path/here
export const Route = createFileRoute('/files/$')({
  component: () => {
    const { _splat } = Route.useParams()
    return <div>Path: {_splat}</div>
  },
})
```

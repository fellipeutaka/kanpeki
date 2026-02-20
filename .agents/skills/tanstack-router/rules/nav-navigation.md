# Navigation

## Link Component

Type-safe navigation with automatic href generation, active state detection, and preloading.

```tsx
import { Link } from '@tanstack/react-router'

// Basic link
<Link to="/about">About</Link>

// With path params (type-checked)
<Link to="/posts/$postId" params={{ postId: '123' }}>View Post</Link>

// With search params
<Link to="/posts" search={{ page: 2, sort: 'newest' }}>Page 2</Link>

// Functional search update (preserves other params)
<Link to="." search={(prev) => ({ ...prev, page: prev.page + 1 })}>
  Next Page
</Link>

// With hash
<Link to="/docs" hash="installation">Jump to Installation</Link>
```

## Active State

Style links based on whether they match the current route:

```tsx
<Link
  to="/dashboard"
  activeProps={{ className: 'font-bold text-blue-600' }}
  inactiveProps={{ className: 'text-gray-600' }}
>
  Dashboard
</Link>

// Exact match only (default matches child routes too)
<Link to="/posts" activeOptions={{ exact: true }}>
  Posts
</Link>

// Render function for custom active logic
<Link to="/notifications">
  {({ isActive }) => (
    <>
      Notifications
      {isActive && <Badge count={5} />}
    </>
  )}
</Link>
```

## Preloading on Hover

```tsx
<Link to="/expensive-page" preload="intent" preloadDelay={100}>
  Expensive Page
</Link>
```

Set globally:
```tsx
const router = createRouter({ routeTree, defaultPreload: 'intent' })
```

## Programmatic Navigation — useNavigate

```tsx
import { useNavigate } from '@tanstack/react-router'

function Component() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate({
      to: '/posts/$postId',
      params: { postId: '123' },
      search: { tab: 'comments' },
    })
  }

  // Relative navigation
  navigate({ to: '..', from: '/posts/$postId' })

  // Replace (no history entry)
  navigate({ to: '/login', replace: true })
}
```

## router.navigate

For navigation outside React components:

```tsx
import { router } from './router'

router.navigate({ to: '/login' })
```

## Redirect in Loaders/beforeLoad

```tsx
import { redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/old-page')({
  beforeLoad: () => {
    throw redirect({ to: '/new-page', statusCode: 301 })
  },
})

// With search params
throw redirect({
  to: '/login',
  search: { redirect: location.href },
})
```

## Search Param Preservation

When navigating, search params are not preserved by default. Explicitly spread them:

```tsx
// ❌ Loses existing search params
<Link to="." search={{ page: 2 }}>Page 2</Link>

// ✅ Preserves existing, updates page
<Link to="." search={(prev) => ({ ...prev, page: 2 })}>Page 2</Link>
```

## Route Masks

Display a different URL than the actual route (useful for modals):

```tsx
<Link
  to="/photos/$photoId"
  params={{ photoId: '123' }}
  mask={{ to: '/photos', search: { photoId: '123' } }}
>
  View Photo
</Link>
```

The URL bar shows `/photos?photoId=123` but the `/photos/$photoId` route renders.

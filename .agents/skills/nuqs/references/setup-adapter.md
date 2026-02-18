---
title: Wrap App with NuqsAdapter
impact: CRITICAL
tags: setup, NuqsAdapter, provider, next, remix, react-router, tanstack-router
---

## Wrap App with NuqsAdapter

nuqs requires a framework-specific `NuqsAdapter` context provider.
Without it, `useQueryState` hooks throw errors or fail to sync the URL.

### Next.js App Router

```tsx
// src/app/layout.tsx
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { type ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  )
}
```

### Next.js Pages Router

```tsx
// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import { NuqsAdapter } from 'nuqs/adapters/next/pages'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NuqsAdapter>
      <Component {...pageProps} />
    </NuqsAdapter>
  )
}
```

### Next.js Unified (both routers)

Use the unified adapter if your app uses both app and pages routers (~100B larger):

```tsx
import { NuqsAdapter } from 'nuqs/adapters/next'
```

### React SPA (e.g. Vite)

```tsx
// src/main.tsx
import { NuqsAdapter } from 'nuqs/adapters/react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <NuqsAdapter>
    <App />
  </NuqsAdapter>
)
```

> `shallow: false` has no effect in React SPA (no known server). Use the
> `fullPageNavigationOnShallowFalseUpdates` adapter prop if you need to notify a
> non-JS server.

### Remix

```tsx
// app/root.tsx
import { NuqsAdapter } from 'nuqs/adapters/remix'

export default function App() {
  return <NuqsAdapter><Outlet /></NuqsAdapter>
}
```

### React Router v6

```tsx
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6'
// Only BrowserRouter is supported (not HashRouter or MemoryRouter)
```

### React Router v7

```tsx
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
```

> `nuqs/adapters/react-router` (generic, pointing to v6) is deprecated.
> Pin to `/v6` or `/v7`.

### TanStack Router

```tsx
// src/routes/__root.tsx
import { NuqsAdapter } from 'nuqs/adapters/tanstack-router'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <NuqsAdapter>
      <Outlet />
    </NuqsAdapter>
  )
})
```

> TanStack Router support is experimental and does not yet cover TanStack Start.

### Testing

```tsx
import { NuqsAdapter } from 'nuqs/adapters/testing'
// See debug-testing.md
```

### Adapter summary

| Framework | Import |
|-----------|--------|
| Next.js App Router | `nuqs/adapters/next/app` |
| Next.js Pages Router | `nuqs/adapters/next/pages` |
| Next.js (both routers) | `nuqs/adapters/next` |
| React SPA (Vite etc.) | `nuqs/adapters/react` |
| Remix | `nuqs/adapters/remix` |
| React Router v6 | `nuqs/adapters/react-router/v6` |
| React Router v7 | `nuqs/adapters/react-router/v7` |
| TanStack Router | `nuqs/adapters/tanstack-router` |
| Testing | `nuqs/adapters/testing` |

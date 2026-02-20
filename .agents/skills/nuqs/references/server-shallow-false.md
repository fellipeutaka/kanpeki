---
title: Use shallow:false to Trigger Server Re-renders
impact: HIGH
tags: server, shallow, server-components, data-fetching, rsc
---

## Use shallow:false to Trigger Server Re-renders

By default, nuqs updates are client-side only (`shallow: true`). Set `shallow: false`
to trigger Server Component re-renders when the URL changes.

```tsx
'use client'
import { useTransition } from 'react'
import { useQueryState, parseAsInteger } from 'nuqs'

export function Pagination() {
  const [isLoading, startTransition] = useTransition()
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({
      shallow: false,
      startTransition // tracks server fetch loading state
    })
  )

  return (
    <div>
      {isLoading && <span>Loading...</span>}
      <button onClick={() => setPage(p => p + 1)} disabled={isLoading}>Next</button>
    </div>
  )
}
```

**Important:** In nuqs 2.x, passing `startTransition` does **not** automatically
set `shallow: false`. You must set both explicitly.

**When to use:**
- Pagination with server-fetched data
- Search/filter that affects Server Component output
- Any state the server needs to render different content

**Framework context:**
- Next.js: pairs with `searchParams` page prop (app router) or `getServerSideProps` (pages router)
- Remix / React Router: pairs with a `loader` function
- React SPA: `shallow` has no effect (no server)

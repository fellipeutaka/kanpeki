---
title: Add 'use client' Directive for Hooks
impact: CRITICAL
tags: setup, use-client, server-components, client-components
---

## Add 'use client' Directive for Hooks

`useQueryState` and `useQueryStates` are React hooks — they require client-side rendering.
Using them in Server Components causes build errors.

**Incorrect (missing directive):**

```tsx
// app/search/page.tsx
import { useQueryState } from 'nuqs'

export default function SearchPage() {
  const [query, setQuery] = useQueryState('q')
  // Error: Hooks can only be called inside Client Components
}
```

**Correct (client component):**

```tsx
'use client'

import { useQueryState } from 'nuqs'

export default function SearchPage() {
  const [query, setQuery] = useQueryState('q')
  return <input value={query ?? ''} onChange={e => setQuery(e.target.value)} />
}
```

**Better: extract to a leaf client component (keeps outer shell server-rendered):**

```tsx
// app/search/page.tsx (Server Component — no 'use client')
import SearchInput from './search-input'

export default function SearchPage() {
  return <div><h1>Search</h1><SearchInput /></div>
}

// app/search/search-input.tsx
'use client'
import { useQueryState } from 'nuqs'

export default function SearchInput() {
  const [query, setQuery] = useQueryState('q')
  return <input value={query ?? ''} onChange={e => setQuery(e.target.value)} />
}
```

Also wrap client components in `<Suspense>` when used inside a Next.js page to
avoid the `Missing Suspense boundary with useSearchParams` error.

> To read search params in Server Components, use `createLoader` or `createSearchParamsCache`
> from `nuqs/server`. See `server-create-loader.md` and `server-search-params-cache.md`.

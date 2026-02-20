---
title: Integrate useTransition for Loading States
impact: HIGH
tags: server, useTransition, loading, shallow-false, rsc
---

## Integrate useTransition for Loading States

When using `shallow: false`, pass `startTransition` from `useTransition` to get
a loading state while the server re-renders and streams RSC payloads.

```tsx
'use client'
import { useTransition } from 'react'
import { useQueryState, parseAsString } from 'nuqs'

export function SearchBox() {
  const [isLoading, startTransition] = useTransition()
  const [query, setQuery] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({
      shallow: false,
      startTransition  // nuqs calls this when updating the URL
    })
  )

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      {isLoading && <span className="spinner" />}
    </div>
  )
}
```

**With useQueryStates:**

```tsx
const [isLoading, startTransition] = useTransition()
const [filters, setFilters] = useQueryStates(
  {
    category: parseAsString.withDefault(''),
    page: parseAsInteger.withDefault(1)
  },
  { shallow: false, startTransition }
)

return (
  <fieldset disabled={isLoading}>
    <select value={filters.category} onChange={e => setFilters({ category: e.target.value, page: 1 })}>
      <option value="">All</option>
      <option value="electronics">Electronics</option>
    </select>
  </fieldset>
)
```

> `isLoading` is `true` while the server is fetching and streaming RSC content.
> The returned hook state updates **immediately** — only the server round-trip is pending.

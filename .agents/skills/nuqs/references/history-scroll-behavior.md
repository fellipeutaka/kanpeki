---
title: Control Scroll Behavior on URL Changes
impact: MEDIUM
tags: history, scroll, ux, navigation, viewport
---

## Control Scroll Behavior on URL Changes

By default, nuqs does **not** scroll to the top on URL changes. Use `scroll: true`
only for navigation-like state changes where users should see the new content
from the top.

```tsx
'use client'
import { useQueryState, parseAsInteger } from 'nuqs'

export function SearchPage() {
  // Filters — no scroll (user keeps their position):
  const [filter, setFilter] = useQueryState('filter')

  // Pagination — scroll to top (user sees new results from top):
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({ scroll: true, history: 'push' })
  )

  return (
    <>
      <select value={filter ?? ''} onChange={e => setFilter(e.target.value || null)}>
        <option value="">All</option>
        <option value="active">Active</option>
      </select>
      <button onClick={() => setPage(p => p + 1)}>Next Page</button>
    </>
  )
}
```

**When to use `scroll: true`:**
- Pagination (user navigates to a new page of results)
- Tab changes that load entirely new content

**When to keep `scroll: false` (default):**
- Filter, sort, or search changes on the same content
- Sliders, toggles, and other ephemeral state

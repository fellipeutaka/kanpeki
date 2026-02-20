---
title: Use history:push for Navigation-Like State
impact: MEDIUM
tags: history, push, navigation, back-button, ux
---

## Use history:push for Navigation-Like State

Use `history: 'push'` when state changes represent navigation the user would want
to undo with the Back button (pagination, tabs, wizard steps).

```tsx
'use client'
import { useQueryState, parseAsInteger } from 'nuqs'

export function Pagination() {
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({ history: 'push' })
  )
  // page 1 → 2 → 3 → Back → page 2 ✓

  return (
    <nav>
      <button onClick={() => setPage(p => p - 1)}>Previous</button>
      <span>Page {page}</span>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </nav>
  )
}
```

**Good use cases for `history: 'push'`:**
- Pagination
- Tab navigation
- Modal open/close
- Step-by-step wizards

**Mix modes when needed:**

```tsx
// Push on forward navigation, replace on reset:
setPage(page + 1)                          // push (default from parser)
setPage(1, { history: 'replace' })         // replace — avoids back-button spam on reset
```

> Breaking the Back button is bad UX. Only use `history: 'push'` when the state
> change truly represents a navigation-worthy step.

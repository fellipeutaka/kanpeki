---
title: Handle Browser Back/Forward Navigation
impact: MEDIUM
tags: history, back-button, forward, popstate, sync
---

## Handle Browser Back/Forward Navigation

nuqs automatically syncs hook state with the URL when users navigate with the
browser Back/Forward buttons — no extra code needed. The key is to read state
from the hook, not from local `useState`.

**Incorrect (local state gets stale after Back):**

```tsx
const [urlPage] = useQueryState('page', parseAsInteger.withDefault(1))
const [localPage, setLocalPage] = useState(urlPage) // duplicated!

// User: page 1 → 2 → Back
// urlPage: 1 ✓   localPage: 2 ✗ (stale!)
return <p>Page {localPage}</p>
```

**Correct (URL state is always in sync):**

```tsx
'use client'
import { useQueryState, parseAsInteger } from 'nuqs'

export function Pagination() {
  const [page, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1).withOptions({ history: 'push' })
  )
  // User: page 1 → 2 → 3 → Back → page automatically becomes 2

  return (
    <div>
      <p>Page {page}</p>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  )
}
```

nuqs subscribes to `popstate` events internally, so all hooks using the same
key update simultaneously when navigating with browser history.

---
title: Use parseAsIndex for 1-Based URL Display
impact: HIGH
tags: parser, parseAsIndex, pagination, zero-indexed, one-indexed
---

## Use parseAsIndex for 1-Based URL Display

Arrays are 0-indexed in JavaScript, but users expect 1-indexed URLs (`?page=1`).
`parseAsIndex` converts automatically: stores 0-based state, shows 1-based in URL.

**Without parseAsIndex (manual conversion, error-prone):**

```ts
const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
// URL: ?page=1 → state: 1 → array access: items[page - 1]  ← manual offset
```

**With parseAsIndex:**

```ts
import { useQueryState, parseAsIndex } from 'nuqs'

const [pageIndex, setPageIndex] = useQueryState('page', parseAsIndex.withDefault(0))
// URL: ?page=1 → state: 0 → array access: items[pageIndex]  ← direct

// URL mapping:
// ?page=1 → 0
// ?page=5 → 4
// state 0 → ?page=1
// state 4 → ?page=5
```

**Pagination example:**

```tsx
'use client'
import { useQueryState, parseAsIndex } from 'nuqs'

const ITEMS_PER_PAGE = 10

export function Pagination({ items }: { items: string[] }) {
  const [pageIndex, setPageIndex] = useQueryState('page', parseAsIndex.withDefault(0))
  const pageItems = items.slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)

  return (
    <div>
      {pageItems.map(item => <div key={item}>{item}</div>)}
      <button disabled={pageIndex === 0} onClick={() => setPageIndex(i => i - 1)}>Prev</button>
      <button onClick={() => setPageIndex(i => i + 1)}>Next</button>
    </div>
  )
}
```

Works well with TanStack Table's `pagination.pageIndex` which is also 0-based.

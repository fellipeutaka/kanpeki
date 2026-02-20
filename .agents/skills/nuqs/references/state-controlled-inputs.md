---
title: Handle Controlled Input Value Properly
impact: HIGH
tags: state, controlled-inputs, forms, null-handling, react
---

## Handle Controlled Input Value Properly

React requires controlled inputs to always have a defined `value`. Since nuqs
returns `null` when a parameter is absent, provide a fallback.

**Incorrect (null value causes React warning):**

```tsx
const [query, setQuery] = useQueryState('q') // string | null
<input value={query} ... /> // Warning: uncontrolled → controlled
```

**Option 1 — null coalescing at the JSX level:**

```tsx
const [query, setQuery] = useQueryState('q')
<input value={query ?? ''} onChange={e => setQuery(e.target.value || null)} />
```

**Option 2 — withDefault (cleaner, no fallback needed):**

```tsx
import { parseAsString } from 'nuqs'

const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''))
// query: string (never null)
<input value={query} onChange={e => setQuery(e.target.value)} />
```

**Select with literal parser (recommended):**

```tsx
const [sort, setSort] = useQueryState(
  'sort',
  parseAsStringLiteral(['asc', 'desc'] as const).withDefault('asc')
)
<select value={sort} onChange={e => setSort(e.target.value as 'asc' | 'desc')}>
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option>
</select>
```

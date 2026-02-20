---
title: Use history:replace for Ephemeral State
impact: MEDIUM
tags: history, replace, ephemeral, typing, slider
---

## Use history:replace for Ephemeral State

`history: 'replace'` (the default) merges state changes into the current history
entry. Use it for rapidly-changing state where intermediate values shouldn't
pollute the Back button history.

```tsx
'use client'
import { useQueryState, parseAsString } from 'nuqs'

// Good — typing doesn't create 5 history entries for "react":
export function SearchBox() {
  const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''))
  // history: 'replace' (default)
  return <input value={query} onChange={e => setQuery(e.target.value)} />
}
```

**Good use cases for `history: 'replace'` (default):**
- Search text input
- Slider/range values
- Filter dropdowns
- Sort order
- Any rapidly-changing ephemeral state

**Hybrid — replace while typing, push on explicit submit:**

```tsx
export function SearchForm() {
  const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''))
  const [input, setInput] = useState(query)

  return (
    <form onSubmit={e => { e.preventDefault(); setQuery(input, { history: 'push' }) }}>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  )
}
```

---
title: Clear URL Parameters with null
impact: HIGH
tags: state, null, clear, url-cleanup, reset
---

## Clear URL Parameters with null

Setting a parameter to `null` removes it from the URL. Setting to `''` or `0`
keeps the parameter with that value.

```tsx
setQuery(null)    // URL: /  (key removed)
setQuery('')      // URL: /?q=  (empty string)
setQuery(null)    // URL: /  (key removed)
```

**Correct pattern for a text input:**

```tsx
'use client'
import { useQueryState } from 'nuqs'

export function SearchBox() {
  const [query, setQuery] = useQueryState('q')
  return (
    <div>
      <input
        value={query ?? ''}
        onChange={e => setQuery(e.target.value || null)} // empty → remove key
      />
      <button onClick={() => setQuery(null)}>Clear</button>
    </div>
  )
}
```

**With a default value:**

```ts
const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))

setPage(null)
// → removes key from URL
// → returns default value (1) as state
```

**Clearing all keys with useQueryStates:**

```ts
const [coords, setCoords] = useQueryStates({ lat: parseAsFloat, lng: parseAsFloat })

setCoords(null) // removes both lat and lng, leaves other params untouched
```

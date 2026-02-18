---
title: Throttle and Debounce URL Updates
impact: MEDIUM
tags: perf, limitUrlUpdates, throttle, debounce, rate-limiting
---

## Throttle and Debounce URL Updates

Browsers rate-limit the History API (50ms default, 120ms for Safari). Use
`limitUrlUpdates` with `throttle` or `debounce` to control update frequency.

> Note: `throttleMs` was deprecated in nuqs 2.5.0. Use `limitUrlUpdates` instead.

```ts
import { throttle, debounce, defaultRateLimit } from 'nuqs'
```

### Throttle (for sliders, frequent updates)

Emits first update immediately, then batches subsequent updates at a steady pace.
Recommended for most use cases.

```ts
'use client'
import { useQueryState, parseAsString, throttle } from 'nuqs'

export function SearchBox() {
  const [query, setQuery] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({
      limitUrlUpdates: throttle(300) // UI updates instantly, URL at most every 300ms
    })
  )
  return <input value={query} onChange={e => setQuery(e.target.value)} />
}
```

### Debounce (for search inputs with `shallow: false`)

Delays the URL update until the user stops typing. Only makes sense when combined
with `shallow: false` for server-side fetching — if fetching client-side (e.g. with
TanStack Query), debounce the returned state with a third-party hook instead.

Apply debounce **per-call** rather than at the hook level, since different actions
(typing vs. clearing vs. Enter) need different behavior:

```ts
'use client'
import { useQueryState, parseAsString, debounce } from 'nuqs'

export function SearchBox() {
  const [search, setSearch] = useQueryState(
    'q',
    parseAsString.withDefault('').withOptions({ shallow: false })
  )

  return (
    <input
      value={search}
      onChange={e =>
        setSearch(e.target.value, {
          // Debounce typing; clear immediately
          limitUrlUpdates: e.target.value === '' ? undefined : debounce(500)
        })
      }
      onKeyDown={e => {
        if (e.key === 'Enter') setSearch(e.currentTarget.value) // immediate
      }}
    />
  )
}
```

> The returned state is always updated **instantly**. Only URL writes (and server
> requests when `shallow: false`) are throttled or debounced.

### Resetting to default rate

```ts
import { defaultRateLimit } from 'nuqs'

// Override a hook-level limitUrlUpdates for one specific call:
setState('bar', { limitUrlUpdates: defaultRateLimit })
```

### Disabling URL updates entirely

```ts
useQueryState('foo', { limitUrlUpdates: throttle(Infinity) })
// All useQueryState(s) hooks still update their internal state and stay in sync.
```

---
title: Avoid Derived State from URL Parameters
impact: HIGH
tags: state, derived-state, anti-pattern, single-source-of-truth
---

## Avoid Derived State from URL Parameters

Don't copy URL state into local `useState`. Two sources of truth drift out of sync.
Use URL state directly; compute derived values with `useMemo`.

**Incorrect (duplicated state, sync loop risk):**

```tsx
const [urlPage] = useQueryState('page', parseAsInteger.withDefault(1))
const [page, setPage] = useState(urlPage) // duplicated!

useEffect(() => { setPage(urlPage) }, [urlPage]) // sync attempt → potential loop
```

**Correct (single source of truth):**

```tsx
const [page] = useQueryState('page', parseAsInteger.withDefault(1))
// Use `page` directly throughout the component
```

**Derived values — use useMemo, not useState:**

```tsx
const [page] = useQueryState('page', parseAsInteger.withDefault(1))

const isFirstPage = page === 1  // simple derivation — no memo needed
const pageRange = useMemo(
  () => ({ start: (page - 1) * 10, end: page * 10 }),
  [page]
)
```

**Exception: debounced search input**

A separate `useState` is justified when you need instant local feedback while
debouncing the URL write:

```tsx
const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''))
const [inputValue, setInputValue] = useState(query) // local only for debounce

// Sync URL → input when URL changes externally (e.g. back button)
useEffect(() => { setInputValue(query) }, [query])

// Debounce input → URL (only makes sense with shallow: false)
useEffect(() => {
  const t = setTimeout(() => setQuery(inputValue || null), 300)
  return () => clearTimeout(t)
}, [inputValue, setQuery])
```

Prefer the `limitUrlUpdates: debounce(500)` per-call pattern from `perf-limit-url-updates.md`
for server-side debouncing — it's simpler and doesn't need a separate state.

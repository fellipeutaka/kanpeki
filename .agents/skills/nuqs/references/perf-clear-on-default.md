---
title: Use clearOnDefault for Clean URLs
impact: MEDIUM
tags: perf, clearOnDefault, url-cleanup, defaults, seo
---

## Use clearOnDefault for Clean URLs

`clearOnDefault: true` (the default since nuqs 2.0) removes parameters from the
URL when they equal the default value, keeping URLs clean and canonical.

```tsx
const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
// clearOnDefault: true (default)
// page=1: URL is /search  (clean, no param)
// page=2: URL is /search?page=2
```

**Set `clearOnDefault: false` only when you explicitly want default values in the URL:**

```ts
useQueryState('search', {
  defaultValue: '',
  clearOnDefault: false
})
// URL always shows ?search= even when empty
```

Use cases for `clearOnDefault: false`:
- Analytics that must track all param states
- APIs that require explicit default values
- When default value _could change_ and you want the URL to be self-contained

**Clearing a param explicitly always works regardless of this option:**

```ts
setPage(null) // always removes the key from the URL
```

**Custom parsers and equality:**

`clearOnDefault` uses `===` for comparison by default. If your parser returns
objects (not primitively comparable), implement `eq` in `createParser`:

```ts
const dateParser = createParser({
  parse: (v) => new Date(v.slice(0, 10)),
  serialize: (d) => d.toISOString().slice(0, 10),
  eq: (a, b) => a.getTime() === b.getTime() // required for Date comparison
})
```

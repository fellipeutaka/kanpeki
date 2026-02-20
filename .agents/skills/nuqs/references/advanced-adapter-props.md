---
title: Configure NuqsAdapter Global Defaults and URL Middleware
impact: LOW
tags: advanced, NuqsAdapter, defaultOptions, processUrlSearchParams, global
---

## Configure NuqsAdapter Global Defaults and URL Middleware

The `<NuqsAdapter>` accepts two props to customize behavior globally across its
entire children tree.

### defaultOptions (nuqs 2.5.0+)

Set global defaults for options that would otherwise be specified per-hook:

```tsx
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { throttle } from 'nuqs'

<NuqsAdapter
  defaultOptions={{
    shallow: false,       // All hooks trigger server re-renders by default
    scroll: true,         // Scroll to top on URL changes
    clearOnDefault: false, // Keep params in URL even at default value
    limitUrlUpdates: throttle(250), // Global throttle rate
  }}
>
  {children}
</NuqsAdapter>
```

Individual hooks and call-level options still override these defaults.

### processUrlSearchParams (nuqs 2.6.0+)

A middleware function called **after** search params are merged and **before**
they are sent to the browser. Use for consistent URL canonicalization.

The function receives a `URLSearchParams` and can modify it in-place or return a copy:

**Alphabetical sort (SEO canonical URLs):**

```tsx
<NuqsAdapter
  processUrlSearchParams={(search) => {
    search.sort()
    return search
  }}
>
  {children}
</NuqsAdapter>
```

**Adding metadata:**

```tsx
<NuqsAdapter
  processUrlSearchParams={(search) => {
    search.set('ts', Date.now().toString())
    return search
  }}
>
  {children}
</NuqsAdapter>
```

The same `processUrlSearchParams` option is available on `createSerializer` for
consistent canonicalization in link generation:

```ts
import { createSerializer } from 'nuqs/server'

const serialize = createSerializer(searchParams, {
  processUrlSearchParams: (search) => {
    search.sort()
    return search
  }
})

serialize({ a: 1, z: 1 }) // ?a=1&z=1 (sorted)
```

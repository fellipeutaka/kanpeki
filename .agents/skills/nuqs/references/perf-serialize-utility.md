---
title: Use createSerializer for Link URL Generation
impact: MEDIUM
tags: perf, createSerializer, links, navigation, ssr
---

## Use createSerializer for Link URL Generation

Use `createSerializer` to generate typed, consistent URLs for `<Link>` components
and navigation — without needing hooks. Works in Server Components.

```ts
// lib/search-params.ts
import { createSerializer, parseAsInteger, parseAsString, parseAsStringLiteral } from 'nuqs/server'

export const searchParams = {
  q: parseAsString,
  page: parseAsInteger.withDefault(1),
  sort: parseAsStringLiteral(['asc', 'desc'] as const)
}

export const serialize = createSerializer(searchParams)
```

```tsx
// Server Component — no hooks needed:
import { serialize } from '@/lib/search-params'

export function PaginationLinks({ totalPages }: { totalPages: number }) {
  return (
    <nav>
      {Array.from({ length: totalPages }, (_, i) => (
        <a key={i} href={serialize({ page: i + 1 })}>{i + 1}</a>
      ))}
    </nav>
  )
}
```

### Base parameter

Append/amend on top of an existing URL or URLSearchParams:

```ts
serialize('/search', { q: 'react', page: 1 })
// /search?q=react&page=1

serialize('?existing=param', { q: 'react' })
// ?existing=param&q=react

// null removes a key:
serialize('?remove=me', { q: 'keep', remove: null })
// ?q=keep
```

### Shorter URL keys

```ts
const serialize = createSerializer(
  { latitude: parseAsFloat, longitude: parseAsFloat },
  { urlKeys: { latitude: 'lat', longitude: 'lng' } }
)

serialize({ latitude: 45.18, longitude: 5.72 })
// ?lat=45.18&lng=5.72
```

### processUrlSearchParams (nuqs 2.6.0+)

Apply URL middleware (e.g. alphabetical sort for canonical SEO URLs):

```ts
const serialize = createSerializer(searchParams, {
  processUrlSearchParams: (search) => {
    search.sort()
    return search
  }
})
```

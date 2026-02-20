---
title: Use createSearchParamsCache for Nested RSC Access
impact: HIGH
tags: server, createSearchParamsCache, server-components, type-safety, rsc
---

## Use createSearchParamsCache for Nested RSC Access

`createSearchParamsCache` lets deeply nested Server Components access typed search
params without prop drilling. Think of it as server-side Context for search params.

> For page-level parsing only (no nested RSC access needed), prefer the simpler
> `createLoader`. See `server-create-loader.md`.

```ts
// lib/search-params.ts
import { createSearchParamsCache, parseAsString, parseAsInteger } from 'nuqs/server'

export const searchParamsCache = createSearchParamsCache({
  q: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1)
})
```

```tsx
// app/search/page.tsx
import { searchParamsCache } from '@/lib/search-params'
import type { SearchParams } from 'nuqs/server'

type PageProps = { searchParams: Promise<SearchParams> } // Next.js 15+

export default async function Page({ searchParams }: PageProps) {
  // ⚠️ Must call parse() at the page level before any get() calls
  const { q } = await searchParamsCache.parse(searchParams)
  return <div><h1>Results for {q}</h1><Results /></div>
}
```

```tsx
// components/Results.tsx (deeply nested Server Component)
import { searchParamsCache } from '@/lib/search-params'

export function Results() {
  // Access typed params without props:
  const page = searchParamsCache.get('page')
  const q = searchParamsCache.get('q')
  return <span>Showing page {page} for "{q}"</span>
}
```

Or get all values at once:

```ts
const { q, page } = searchParamsCache.all()
```

### Strict mode

Throw instead of falling back to default on invalid values:

```ts
await searchParamsCache.parse(searchParams, { strict: true })
// Throws: [nuqs] Error while parsing query `banana` for key `page`
```

### Sharing parsers with client components

```ts
// lib/search-params.ts
export const coordinatesParsers = {
  lat: parseAsFloat.withDefault(45.18),
  lng: parseAsFloat.withDefault(5.72)
}
export const coordinatesCache = createSearchParamsCache(coordinatesParsers)
```

```tsx
// Client component reuses same parsers:
'use client'
import { useQueryStates } from 'nuqs'
import { coordinatesParsers } from '@/lib/search-params'

export function Client() {
  const [{ lat, lng }, setCoords] = useQueryStates(coordinatesParsers)
}
```

### Shorter URL keys

```ts
createSearchParamsCache(
  { latitude: parseAsFloat.withDefault(45.18) },
  { urlKeys: { latitude: 'lat' } }
)
// Code uses `latitude`, URL uses `?lat=...`
```

The cache is valid only for the **current page render** (uses React's `cache` function).

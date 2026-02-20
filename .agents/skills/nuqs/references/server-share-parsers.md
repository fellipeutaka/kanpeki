---
title: Share Parsers Between Client and Server
impact: HIGH
tags: server, parsers, shared, consistency, client-server
---

## Share Parsers Between Client and Server

Define parsers once in a shared file and reuse them in both server utilities
(`createLoader`, `createSearchParamsCache`) and client hooks (`useQueryState`,
`useQueryStates`). Prevents bugs from mismatched defaults or parser types.

```ts
// lib/search-params.ts
import { parseAsInteger, parseAsString, parseAsStringLiteral } from 'nuqs/server'
// nuqs/server is safe to import in shared code (no 'use client')

export const searchParamsParsers = {
  q: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1),
  sort: parseAsStringLiteral(['asc', 'desc'] as const).withDefault('asc')
}
```

```ts
// lib/search-params.server.ts
import { createLoader, createSearchParamsCache } from 'nuqs/server'
import { searchParamsParsers } from './search-params'

export const loadSearchParams = createLoader(searchParamsParsers)
export const searchParamsCache = createSearchParamsCache(searchParamsParsers)
```

```tsx
// app/page.tsx (Server Component)
import { loadSearchParams } from '@/lib/search-params.server'

export default async function Page({ searchParams }) {
  const { q, page } = await loadSearchParams(searchParams)
}
```

```tsx
// components/Pagination.tsx (Client Component)
'use client'
import { useQueryState } from 'nuqs'
import { searchParamsParsers } from '@/lib/search-params'

export function Pagination() {
  const [page, setPage] = useQueryState('page', searchParamsParsers.page)
  // Same parser, same default as server — guaranteed consistency
}
```

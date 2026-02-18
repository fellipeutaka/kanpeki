---
title: Define Shared Parsers in a Dedicated File
impact: HIGH
tags: setup, parsers, organization, reusability, consistency
---

## Define Shared Parsers in a Dedicated File

When multiple components use the same URL parameters, define parsers in a shared
file to prevent mismatches and duplication.

**Incorrect (duplicate, inconsistent parsers):**

```tsx
// components/Pagination.tsx
const [page] = useQueryState('page', parseAsInteger.withDefault(1))

// components/PageInfo.tsx
const [page] = useQueryState('page') // string parser — mismatch!
```

**Correct:**

```ts
// lib/search-params.ts
import { parseAsInteger, parseAsString, parseAsStringLiteral } from 'nuqs/server'

export const searchParams = {
  page: parseAsInteger.withDefault(1),
  q: parseAsString.withDefault(''),
  sort: parseAsStringLiteral(['asc', 'desc'] as const).withDefault('asc')
}
```

```tsx
// components/Pagination.tsx
'use client'
import { useQueryState } from 'nuqs'
import { searchParams } from '@/lib/search-params'

const [page, setPage] = useQueryState('page', searchParams.page)
```

```tsx
// components/PageInfo.tsx
'use client'
import { useQueryState } from 'nuqs'
import { searchParams } from '@/lib/search-params'

const [page] = useQueryState('page', searchParams.page) // same parser, consistent type
```

**Benefits:**
- Single source of truth — update defaults in one place
- TypeScript catches mismatches at compile time
- Reusable by `useQueryStates`, `createLoader`, `createSerializer`

**Using with useQueryStates:**

```ts
import { useQueryStates } from 'nuqs'
import { searchParams } from '@/lib/search-params'

const [{ page, q, sort }, setSearch] = useQueryStates(searchParams)
```

**Custom hooks pattern (tips-and-tricks):**

```ts
// hooks/use-search.ts
'use client'
import { useQueryStates } from 'nuqs'
import { searchParams } from '@/lib/search-params'

export function useSearch() {
  return useQueryStates(searchParams)
}
```

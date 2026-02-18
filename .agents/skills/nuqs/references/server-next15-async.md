---
title: Handle Async searchParams in Next.js 15+
impact: HIGH
tags: server, nextjs15, async, searchParams, promise
---

## Handle Async searchParams in Next.js 15+

In Next.js 15+, `searchParams` is a `Promise` that must be awaited. Using it
synchronously causes TypeScript errors and runtime issues.

**Version-agnostic pattern (works in Next.js 14 and 15):**

```tsx
// app/search/page.tsx
import { loadSearchParams } from '@/lib/search-params'
import type { SearchParams } from 'nuqs/server'

type PageProps = { searchParams: Promise<SearchParams> }

export default async function Page({ searchParams }: PageProps) {
  // createLoader handles Promise automatically:
  const { q, page } = await loadSearchParams(searchParams)
  return <Results query={q} page={page} />
}
```

> `createLoader` (see `server-create-loader.md`) is the simplest approach —
> it accepts a `Promise<SearchParams>` and returns a `Promise`, so you just `await` it.

**With createSearchParamsCache:**

```tsx
type PageProps = { searchParams: Promise<SearchParams> }

export default async function Page({ searchParams }: PageProps) {
  // parse() accepts Promise<SearchParams> in both Next.js 14 and 15
  await searchParamsCache.parse(searchParams)
  return <PageContent />
}
```

**Why `Promise<SearchParams>` works in Next.js 14:**

`SearchParams` from `nuqs/server` is typed as `Promise<...>`. In Next.js 14,
the pages router passes a plain object which also satisfies `Promise<SearchParams>`
because `createLoader` / `parse()` transparently handles both forms.

**Next.js 14 — non-async page (cache only):**

```tsx
type PageProps = {
  searchParams: Record<string, string | string[] | undefined>
}

export default function Page({ searchParams }: PageProps) {
  searchParamsCache.parse(searchParams) // no await in Next.js 14
  return <PageContent />
}
```

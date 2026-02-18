---
title: Use createLoader for Server-Side Parsing
impact: HIGH
tags: server, createLoader, searchParams, next, remix, react-router
---

## Use createLoader for Server-Side Parsing

`createLoader` (introduced in nuqs 2.3.0) is the simplest way to parse typed
search params on the server. It returns a function you call with the incoming
search params at the page/loader level.

```ts
// lib/search-params.ts
import { createLoader, parseAsFloat, parseAsString } from 'nuqs/server'

export const loadSearchParams = createLoader({
  q: parseAsString.withDefault(''),
  lat: parseAsFloat.withDefault(0),
  lng: parseAsFloat.withDefault(0),
})
```

### Next.js App Router (Next.js 15+)

```tsx
// app/page.tsx
import { loadSearchParams } from '@/lib/search-params'
import type { SearchParams } from 'nuqs/server'

type PageProps = { searchParams: Promise<SearchParams> }

export default async function Page({ searchParams }: PageProps) {
  const { q, lat, lng } = await loadSearchParams(searchParams)
  return <Map query={q} lat={lat} lng={lng} />
}
```

**PPR / dynamicIO tip:** Don't await — pass the Promise to a `<Suspense>`-wrapped child
to stream the dynamic part while serving a static outer shell immediately:

```tsx
export default function Page({ searchParams }: PageProps) {
  return (
    <Suspense fallback={<Loading />}>
      <DynamicContent searchParams={searchParams} />
    </Suspense>
  )
}

async function DynamicContent({ searchParams }: PageProps) {
  const { q } = await loadSearchParams(searchParams)
  return <Results query={q} />
}
```

### Next.js Pages Router

```ts
// pages/index.tsx
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { lat, lng } = loadSearchParams(query)
  return { props: { ... } }
}
```

### Remix / React Router

```ts
// app/routes/_index.tsx
export function loader({ request }: LoaderFunctionArgs) {
  const { q, lat, lng } = loadSearchParams(request)
  return { ... }
}
```

### Accepted input types

`loadSearchParams` accepts:
- `string` — full URL (`https://example.com?foo=bar`) or just params (`?foo=bar`)
- `URL`
- `URLSearchParams`
- `Request`
- `Record<string, string | string[] | undefined>`
- `Promise` of any of the above (returns a Promise in that case)

### Strict mode

By default, invalid values fall back to the parser's default (or `null`).
Use strict mode to throw instead:

```ts
// Throws: [nuqs] Error while parsing query `banana` for key `lat`
loadSearchParams('?lat=banana', { strict: true })
```

### createLoader vs createSearchParamsCache

| | `createLoader` | `createSearchParamsCache` |
|-|---------------|--------------------------|
| Use case | Page-level parsing only | Need `.get()` in nested RSC without prop drilling |
| API | `await loadSearchParams(searchParams)` | `parse()` at page, `get()` in children |
| Complexity | Simpler | More setup |

Use `createLoader` by default; switch to `createSearchParamsCache` only when you
need to access search params deep in the RSC tree. See `server-search-params-cache.md`.

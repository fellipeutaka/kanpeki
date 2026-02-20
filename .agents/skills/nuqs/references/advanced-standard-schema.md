---
title: Standard Schema Integration and Type Inference
impact: LOW
tags: advanced, createStandardSchemaV1, inferParserType, standard-schema, tanstack-router, trpc
---

## Standard Schema Integration and Type Inference

### createStandardSchemaV1 (nuqs 2.5.0+)

Convert a nuqs search params descriptor into a [Standard Schema](https://standardschema.dev)
v1 validator for use with tools like tRPC, TanStack Router, or any Standard Schema consumer.

```ts
import { createStandardSchemaV1, parseAsInteger, parseAsString } from 'nuqs'
// or from 'nuqs/server' for shared/server code

export const searchParams = {
  searchTerm: parseAsString.withDefault(''),
  maxResults: parseAsInteger.withDefault(10)
}

export const validateSearchParams = createStandardSchemaV1(searchParams)
```

**With tRPC:**

```ts
router({
  search: publicProcedure.input(validateSearchParams).query(({ input }) => {
    // input.searchTerm: string, input.maxResults: number
  })
})
```

**With TanStack Router `validateSearch`:**

Use the `partialOutput: true` option so all fields are optional (matching nuqs
default behavior, where unset params return defaults rather than fail validation):

```ts
// src/routes/search.tsx
import { createStandardSchemaV1 } from 'nuqs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
  validateSearch: createStandardSchemaV1(searchParams, { partialOutput: true })
})

function RouteComponent() {
  const [{ searchTerm, maxResults }] = useQueryStates(searchParams)
  // TanStack Router now knows the search params types for type-safe <Link> components
}
```

> TanStack Router support is experimental. Only trivial types are supported for
> type-safe linking (string, enum, literal, number, boolean, JSON). `urlKeys` is not supported.

### inferParserType

Extract the TypeScript type from a parser or parser object:

```ts
import { parseAsInteger, parseAsBoolean, type inferParserType } from 'nuqs'

// Single parser:
inferParserType<typeof parseAsInteger>          // number | null
inferParserType<typeof parseAsInteger.withDefault(0)> // number

// Parser object (for useQueryStates / createLoader):
const parsers = {
  page: parseAsInteger,
  enabled: parseAsBoolean.withDefault(false)
}
type State = inferParserType<typeof parsers>
// { page: number | null, enabled: boolean }
```

### UrlKeys type helper

When reusing parser + urlKeys definitions across hooks, loaders, and serializers:

```ts
import { type UrlKeys } from 'nuqs' // or 'nuqs/server'

export const coordinatesParsers = {
  latitude: parseAsFloat.withDefault(45.18),
  longitude: parseAsFloat.withDefault(5.72)
}

export const coordinatesUrlKeys: UrlKeys<typeof coordinatesParsers> = {
  latitude: 'lat',
  longitude: 'lng'
}
```

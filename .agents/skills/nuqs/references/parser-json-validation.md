---
title: Validate JSON Parser with Standard Schema
impact: CRITICAL
tags: parser, parseAsJson, validation, standard-schema, zod
---

## Validate JSON Parser with Standard Schema

`parseAsJson` accepts a [Standard Schema](https://standardschema.dev) compatible validator
(Zod, ArkType, Valibot) or a sync validation function for other libraries.
Without validation, malformed JSON in the URL causes type-unsafe runtime behavior.

**Incorrect (no validation):**

```ts
import { parseAsJson } from 'nuqs'

// No validation — any JSON passes through untyped
useQueryState('filters', parseAsJson())
```

**Correct (Standard Schema — preferred):**

```ts
import { useQueryState, parseAsJson } from 'nuqs'
import { z } from 'zod'

const FiltersSchema = z.object({
  minPrice: z.number(),
  maxPrice: z.number(),
  categories: z.array(z.string())
})

const [filters, setFilters] = useQueryState(
  'filters',
  parseAsJson(FiltersSchema).withDefault({
    minPrice: 0,
    maxPrice: 1000,
    categories: []
  })
)
// Invalid JSON returns null → falls back to default
```

Works with any Standard Schema compatible library (ArkType, Valibot, etc.):

```ts
import { type } from 'arktype'

const FiltersSchema = type({ minPrice: 'number', maxPrice: 'number' })
parseAsJson(FiltersSchema)
```

**For non-Standard-Schema libraries (Yup, Joi):**

Pass a sync validation function that either throws or returns `null` for invalid data:

```ts
import { object, number } from 'yup'

const FiltersSchema = object({ minPrice: number(), maxPrice: number() })

parseAsJson(FiltersSchema.validateSync) // validateSync throws on invalid input
```

> Only **synchronous** validation is supported. Async validators are not compatible.

**Server-side:** import from `nuqs/server` to avoid the `'use client'` directive:

```ts
import { parseAsJson } from 'nuqs/server'
```

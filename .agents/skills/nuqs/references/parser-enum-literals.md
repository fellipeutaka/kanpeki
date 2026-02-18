---
title: Use Literal and Enum Parsers for Constrained Values
impact: CRITICAL
tags: parser, parseAsStringLiteral, parseAsNumberLiteral, parseAsStringEnum, validation
---

## Use Literal and Enum Parsers for Constrained Values

When state should only accept specific values (sort order, view mode, status),
use literal or enum parsers. Invalid URL values silently fall back to the default.

### String literals (preferred for TypeScript unions)

```ts
import { parseAsStringLiteral, type inferParserType } from 'nuqs'

const sortOrders = ['asc', 'desc'] as const // as const is required

const parser = parseAsStringLiteral(sortOrders)
type SortOrder = inferParserType<typeof parser> // 'asc' | 'desc'

const [sort, setSort] = useQueryState('sort', parser.withDefault('asc'))
// URL: ?sort=malicious → falls back to 'asc'
```

### Numeric literals

```ts
import { parseAsNumberLiteral } from 'nuqs'

const pageSizes = [10, 25, 50, 100] as const

const [pageSize, setPageSize] = useQueryState(
  'limit',
  parseAsNumberLiteral(pageSizes).withDefault(25)
)
```

### TypeScript enums

```ts
import { parseAsStringEnum } from 'nuqs'

enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

const [status, setStatus] = useQueryState(
  'status',
  parseAsStringEnum<Status>(Object.values(Status)).withDefault(Status.Active)
)
// URL value is the enum value: ?status=active (not the key 'Active')
```

### When to prefer literals over enums

- **String literals** — simpler, idiomatic TypeScript, source of truth for type inference with `inferParserType`
- **Enums** — when you already have an enum in your codebase

### Declaring values outside the parser

Useful when you need to iterate over values at runtime (e.g. render tabs):

```ts
const views = ['grid', 'list', 'table'] as const // as const required to keep literal types

const viewParser = parseAsStringLiteral(views).withDefault('grid')

// Render tabs from the same array:
views.map(v => <Tab key={v} value={v} label={v} />)
```

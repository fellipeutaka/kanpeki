---
title: Use Typed Parsers for Non-String Values
impact: CRITICAL
tags: parser, type-safety, parseAsInteger, parseAsFloat, parseAsBoolean
---

## Use Typed Parsers for Non-String Values

URL query params are always strings. Without typed parsers you get string values
where you expect numbers or booleans, causing type errors and incorrect arithmetic.

**Incorrect (string instead of number):**

```tsx
'use client'
import { useQueryState } from 'nuqs'

export default function Pagination() {
  const [page, setPage] = useQueryState('page') // string | null
  // page + 1 = "11" not 2 when page is "1"
  return <button onClick={() => setPage(String(Number(page) + 1))}>Next</button>
}
```

**Correct:**

```tsx
'use client'
import { useQueryState, parseAsInteger } from 'nuqs'

export default function Pagination() {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  // page is number — arithmetic works correctly
  return <button onClick={() => setPage(p => p + 1)}>Next</button>
}
```

**Available built-in parsers:**

| Parser | Type | Notes |
|--------|------|-------|
| `parseAsString` | `string` | Noop; useful for `.withDefault()` / `.withOptions()` |
| `parseAsInteger` | `number` | `parseInt` base 10 |
| `parseAsFloat` | `number` | `parseFloat` |
| `parseAsHex` | `number` | Hexadecimal encoding |
| `parseAsIndex` | `number` | +1 offset in URL for 0-based index in code |
| `parseAsBoolean` | `boolean` | |
| `parseAsTimestamp` | `Date` | Milliseconds since epoch |
| `parseAsIsoDateTime` | `Date` | ISO 8601 datetime string |
| `parseAsIsoDate` | `Date` | ISO 8601 date string (no time) |
| `parseAsStringLiteral(values)` | `'a' \| 'b'` | TS union from array |
| `parseAsNumberLiteral(values)` | `1 \| 2 \| 3` | Numeric literal union |
| `parseAsStringEnum<E>(values)` | `E` | TypeScript enum |
| `parseAsArrayOf(parser)` | `T[]` | Comma-separated (`?ids=1,2,3`) |
| `parseAsNativeArrayOf(parser)` | `T[]` | Repeated keys (`?id=1&id=2`) |
| `parseAsJson(schema)` | inferred | JSON + Standard Schema validation |

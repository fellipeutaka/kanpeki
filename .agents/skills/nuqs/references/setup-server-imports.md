---
title: Import Server Utilities from nuqs/server
impact: CRITICAL
tags: setup, nuqs/server, imports, createSearchParamsCache, server-components
---

## Import Server Utilities from nuqs/server

The main `nuqs` package includes a `'use client'` directive. Importing server
utilities (parsers, `createLoader`, `createSearchParamsCache`) from `nuqs` in
shared or server code causes bundling errors.

**Incorrect (wrong import in shared/server code):**

```tsx
// lib/search-params.ts
import { createSearchParamsCache, parseAsString } from 'nuqs'
// Error: Attempted to call withDefault() from the server but withDefault is on the client.
```

**Correct (import from nuqs/server):**

```tsx
// lib/search-params.ts
import {
  createLoader,
  createSearchParamsCache,
  parseAsString,
  parseAsInteger
} from 'nuqs/server'
// Safe for Server Components and shared code

export const searchParamsCache = createSearchParamsCache({
  q: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1)
})
```

**What to import from where:**

| What | Client components | Server / shared code |
|------|-------------------|----------------------|
| `useQueryState`, `useQueryStates` | `nuqs` | ❌ not available |
| Parsers (`parseAsString`, etc.) | `nuqs` | `nuqs/server` |
| `createLoader` | — | `nuqs/server` |
| `createSearchParamsCache` | — | `nuqs/server` |
| `createSerializer` | `nuqs` | `nuqs/server` |
| `createStandardSchemaV1` | `nuqs` | `nuqs/server` |
| `inferParserType` | `nuqs` | `nuqs/server` |

For non-Next.js frameworks, `nuqs` and `nuqs/server` are interchangeable (no
`'use client'` concern), but prefer `nuqs/server` for shared parser files.

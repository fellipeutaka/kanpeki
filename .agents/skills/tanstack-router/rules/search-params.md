# Search Params

TanStack Router treats search params as first-class, type-safe state. Always validate them — they're user-controlled input.

## validateSearch — Manual

```tsx
export const Route = createFileRoute('/posts')({
  validateSearch: (search: Record<string, unknown>) => ({
    page: Number(search.page) || 1,
    filter: (search.filter as string) || '',
    sort: (search.sort as 'newest' | 'oldest') || 'newest',
  }),
})
```

## Standard Schema Support

TanStack Router natively supports any schema library that implements the [Standard Schema](https://standardschema.dev/) spec. Pass a schema directly to `validateSearch` — no adapter needed.

Compatible libraries include: **Zod** (3.24+), **Valibot** (v1+), **ArkType** (v2+), **Yup** (1.7+), **Joi** (18+), **Effect Schema** (3.13+), **Typia** (9.2+), and [many more](https://standardschema.dev/schema).

### Zod

```tsx
import { z } from 'zod'

const searchSchema = z.object({
  page: z.number().default(1),
  filter: z.string().default(''),
  sort: z.enum(['newest', 'oldest']).default('newest'),
})

export const Route = createFileRoute('/shop/products')({
  validateSearch: searchSchema, // No adapter needed
})
```

### Yup

```tsx
import y from 'yup'

const searchSchema = y.object({
  page: y.number().default(1),
  filter: y.string().default(''),
  sort: y.string().oneOf(['newest', 'oldest']).default('newest'),
})

export const Route = createFileRoute('/shop/products')({
  validateSearch: searchSchema, // No adapter needed
})
```

### Valibot

```tsx
import * as v from 'valibot'

const searchSchema = v.object({
  page: v.optional(v.number(), 1),
  filter: v.optional(v.string(), ''),
})

export const Route = createFileRoute('/shop/products')({
  validateSearch: searchSchema, // No adapter needed
})
```

### ArkType

```tsx
import { type } from 'arktype'

const searchSchema = type({
  'page?': 'number = 1',
  'filter?': 'string = ""',
  'sort?': '"newest" | "oldest" = "newest"',
})

export const Route = createFileRoute('/shop/products')({
  validateSearch: searchSchema,
})
```

## .default() Makes Link Params Optional

With `.default()`, `<Link to="/shop/products" />` works without passing `search` — the schema's input type marks defaulted fields as optional.

Without `.default()` (e.g., using `.catch()` in Zod), all params are required on `<Link>`.

```tsx
// ✅ .default() — Link params optional, but throws on invalid values (e.g. page=abc)
z.number().default(1)

// ❌ .catch() — Link requires ALL params (search is mandatory)
z.number().catch(1)
```

| Modifier (Zod) | Link params optional? | Handles invalid values? |
|----------------|----------------------|------------------------|
| `.default()` | Yes | No (throws on invalid) |
| `.catch()` | No (all required) | Yes (falls back silently) |

## When You Need @tanstack/zod-adapter

The adapter is only needed when you want **both**: optional Link params **and** graceful handling of invalid values. Use `fallback()` + `.default()` together:

```bash
npm install @tanstack/zod-adapter
```

```tsx
import { fallback, zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'

const searchSchema = z.object({
  page: fallback(z.number(), 1).default(1),       // Invalid → 1, AND optional on Link
  filter: fallback(z.string(), '').default(''),
  sort: fallback(z.enum(['newest', 'oldest']), 'newest').default('newest'),
})

export const Route = createFileRoute('/shop/products')({
  validateSearch: zodValidator(searchSchema),
})
```

- `fallback(schema, value)` — catches invalid values (like `.catch()`) but preserves types
- `.default()` — makes the param optional on Link

**Without `.default()`**, even with the adapter, Link requires all params:

| Approach | Link params optional? | Invalid values handled? |
|----------|----------------------|------------------------|
| `.default()` (no adapter) | Yes | No |
| `.catch()` (no adapter) | No | Yes |
| `zodValidator` + `fallback()` + `.default()` | Yes | Yes |

**Recommendation**: Use plain `.default()` with any Standard Schema library for most cases. Add `@tanstack/zod-adapter` with `fallback()` + `.default()` only when you also need graceful handling of invalid URL values in Zod.

## Reading Search Params

```tsx
function ProductList() {
  const { page, filter, sort } = Route.useSearch()
  return <div>Page: {page}, Filter: {filter}, Sort: {sort}</div>
}
```

## Updating Search Params

### Via Link

```tsx
import { Link } from '@tanstack/react-router'

// Set specific values
<Link to="/products" search={{ page: 2, sort: 'newest', filter: '' }}>
  Page 2
</Link>

// Update functionally (preserve other params)
<Link to="." search={(prev) => ({ ...prev, page: prev.page + 1 })}>
  Next Page
</Link>
```

### Via useNavigate

```tsx
const navigate = useNavigate()

navigate({
  to: '.',
  search: (prev) => ({ ...prev, page: prev.page + 1 }),
})
```

## Custom Serializer

For cleaner URLs, use a custom search param serializer:

```tsx
import { createRouter } from '@tanstack/react-router'

const router = createRouter({
  routeTree,
  search: {
    serialize: (search) => customStringify(search),
    parse: (searchString) => customParse(searchString),
  },
})
```

Compatible libraries: `qs`, `query-string`, `JSURL2`.

---
title: Create Custom Parsers for Complex Types
impact: LOW
tags: advanced, createParser, createMultiParser, custom, serialize, parse
---

## Create Custom Parsers for Complex Types

Use `createParser` when built-in parsers don't fit your data type. Provide
`parse`, `serialize`, and optionally `eq` (for object types).

```ts
import { createParser } from 'nuqs'

// /?sort=name:asc → { id: 'name', desc: false }
const parseAsSort = createParser({
  parse(query) {
    const [id = '', direction = ''] = query.split(':')
    if (!id) return null
    return { id, desc: direction === 'desc' }
  },
  serialize(value) {
    return `${value.id}:${value.desc ? 'desc' : 'asc'}`
  },
  // eq is required for object types (=== won't work on objects)
  eq(a, b) {
    return a.id === b.id && a.desc === b.desc
  }
})

const [sort, setSort] = useQueryState('sort', parseAsSort.withDefault({ id: 'name', desc: false }))
```

`eq` is used by the `clearOnDefault` option to detect equality with the default value.

### Star rating example (pretty URL)

```ts
const parseAsStarRating = createParser({
  parse(query) {
    const parts = query.split('★')
    if (parts.length < 2 || !parts.every(s => s === '')) return null
    return Math.min(5, parts.length - 1)
  },
  serialize(value) {
    return Array.from({ length: value }, () => '★').join('')
  }
})
// ?rating=★★★ → 3
```

### Caveat: lossy serializers

If your `serialize` loses precision, page reloads will restore the lossy value:

```ts
// Bad: toFixed(4) loses precision
serialize: v => v.toFixed(4)
// ?lat=1.2345 → reloads as 1.2345, not original 1.23456789
```

### Custom multi-parsers (key repetition)

For parsers that operate on repeated keys (`?tag=a&tag=b`), use `createMultiParser`:

```ts
import { createMultiParser } from 'nuqs'

// parse receives string[] of all values for the key
// serialize returns string[] where each item becomes a separate key occurrence
const parseAsTagList = createMultiParser({
  parse(values) {
    return values.length === 0 ? null : values.filter(Boolean)
  },
  serialize(value) {
    return value
  }
})
```

---
title: Implement eq Function for Object Parsers
impact: LOW
tags: advanced, eq, equality, objects, clearOnDefault
---

## Implement eq Function for Object Parsers

When creating custom parsers for object types, implement `eq` to define value
equality. Without it, nuqs falls back to `===` (reference equality), which never
matches two different object instances with the same values — causing incorrect
`clearOnDefault` behavior and unnecessary URL updates.

```ts
import { createParser } from 'nuqs'

const parseAsSort = createParser({
  parse(query) {
    const [id = '', direction = ''] = query.split(':')
    return { id, desc: direction === 'desc' }
  },
  serialize(value) {
    return `${value.id}:${value.desc ? 'desc' : 'asc'}`
  },
  // Without eq, clearOnDefault would never detect equality:
  eq(a, b) {
    return a.id === b.id && a.desc === b.desc
  }
})

const [sort, setSort] = useQueryState(
  'sort',
  parseAsSort.withDefault({ id: 'name', desc: false })
)
// clearOnDefault now correctly removes ?sort=name:asc from URL
```

**For arrays:**

```ts
const parseAsIdList = createParser<number[]>({
  parse: q => q.split(',').map(Number),
  serialize: v => v.join(','),
  eq: (a, b) => a.length === b.length && a.every((v, i) => v === b[i])
})
```

**For dates:**

```ts
const parseAsDateRange = createParser({
  parse: ...,
  serialize: ...,
  eq: (a, b) => a.getTime() === b.getTime()
})
```

`eq` is used by `clearOnDefault` (to detect equality with the default value) and
internally to avoid redundant URL writes.

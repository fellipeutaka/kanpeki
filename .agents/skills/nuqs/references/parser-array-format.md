---
title: Choose Correct Array Parser Format
impact: CRITICAL
tags: parser, parseAsArrayOf, parseAsNativeArrayOf, arrays, url-format
---

## Choose Correct Array Parser Format

nuqs provides two array parsers with different URL representations. Choose based
on your backend and URL readability needs.

### parseAsArrayOf — comma-separated (compact)

```ts
import { useQueryState, parseAsArrayOf, parseAsInteger } from 'nuqs'

const [ids, setIds] = useQueryState('ids', parseAsArrayOf(parseAsInteger).withDefault([]))
// URL: ?ids=1,2,3

// Custom separator:
parseAsArrayOf(parseAsInteger, ';') // ?ids=1;2;3
```

### parseAsNativeArrayOf — repeated keys (standard form encoding)

Available since nuqs 2.7.0. Uses the native URL format where the same key
appears multiple times:

```ts
import { useQueryState, parseAsNativeArrayOf, parseAsString } from 'nuqs'

const [tags, setTags] = useQueryState(
  'tag', // singular key name is conventional
  parseAsNativeArrayOf(parseAsString) // has built-in default of []
)
// URL: ?tag=react&tag=nextjs&tag=typescript
// → ['react', 'nextjs', 'typescript']
```

> `parseAsNativeArrayOf` has a built-in default of empty array, so you don't need
> `.withDefault([])`. You can still chain `.withDefault()` to override it.

### When to use each

| Format | URL Example | Use When |
|--------|-------------|----------|
| `parseAsArrayOf` | `?ids=1,2,3` | Compact URLs, nuqs-controlled backends |
| `parseAsNativeArrayOf` | `?tag=a&tag=b` | Standard form encoding, PHP/Rails/most web backends |

All parsers work as the `itemParser` argument — combine with any built-in parser:

```ts
parseAsNativeArrayOf(parseAsInteger)  // ?id=1&id=2 → [1, 2]
parseAsNativeArrayOf(parseAsFloat)    // ?val=1.5&val=2.7 → [1.5, 2.7]
```

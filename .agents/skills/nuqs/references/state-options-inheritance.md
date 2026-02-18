---
title: Use withOptions for Parser-Level Configuration
impact: MEDIUM
tags: state, withOptions, configuration, parsers, reusability
---

## Use withOptions for Parser-Level Configuration

Configure options on the parser with `withOptions` instead of repeating them in
every `useQueryState` call.

**Incorrect (options repeated everywhere):**

```tsx
const [q] = useQueryState('q', { ...parseAsString, shallow: false, history: 'push' })
const [filter] = useQueryState('filter', { ...parseAsString, shallow: false, history: 'push' })
```

**Correct:**

```ts
// lib/search-params.ts
import { parseAsString, parseAsInteger, throttle } from 'nuqs/server'

const serverOptions = {
  shallow: false,
  history: 'push' as const,
  limitUrlUpdates: throttle(500)
}

export const searchParams = {
  q: parseAsString.withDefault('').withOptions(serverOptions),
  filter: parseAsString.withDefault('').withOptions(serverOptions),
  page: parseAsInteger.withDefault(1).withOptions(serverOptions)
}
```

```tsx
// In components — options come from the parser:
const [q, setQ] = useQueryState('q', searchParams.q)
const [filter, setFilter] = useQueryState('filter', searchParams.filter)
```

**Call-level options always win:**

```ts
// Precedence: call-level > parser-level > hook-level (second arg)
setState('value', { history: 'replace' }) // overrides parser's history:'push'
```

**Chaining is additive:**

```ts
parseAsInteger
  .withDefault(1)
  .withOptions({ shallow: false })
  .withOptions({ limitUrlUpdates: throttle(300) }) // merged with previous options
```

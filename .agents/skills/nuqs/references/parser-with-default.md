---
title: Use withDefault for Non-Nullable State
impact: CRITICAL
tags: parser, withDefault, null-safety, type-inference
---

## Use withDefault for Non-Nullable State

Without `withDefault`, query state is `T | null`. This forces null checks
throughout the component. Use `withDefault` to get non-nullable types.

**Incorrect (nullable, null checks everywhere):**

```tsx
'use client'
import { useQueryState, parseAsInteger } from 'nuqs'

export default function Counter() {
  const [count, setCount] = useQueryState('count', parseAsInteger) // number | null
  return (
    <button onClick={() => setCount((count ?? 0) + 1)}>
      Count: {count ?? 0}
    </button>
  )
}
```

**Correct:**

```tsx
'use client'
import { useQueryState, parseAsInteger } from 'nuqs'

export default function Counter() {
  const [count, setCount] = useQueryState('count', parseAsInteger.withDefault(0))
  // count is number — never null
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}
```

**Three equivalent ways to specify a default:**

```ts
useQueryState('count', parseAsInteger.withDefault(0))

useQueryState('count', { ...parseAsInteger, defaultValue: 0 })

useQueryState('count', { defaultValue: 0 }) // string parser with default
```

**Important behaviors:**
- The default value is **not** written to the URL unless you set it explicitly (or use `clearOnDefault: false`)
- Setting state to `null` removes the key from the URL **and** returns the default value as state
- The default is also returned when the URL value is **invalid** for the parser

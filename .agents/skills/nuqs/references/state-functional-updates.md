---
title: Use Functional Updates for State Derived from Previous Value
impact: HIGH
tags: state, functional-updates, closures, setState, increment
---

## Use Functional Updates for State Derived from Previous Value

When new state depends on the previous state (incrementing, toggling, appending),
use the functional updater form `setState(prev => next)`. Direct value references
in closures may be stale.

**Incorrect (stale closure):**

```tsx
const incrementTwice = () => {
  setCount(count + 1) // stale `count`
  setCount(count + 1) // same stale `count` — increments by 1, not 2
}
```

**Correct:**

```tsx
const incrementTwice = () => {
  setCount(c => c + 1) // latest value
  setCount(c => c + 1) // gets the updated value — increments by 2
}
```

**Common patterns:**

```tsx
// Toggle boolean
setEnabled(e => !e)

// Append to array
setTags(t => [...t, 'new-tag'])

// Remove from array
setTags(t => t.filter(tag => tag !== 'remove-me'))

// Clamp number
setVolume(v => Math.min(100, Math.max(0, v + 10)))
```

With `withDefault`, the updater function parameter is never `null`:

```ts
const [count, setCount] = useQueryState('count', parseAsInteger.withDefault(0))
setCount(c => c + 1) // c: number (never null)
```

Without `withDefault`, handle `null` in the updater:

```ts
const [count, setCount] = useQueryState('count', parseAsInteger)
setCount(c => (c ?? 0) + 1) // c: number | null
```

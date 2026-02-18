---
title: Memoize Components Using URL State
impact: MEDIUM
tags: perf, memo, re-renders, optimization, react
---

## Memoize Components Using URL State

When URL state changes, all components using that state re-render. Use `React.memo`
or component extraction to prevent re-renders of unrelated children.

**Incorrect (entire parent re-renders on URL change):**

```tsx
export default function SearchPage() {
  const [query] = useQueryState('q')
  return (
    <div>
      <ResultsList query={query} />
      <ExpensiveSidebar /> {/* re-renders every time query changes */}
    </div>
  )
}
```

**Option 1 — React.memo:**

```tsx
import { memo } from 'react'

const ExpensiveSidebar = memo(function ExpensiveSidebar() {
  return <aside>...</aside>
})
```

**Option 2 — extract URL state to a leaf component:**

```tsx
// SearchPage has no URL state → doesn't re-render
export default function SearchPage() {
  return (
    <div>
      <SearchSection />  {/* only this re-renders */}
      <ExpensiveSidebar />
    </div>
  )
}

// Only this component subscribes to URL state:
function SearchSection() {
  const [query] = useQueryState('q', parseAsString.withDefault(''))
  return <ResultsList query={query} />
}
```

Option 2 (component extraction) is generally preferred as it avoids memo
boilerplate and follows the principle of co-locating state with its consumers.

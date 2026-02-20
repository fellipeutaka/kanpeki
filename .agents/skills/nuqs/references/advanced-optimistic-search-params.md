---
title: useOptimisticSearchParams for Remix and React Router
impact: LOW
tags: advanced, useOptimisticSearchParams, remix, react-router, shallow
---

## useOptimisticSearchParams for Remix and React Router

In Remix and React Router, nuqs uses shallow routing by default (updates the URL
without running loaders). The stock `useSearchParams` hook from those frameworks
does **not** reflect shallow URL updates — it only reacts to full navigation.

`useOptimisticSearchParams` fills this gap: it returns a read-only `URLSearchParams`
that reacts to **all** URL changes, including nuqs shallow updates.

```ts
import { useOptimisticSearchParams } from 'nuqs/adapters/remix'
// or:
import { useOptimisticSearchParams } from 'nuqs/adapters/react-router/v6'
import { useOptimisticSearchParams } from 'nuqs/adapters/react-router/v7'

function Component() {
  // Read-only, but reactive to shallow nuqs updates
  const searchParams = useOptimisticSearchParams()
  return <div>{searchParams.get('q')}</div>
}
```

> This hook is **read-only**. To read and write URL state, use `useQueryState` /
> `useQueryStates` as usual. Use `useOptimisticSearchParams` only when you need raw
> `URLSearchParams` access that stays in sync with nuqs shallow updates.

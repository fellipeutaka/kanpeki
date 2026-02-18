---
title: Test Components and Hooks with URL State
impact: LOW-MEDIUM
tags: debug, testing, vitest, jest, react-testing-library, withNuqsTestingAdapter
---

## Test Components and Hooks with URL State

Use `withNuqsTestingAdapter` from `nuqs/adapters/testing` as the `wrapper`
in `render` or `renderHook` calls. No mocking required.

### Testing components

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { withNuqsTestingAdapter, type OnUrlUpdateFunction } from 'nuqs/adapters/testing'
import { expect, it, vi } from 'vitest'
import { CounterButton } from './counter-button'

it('increments count on click', async () => {
  const user = userEvent.setup()
  const onUrlUpdate = vi.fn<OnUrlUpdateFunction>()

  render(<CounterButton />, {
    wrapper: withNuqsTestingAdapter({ searchParams: '?count=42', onUrlUpdate })
  })

  await user.click(screen.getByRole('button'))

  expect(screen.getByRole('button')).toHaveTextContent('count is 43')
  expect(onUrlUpdate).toHaveBeenCalledOnce()
  const event = onUrlUpdate.mock.calls[0]![0]!
  expect(event.queryString).toBe('?count=43')
  expect(event.searchParams.get('count')).toBe('43')
  expect(event.options.history).toBe('push')
})
```

> For Vitest v1, use `type UrlUpdateEvent` instead of `type OnUrlUpdateFunction`.

### Testing hooks

```tsx
import { renderHook } from '@testing-library/react'
import { withNuqsTestingAdapter } from 'nuqs/adapters/testing'
import { useMyHook } from './use-my-hook'

const { result } = renderHook(() => useMyHook(), {
  wrapper: withNuqsTestingAdapter({ searchParams: { count: '42' } })
})
```

### searchParams formats

```ts
withNuqsTestingAdapter({ searchParams: '?q=hello&limit=10' })
withNuqsTestingAdapter({ searchParams: new URLSearchParams('?q=hello') })
withNuqsTestingAdapter({ searchParams: { q: 'hello', limit: '10' } }) // string values
```

### Stateful adapter

By default the adapter is **immutable** (each update uses the initial params as base).
Set `hasMemory: true` for updates to accumulate across multiple actions:

```ts
withNuqsTestingAdapter({ hasMemory: true })
```

### NuqsTestingAdapter directly

```tsx
import { NuqsTestingAdapter } from 'nuqs/adapters/testing'

<NuqsTestingAdapter searchParams="?count=1" onUrlUpdate={onUrlUpdate}>
  <ComponentsUsingNuqs />
</NuqsTestingAdapter>
```

### Testing custom parsers

Use `nuqs/testing` to verify parser bijectivity (`parse(serialize(x)) === x`):

```ts
import {
  isParserBijective,
  testParseThenSerialize,
  testSerializeThenParse
} from 'nuqs/testing'

it('is bijective', () => {
  expect(isParserBijective(parseAsInteger, '42', 42)).toBe(true) // returns true
  expect(() => isParserBijective(parseAsInteger, '42', 47)).toThrowError() // throws on mismatch

  expect(testParseThenSerialize(parseAsInteger, '42')).toBe(true)
  expect(testSerializeThenParse(parseAsInteger, 42)).toBe(true)
})
```

### Jest + ESM

nuqs 2 is ESM-only. Add to `jest.config.ts`:

```ts
const config: Config = {
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {}
}
```

And run tests with:
```json
{ "test": "NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" jest" }
```

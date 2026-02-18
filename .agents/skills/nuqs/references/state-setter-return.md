---
title: Use Setter Return Value for URL Access
impact: MEDIUM
tags: state, setter, return-value, url, analytics
---

## Use Setter Return Value for URL Access

The state setter returns a `Promise<URLSearchParams>` that resolves once the URL
has been updated. Use it when you need the resulting URL for analytics, sharing,
or follow-up navigation.

```tsx
'use client'
import { useQueryState, parseAsString } from 'nuqs'

export function ShareButton() {
  const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''))

  const share = async () => {
    const search = await setQuery('shared-term')
    // search: URLSearchParams with the updated URL
    const url = `${location.origin}${location.pathname}?${search}`
    await navigator.clipboard.writeText(url)
  }

  return <button onClick={share}>Share</button>
}
```

**With useQueryStates — batched updates are merged:**

```ts
const search = await setCoords({ lat: 42, lng: 12 })
search.get('lat') // '42'
search.get('lng') // '12'
```

**Promise caching:** all `setState` calls in the same event loop tick return the
same Promise — batched updates flush together to the URL.

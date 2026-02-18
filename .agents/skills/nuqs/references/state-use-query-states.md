---
title: Use useQueryStates for Related Parameters
impact: HIGH
tags: state, useQueryStates, batching, atomic, related-params
---

## Use useQueryStates for Related Parameters

When multiple URL parameters are logically related (coordinates, date ranges, filters),
use `useQueryStates` for atomic updates. Multiple `useQueryState` calls update the URL
separately, potentially causing intermediate invalid states.

**Incorrect (separate hooks, non-atomic):**

```tsx
const [lat, setLat] = useQueryState('lat', parseAsFloat.withDefault(0))
const [lng, setLng] = useQueryState('lng', parseAsFloat.withDefault(0))

// Three URL updates, three history entries if using history:'push'
setLat(48.8566)
setLng(2.3522)
```

**Correct (single atomic update):**

```tsx
'use client'
import { useQueryStates, parseAsFloat, parseAsInteger } from 'nuqs'

const [coords, setCoords] = useQueryStates({
  lat: parseAsFloat.withDefault(0),
  lng: parseAsFloat.withDefault(0),
  zoom: parseAsInteger.withDefault(10)
})

// Single URL update:
setCoords({ lat: 48.8566, lng: 2.3522, zoom: 12 })

// Partial update — only zoom changes, lat/lng preserved:
setCoords({ zoom: 15 })

// Clear all managed keys:
setCoords(null)
```

### Options precedence

Options can be set at three levels (highest wins):

```ts
// 1. Global (second arg to hook):
const [state, setState] = useQueryStates(parsers, { history: 'push' })

// 2. Per-parser:
const parsers = { page: parseAsInteger.withOptions({ shallow: false }) }

// 3. Per-call:
setState({ page: 2 }, { shallow: false })
```

### Shorter URL keys

```ts
const [{ latitude, longitude }, setCoords] = useQueryStates(
  {
    latitude: parseAsFloat.withDefault(45.18),
    longitude: parseAsFloat.withDefault(5.72)
  },
  {
    urlKeys: {
      latitude: 'lat',
      longitude: 'lng'
    }
  }
)
// URL: ?lat=45.18&lng=5.72
// Code uses latitude/longitude variable names throughout
```

### Setter returns Promise<URLSearchParams>

```ts
const search = await setCoords({ lat: 42, lng: 12 })
search.get('lat') // '42'
search.get('lng') // '12'
```

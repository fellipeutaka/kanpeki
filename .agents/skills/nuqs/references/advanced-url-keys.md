---
title: Use urlKeys for Shorter URL Parameter Names
impact: LOW
tags: advanced, urlKeys, url-length, abbreviation
---

## Use urlKeys for Shorter URL Parameter Names

Map verbose variable names to shorter URL keys. Code stays readable; URLs stay compact.

```tsx
'use client'
import { useQueryStates, parseAsFloat, parseAsInteger } from 'nuqs'

const [coords, setCoords] = useQueryStates(
  {
    latitude: parseAsFloat.withDefault(0),
    longitude: parseAsFloat.withDefault(0),
    zoomLevel: parseAsInteger.withDefault(10)
  },
  {
    urlKeys: {
      latitude: 'lat',
      longitude: 'lng',
      zoomLevel: 'z'
    }
  }
)
// URL: ?lat=48.8566&lng=2.3522&z=12
// Code: coords.latitude, coords.longitude, coords.zoomLevel
```

### Reusing urlKeys across features

Use the `UrlKeys` type helper to share definitions across hooks, loaders, and serializers:

```ts
// lib/search-params.ts
import { type UrlKeys } from 'nuqs/server'

export const coordinatesParsers = {
  latitude: parseAsFloat.withDefault(45.18),
  longitude: parseAsFloat.withDefault(5.72)
}

export const coordinatesUrlKeys: UrlKeys<typeof coordinatesParsers> = {
  latitude: 'lat',
  longitude: 'lng'
}
```

```ts
// Reuse in createLoader:
createLoader(coordinatesParsers, { urlKeys: coordinatesUrlKeys })

// Reuse in createSerializer:
createSerializer(coordinatesParsers, { urlKeys: coordinatesUrlKeys })

// Reuse in createSearchParamsCache:
createSearchParamsCache(coordinatesParsers, { urlKeys: coordinatesUrlKeys })
```

> `urlKeys` is not supported with TanStack Router's `validateSearch`.

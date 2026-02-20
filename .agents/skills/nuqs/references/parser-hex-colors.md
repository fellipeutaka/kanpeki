---
title: Use parseAsHex for Color Values
impact: MEDIUM
tags: parser, parseAsHex, colors, hexadecimal
---

## Use parseAsHex for Color Values

`parseAsHex` encodes integers as hexadecimal in the URL — cleaner than decimal
for color values.

```ts
import { useQueryState, parseAsHex } from 'nuqs'

const [color, setColor] = useQueryState('color', parseAsHex.withDefault(0xff0000))
// URL: ?color=ff0000  (vs ?color=16711680 with parseAsInteger)
// State: 16711680 (number for calculations)

const hexString = color.toString(16).padStart(6, '0')

return (
  <input
    type="color"
    value={`#${hexString}`}
    onChange={e => setColor(parseInt(e.target.value.slice(1), 16))}
  />
)
```

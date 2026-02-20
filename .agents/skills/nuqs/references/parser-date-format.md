---
title: Select Appropriate Date Parser
impact: CRITICAL
tags: parser, parseAsTimestamp, parseAsIsoDateTime, parseAsIsoDate, dates
---

## Select Appropriate Date Parser

nuqs provides three date parsers returning a `Date` object. They differ in URL
representation and precision.

| Parser | URL Format | Use Case |
|--------|------------|----------|
| `parseAsTimestamp` | `1704067200000` | Precise timestamps, API integration |
| `parseAsIsoDateTime` | `2024-01-01T12:00:00.000Z` | Shareable URLs with time component |
| `parseAsIsoDate` | `2024-01-01` | Date pickers, calendar views (no time needed) |

### parseAsIsoDate (date-only, nuqs 2.1.0+)

For date pickers where time is irrelevant. Clean, human-readable URL:

```ts
import { useQueryState, parseAsIsoDate } from 'nuqs'

const [startDate, setStartDate] = useQueryState('start', parseAsIsoDate)
// URL: ?start=2024-01-01

// Note: parsed without timezone offset — midnight UTC
return (
  <input
    type="date"
    value={startDate?.toISOString().slice(0, 10) ?? ''}
    onChange={e => setStartDate(new Date(e.target.value))}
  />
)
```

### parseAsIsoDateTime (full datetime)

For timestamps that need to be human-readable in the URL:

```ts
import { parseAsIsoDateTime } from 'nuqs'

const [createdAfter, setCreatedAfter] = useQueryState('after', parseAsIsoDateTime)
// URL: ?after=2024-01-01T12:00:00.000Z
```

### parseAsTimestamp (milliseconds)

Shortest URL, most precise, good for internal/API use:

```ts
import { parseAsTimestamp } from 'nuqs'

const [lastModified, setLastModified] = useQueryState('ts', parseAsTimestamp)
// URL: ?ts=1704067200000
```

### Date range example

```ts
const [from, setFrom] = useQueryState('from', parseAsIsoDate)
const [to, setTo] = useQueryState('to', parseAsIsoDate)
// URL: ?from=2024-01-01&to=2024-01-31
```

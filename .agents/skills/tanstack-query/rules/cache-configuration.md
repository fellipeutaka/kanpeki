# Cache Configuration

## staleTime — When Data Becomes Stale

Controls how long data is considered fresh. While fresh, queries won't refetch on mount/window focus.

```tsx
// Default: 0 (always stale — refetches on every mount)
// Set based on data volatility:
useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 1000 * 60 * 5, // 5 min — good for moderately changing data
})

// Static data (rarely changes)
staleTime: Infinity

// Real-time data (stock prices, chat)
staleTime: 0 // or 1000 * 10 (10 seconds)
```

Set sensible defaults at the QueryClient level:

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min default
    },
  },
})
```

## gcTime — Garbage Collection Time

Controls how long **inactive** queries (no observers) stay in cache before being garbage collected. Renamed from `cacheTime` in v5.

```tsx
// ❌ v4 name — removed in v5
useQuery({ queryKey: ['todos'], queryFn: fetchTodos, cacheTime: 1000 * 60 * 60 })

// ✅ v5 name
useQuery({ queryKey: ['todos'], queryFn: fetchTodos, gcTime: 1000 * 60 * 60 }) // 1 hour
```

- Default: 5 minutes
- `gcTime: Infinity` — never garbage collect (careful with memory)
- `gcTime` must be >= `staleTime` to be useful

## placeholderData vs initialData

These serve different purposes. Using the wrong one causes subtle bugs.

**placeholderData** — fake data shown until real data arrives. Not persisted to cache. Query stays in `pending` status.

```tsx
import { keepPreviousData } from '@tanstack/react-query'

// Show previous page's data while fetching next page
useQuery({
  queryKey: ['todos', page],
  queryFn: () => fetchTodos(page),
  placeholderData: keepPreviousData, // v5 replacement for keepPreviousData: true
})

// Or provide static placeholder
useQuery({
  queryKey: ['todo', id],
  queryFn: () => fetchTodo(id),
  placeholderData: { id, title: 'Loading...', completed: false },
})
```

**initialData** — real data seeded into the cache. Treated as if it came from the server. Subject to staleTime/gcTime.

```tsx
// Seed detail cache from list data
useQuery({
  queryKey: ['todo', id],
  queryFn: () => fetchTodo(id),
  initialData: () => queryClient.getQueryData(['todos'])?.find(t => t.id === id),
  initialDataUpdatedAt: () => queryClient.getQueryState(['todos'])?.dataUpdatedAt,
})
```

| | placeholderData | initialData |
|--|----------------|-------------|
| Persisted to cache | No | Yes |
| Query status | `pending` | `success` |
| Triggers background fetch | Always | Only if stale |
| Use case | Skeleton/previous data | Cache seeding |

## keepPreviousData Migration

```tsx
// ❌ v4
useQuery({ queryKey: ['todos', page], queryFn: fn, keepPreviousData: true })

// ✅ v5
import { keepPreviousData } from '@tanstack/react-query'
useQuery({ queryKey: ['todos', page], queryFn: fn, placeholderData: keepPreviousData })
```

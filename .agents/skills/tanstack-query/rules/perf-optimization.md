# Performance Optimization

## select — Transform and Filter Data

`select` runs on cached data and only triggers re-renders when the selected result changes (referential equality check via structural sharing).

```tsx
// ❌ Transforms in component — re-renders on every query update
function CompletedTodos() {
  const { data: todos } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
  const completed = todos?.filter(t => t.completed) // Runs every render

  return <ul>{completed?.map(t => <li key={t.id}>{t.title}</li>)}</ul>
}

// ✅ Transform in select — only re-renders when filtered result changes
function CompletedTodos() {
  const { data: completed } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    select: (data) => data.filter(t => t.completed),
  })

  return <ul>{completed?.map(t => <li key={t.id}>{t.title}</li>)}</ul>
}
```

**Gotcha**: If `select` returns a new reference every time (e.g., `.map()`, `.filter()`), wrap it in `useCallback` or define it outside the component to avoid unnecessary re-renders:

```tsx
// ✅ Stable reference
const selectCompleted = (data: Todo[]) => data.filter(t => t.completed)

function CompletedTodos() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    select: selectCompleted,
  })
}
```

## Structural Sharing

TanStack Query uses structural sharing by default — if the refetched data is deeply equal to the cached data, the same reference is returned. This prevents unnecessary re-renders.

- Enabled by default, works with JSON-serializable data
- Disable with `structuralSharing: false` if data contains non-serializable values (Dates, Maps, Sets)

```tsx
// Custom structural sharing for non-serializable data
useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  structuralSharing: (oldData, newData) => {
    // Custom comparison logic
    return deepEqual(oldData, newData) ? oldData : newData
  },
})
```

## notifyOnChangeProps — Limit Re-renders

Only re-render when specific properties change. Useful for components that only care about `data`, not `isFetching`.

```tsx
// Only re-render when data or error changes (not isFetching, isStale, etc.)
const { data, error } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  notifyOnChangeProps: ['data', 'error'],
})
```

**Tracked queries** (default): TanStack Query automatically tracks which properties you access and only re-renders when those change. `notifyOnChangeProps` is rarely needed in practice.

## placeholderData for Instant UI

Show placeholder data while the real data loads. Avoids layout shifts and loading spinners.

```tsx
import { keepPreviousData } from '@tanstack/react-query'

// Keep previous page data visible while loading next page
const { data, isPlaceholderData } = useQuery({
  queryKey: ['todos', page],
  queryFn: () => fetchTodos(page),
  placeholderData: keepPreviousData,
})

return (
  <div style={{ opacity: isPlaceholderData ? 0.5 : 1 }}>
    {data?.map(t => <li key={t.id}>{t.title}</li>)}
  </div>
)
```

## Avoid Request Waterfalls

Don't chain queries that can be fetched in parallel.

```tsx
// ❌ Waterfall — users finishes before posts starts
function Dashboard() {
  const { data: users } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
  const { data: posts } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    enabled: !!users, // Unnecessary dependency!
  })
}

// ✅ Parallel — both fetch simultaneously
function Dashboard() {
  const { data: users } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
  const { data: posts } = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })
}
```

Only use `enabled` when there's a true data dependency (e.g., need user ID to fetch posts).

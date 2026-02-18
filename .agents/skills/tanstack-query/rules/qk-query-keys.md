# Query Keys

Query keys are the foundation of TanStack Query's caching and refetching. Getting them wrong causes stale data, cache misses, and subtle bugs.

## Always Use Arrays

```tsx
// ❌ String keys (v4 legacy)
useQuery({ queryKey: 'todos', queryFn: fetchTodos })

// ✅ Array keys
useQuery({ queryKey: ['todos'], queryFn: fetchTodos })
```

## Include All Dependencies

Every variable the queryFn depends on must be in the queryKey. This ensures automatic refetching when dependencies change.

```tsx
// ❌ Missing dependency — won't refetch when filter changes
const { data } = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetchTodos(filter),
})

// ✅ Filter included — auto-refetches on change
const { data } = useQuery({
  queryKey: ['todos', { filter }],
  queryFn: () => fetchTodos(filter),
})
```

## Organize Hierarchically

Structure keys from general to specific: `[entity, id, sub-resource, filters]`. This enables targeted invalidation at any level.

```tsx
queryKey: ['todos']                          // All todos
queryKey: ['todos', 'list', { filter }]      // Filtered list
queryKey: ['todos', 'detail', id]            // Single todo
queryKey: ['todos', 'detail', id, 'comments'] // Todo's comments

// Invalidate all todo-related queries at once
queryClient.invalidateQueries({ queryKey: ['todos'] })

// Invalidate only one todo's data
queryClient.invalidateQueries({ queryKey: ['todos', 'detail', id] })
```

## Use Query Key Factories

For complex apps, centralize key construction to avoid typos and ensure consistency.

```tsx
const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: TodoFilters) => [...todoKeys.lists(), filters] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
  detail: (id: string) => [...todoKeys.details(), id] as const,
}

// Usage
useQuery({ queryKey: todoKeys.detail(id), queryFn: () => fetchTodo(id) })
queryClient.invalidateQueries({ queryKey: todoKeys.lists() })
```

## Use queryOptions Factory (v5)

`queryOptions` provides type-safe reuse across hooks, prefetching, and cache operations.

```tsx
import { queryOptions, useQuery, useSuspenseQuery } from '@tanstack/react-query'

const todoQueryOptions = (id: string) =>
  queryOptions({
    queryKey: todoKeys.detail(id),
    queryFn: () => fetchTodo(id),
    staleTime: 1000 * 60 * 5,
  })

// Reuse everywhere with full type inference
useQuery(todoQueryOptions(id))
useSuspenseQuery(todoQueryOptions(id))
queryClient.prefetchQuery(todoQueryOptions(id))
queryClient.getQueryData(todoQueryOptions(id).queryKey) // typed return
```

## Keys Must Be JSON-Serializable

Query keys are serialized for comparison. Non-serializable values (functions, class instances, symbols) break caching.

```tsx
// ❌ Function in key — not serializable
queryKey: ['todos', { filter: (t: Todo) => t.done }]

// ✅ Serializable value
queryKey: ['todos', { status: 'done' }]
```

## refetch() Is Not for Changed Parameters

`refetch()` re-runs the query with the **same** parameters. For new parameters, update the queryKey instead — the query auto-refetches.

```tsx
// ❌ Wrong — refetch() uses old page value
const [page, setPage] = useState(1)
const { data, refetch } = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetchTodos(page),
})
<button onClick={() => { setPage(2); refetch() }}>Next</button>

// ✅ Correct — key change triggers refetch automatically
const [page, setPage] = useState(1)
const { data } = useQuery({
  queryKey: ['todos', page],
  queryFn: () => fetchTodos(page),
})
<button onClick={() => setPage(2)}>Next</button>
```

Use `refetch()` only for manual "reload" of the same data (e.g., a refresh button).

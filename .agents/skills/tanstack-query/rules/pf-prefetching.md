# Prefetching

## Prefetch on User Intent

Prefetch data on hover/focus so it's ready when the user navigates. Eliminates perceived loading time.

```tsx
function TodoItem({ id }: { id: string }) {
  const queryClient = useQueryClient()

  const handleHover = () => {
    queryClient.prefetchQuery({
      queryKey: ['todos', 'detail', id],
      queryFn: () => fetchTodo(id),
      staleTime: 1000 * 60 * 5, // Won't prefetch again within 5 min
    })
  }

  return (
    <Link to={`/todos/${id}`} onMouseEnter={handleHover} onFocus={handleHover}>
      View Todo
    </Link>
  )
}
```

**Important**: Set `staleTime` when prefetching to prevent re-prefetching on every hover.

## Prefetch on Route Transitions

Prefetch data needed by the next route before navigation completes.

```tsx
// With React Router loaders
const router = createBrowserRouter([
  {
    path: '/todos/:id',
    loader: ({ params }) => {
      queryClient.prefetchQuery({
        queryKey: ['todos', 'detail', params.id],
        queryFn: () => fetchTodo(params.id!),
      })
      return null
    },
    element: <TodoDetail />,
  },
])
```

## ensureQueryData — Conditional Prefetching

Only fetches if data is missing or stale. Returns existing cache data if fresh.

```tsx
// Prefetch only if not already cached
const data = await queryClient.ensureQueryData({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 1000 * 60 * 5,
})

// vs prefetchQuery which always triggers a fetch if stale
await queryClient.prefetchQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
})
```

| Method | Returns | Fetches if fresh | Use case |
|--------|---------|-----------------|----------|
| `prefetchQuery` | void | No | Fire-and-forget preloading |
| `ensureQueryData` | data | No | Need the data + ensure cached |
| `fetchQuery` | data | Yes (always) | Force fresh data |

## Prefetch with queryOptions

Reuse the same options across hooks and prefetching:

```tsx
const todoOptions = (id: string) => queryOptions({
  queryKey: ['todos', 'detail', id],
  queryFn: () => fetchTodo(id),
  staleTime: 1000 * 60 * 5,
})

// In component
useQuery(todoOptions(id))

// In prefetch
queryClient.prefetchQuery(todoOptions(id))
```

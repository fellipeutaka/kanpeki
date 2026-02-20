# Parallel Queries

## useQueries for Dynamic Parallel Fetching

When the number of queries is dynamic (based on an array), use `useQueries` instead of multiple `useQuery` calls.

```tsx
// ❌ Can't use hooks conditionally/dynamically
ids.forEach(id => {
  useQuery({ queryKey: ['todo', id], queryFn: () => fetchTodo(id) }) // Breaks rules of hooks
})

// ✅ useQueries handles dynamic arrays
const results = useQueries({
  queries: ids.map(id => ({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
    staleTime: 1000 * 60 * 5,
  })),
})

// Access individual results
results.forEach((result, i) => {
  if (result.isPending) console.log(`Loading todo ${ids[i]}`)
  if (result.data) console.log(result.data)
})
```

## Combine Results (v5)

Merge parallel query results into a single derived object:

```tsx
const { data, pending, error } = useQueries({
  queries: userIds.map(id => ({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
  })),
  combine: (results) => ({
    data: results.map(r => r.data).filter(Boolean),
    pending: results.some(r => r.isPending),
    error: results.find(r => r.error)?.error ?? null,
  }),
})

if (pending) return <Loading />
if (error) return <Error error={error} />
return <UserList users={data} />
```

The `combine` callback runs on every render — keep it cheap or memoize.

## Static Parallel Queries

For a fixed number of parallel queries, just use multiple `useQuery` calls. They fetch in parallel automatically.

```tsx
function Dashboard() {
  const users = useQuery({ queryKey: ['users'], queryFn: fetchUsers })
  const posts = useQuery({ queryKey: ['posts'], queryFn: fetchPosts })
  const stats = useQuery({ queryKey: ['stats'], queryFn: fetchStats })

  if (users.isPending || posts.isPending || stats.isPending) return <Loading />

  return <DashboardView users={users.data} posts={posts.data} stats={stats.data} />
}
```

## Query Cancellation

TanStack Query auto-cancels queries when the queryKey changes or the component unmounts. Pass the `signal` to your fetch for proper cancellation.

```tsx
useQuery({
  queryKey: ['search', debouncedQuery],
  queryFn: async ({ signal }) => {
    const res = await fetch(`/api/search?q=${debouncedQuery}`, { signal })
    if (!res.ok) throw new Error('Search failed')
    return res.json()
  },
})
```

The `signal` is an `AbortSignal`. When the query is cancelled:
- `fetch` with `signal` aborts the network request
- The query transitions to its previous state (no error thrown)
- Works with any API that accepts `AbortSignal` (fetch, axios via `signal` config, etc.)

```tsx
// Axios example
queryFn: async ({ signal }) => {
  const { data } = await axios.get('/api/search', {
    params: { q: query },
    signal,
  })
  return data
}
```

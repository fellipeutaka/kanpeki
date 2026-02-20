# Cache Invalidation

## Targeted Invalidation

Use specific query keys to invalidate only what changed. Broad invalidation causes unnecessary refetches.

```tsx
// ❌ Too broad — refetches everything
queryClient.invalidateQueries()

// ❌ Still broad — refetches all todo queries
queryClient.invalidateQueries({ queryKey: ['todos'] })

// ✅ Targeted — only the affected todo
queryClient.invalidateQueries({ queryKey: ['todos', 'detail', updatedId] })

// ✅ Invalidate list + affected detail
queryClient.invalidateQueries({ queryKey: ['todos', 'list'] })
queryClient.invalidateQueries({ queryKey: ['todos', 'detail', updatedId] })
```

## invalidateQueries Only Refetches Active Queries

By default, `invalidateQueries()` marks all matching queries as stale but only refetches **active** (currently observed) queries. Inactive queries just get marked stale and refetch on next mount.

```tsx
// Only active queries refetch
queryClient.invalidateQueries({ queryKey: ['todos'] })

// Force refetch of ALL matching queries (active + inactive)
queryClient.invalidateQueries({ queryKey: ['todos'], refetchType: 'all' })

// Only mark as stale, don't refetch any
queryClient.invalidateQueries({ queryKey: ['todos'], refetchType: 'none' })
```

## Invalidate After Mutations

Always invalidate related queries after successful mutations to keep the UI in sync.

```tsx
const mutation = useMutation({
  mutationFn: updateTodo,
  onSuccess: (data, variables) => {
    // Invalidate the list and the specific item
    queryClient.invalidateQueries({ queryKey: ['todos', 'list'] })
    queryClient.invalidateQueries({ queryKey: ['todos', 'detail', variables.id] })
  },
})
```

## setQueryData for Immediate Updates

When the mutation response contains the updated data, skip the refetch and update the cache directly.

```tsx
const mutation = useMutation({
  mutationFn: updateTodo,
  onSuccess: (updatedTodo) => {
    // Update detail cache directly
    queryClient.setQueryData(['todos', 'detail', updatedTodo.id], updatedTodo)
    // Still invalidate the list (might affect ordering/filtering)
    queryClient.invalidateQueries({ queryKey: ['todos', 'list'] })
  },
})
```

## cancelQueries Before Cache Updates

Cancel in-flight queries before manually updating the cache to prevent race conditions.

```tsx
onMutate: async (newTodo) => {
  // Cancel outgoing refetches so they don't overwrite our optimistic update
  await queryClient.cancelQueries({ queryKey: ['todos'] })
  // Now safe to update cache
  const previous = queryClient.getQueryData(['todos'])
  queryClient.setQueryData(['todos'], (old) => [...old, newTodo])
  return { previous }
}
```

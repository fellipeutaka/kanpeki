# Optimistic Updates

Two approaches in v5: cache manipulation (traditional) and variables-based (simplified).

## Approach 1: Cache Manipulation (Traditional)

Manually update the cache in `onMutate`, rollback on error. Best when you need precise cache control.

```tsx
const mutation = useMutation({
  mutationFn: updateTodo,
  onMutate: async (newTodo) => {
    // 1. Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: ['todos'] })

    // 2. Snapshot previous value
    const previousTodos = queryClient.getQueryData(['todos'])

    // 3. Optimistically update cache
    queryClient.setQueryData(['todos'], (old) =>
      old.map(t => t.id === newTodo.id ? { ...t, ...newTodo } : t)
    )

    // 4. Return rollback context
    return { previousTodos }
  },
  onError: (err, newTodo, onMutateResult) => {
    // Rollback on error
    queryClient.setQueryData(['todos'], onMutateResult.previousTodos)
  },
  onSettled: () => {
    // Refetch to ensure server truth
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

## Approach 2: Variables-Based (Simplified, v5)

Use `useMutationState` to show pending mutations in the UI. No cache manipulation, no rollback needed.

```tsx
function TodoList() {
  const { data: todos } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos })

  const addTodo = useMutation({
    mutationKey: ['addTodo'], // Required for useMutationState filtering
    mutationFn: (newTodo: Todo) => api.addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  // Get variables from pending mutations
  const pendingTodos = useMutationState({
    filters: { mutationKey: ['addTodo'], status: 'pending' },
    select: (mutation) => mutation.state.variables as Todo,
  })

  return (
    <ul>
      {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
      {pendingTodos.map((todo, i) => (
        <li key={`pending-${i}`} style={{ opacity: 0.5 }}>{todo.title}</li>
      ))}
    </ul>
  )
}
```

## When to Use Which

| Scenario | Approach |
|----------|----------|
| Simple add/toggle with visual indicator | Variables-based |
| Complex cache structure (nested, paginated) | Cache manipulation |
| Need rollback to exact previous state | Cache manipulation |
| Multiple components show optimistic state | Variables-based |
| Reorder/drag-and-drop | Cache manipulation |

## Common Mistakes

```tsx
// ❌ Forgetting cancelQueries — race condition with refetch
onMutate: async (newTodo) => {
  const previous = queryClient.getQueryData(['todos'])
  queryClient.setQueryData(['todos'], (old) => [...old, newTodo])
  return { previous }
}

// ❌ Forgetting onSettled invalidation — cache may drift from server
onError: (err, vars, ctx) => {
  queryClient.setQueryData(['todos'], ctx.previousTodos)
}
// Missing: onSettled: () => queryClient.invalidateQueries(...)

// ❌ Mutating cache directly
onMutate: async (newTodo) => {
  const previous = queryClient.getQueryData(['todos'])
  previous.push(newTodo) // Mutates the cached array!
  return { previous } // Rollback won't work — same reference
}
```

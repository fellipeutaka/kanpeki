# Array Fields

TanStack Form supports arrays as form values. Use `mode="array"` on `form.Field` to manage dynamic lists with type-safe operations.

## Basic Array Field

```tsx
<form.Field name="hobbies" mode="array">
  {(field) => (
    <div>
      {field.state.value.map((_, i) => (
        <form.Field key={i} name={`hobbies[${i}].name`}>
          {(subField) => (
            <div>
              <input
                value={subField.state.value}
                onChange={(e) => subField.handleChange(e.target.value)}
              />
              <button type="button" onClick={() => field.removeValue(i)}>
                Remove
              </button>
            </div>
          )}
        </form.Field>
      ))}
      <button
        type="button"
        onClick={() => field.pushValue({ name: '', description: '' })}
      >
        Add hobby
      </button>
    </div>
  )}
</form.Field>
```

## Array Operations

| Method | Description |
|--------|-------------|
| `pushValue(value)` | Append item to end |
| `removeValue(index)` | Remove item at index |
| `swapValues(indexA, indexB)` | Swap two items |
| `moveValue(from, to)` | Move item from one index to another |
| `insertValue(index, value)` | Insert item at specific index |
| `replaceValue(index, value)` | Replace item at specific index |
| `clearValues()` | Remove all items |

## Common Mistakes

```tsx
// ❌ Forgetting mode="array" — field won't have array methods
<form.Field name="hobbies">
  {(field) => field.pushValue(/* ... */)} // pushValue doesn't exist
</form.Field>

// ✅ Set mode="array" for array operations
<form.Field name="hobbies" mode="array">
  {(field) => /* pushValue, removeValue, etc. available */}
</form.Field>
```

```tsx
// ❌ Using type="submit" on add/remove buttons — triggers form submission
<button onClick={() => field.pushValue({ name: '' })}>Add</button>

// ✅ Always use type="button" for array manipulation buttons
<button type="button" onClick={() => field.pushValue({ name: '' })}>Add</button>
```

## Full Example with Nested Fields

```tsx
function App() {
  const form = useForm({
    defaultValues: {
      people: [] as Array<{ name: string; age: number }>,
    },
    onSubmit: ({ value }) => alert(JSON.stringify(value)),
  })

  return (
    <form onSubmit={(e) => { e.preventDefault(); e.stopPropagation(); form.handleSubmit() }}>
      <form.Field name="people" mode="array">
        {(field) => (
          <div>
            {field.state.value.map((_, i) => (
              <div key={i}>
                <form.Field name={`people[${i}].name`}>
                  {(sub) => (
                    <input
                      value={sub.state.value}
                      onChange={(e) => sub.handleChange(e.target.value)}
                    />
                  )}
                </form.Field>
                <form.Field name={`people[${i}].age`}>
                  {(sub) => (
                    <input
                      type="number"
                      value={sub.state.value}
                      onChange={(e) => sub.handleChange(e.target.valueAsNumber)}
                    />
                  )}
                </form.Field>
                <button type="button" onClick={() => field.removeValue(i)}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={() => field.pushValue({ name: '', age: 0 })}>
              Add person
            </button>
          </div>
        )}
      </form.Field>
    </form>
  )
}
```

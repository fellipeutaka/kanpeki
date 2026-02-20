# Field State

Each field has its own state including current value, validation status, and interaction metadata. Subscribing correctly prevents unnecessary re-renders.

## Accessing Field State

```tsx
<form.Field
  name="firstName"
  children={(field) => {
    const { value, meta } = field.state
    return (
      <>
        <input
          value={value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
        />
        {meta.isTouched && !meta.isValid && (
          <em>{meta.errors.join(', ')}</em>
        )}
        {meta.isValidating && <span>Validating...</span>}
      </>
    )
  }}
/>
```

## Field Metadata Flags

| Flag | Description |
|------|-------------|
| `isTouched` | `true` once the user changes or blurs the field |
| `isDirty` | `true` once value changes, even if reverted to default (persistent) |
| `isPristine` | Opposite of `isDirty` — `true` until first change |
| `isBlurred` | `true` once the field loses focus |
| `isDefaultValue` | `true` when current value equals the default value |
| `isValid` | `true` when no validation errors |
| `isValidating` | `true` while async validation is running |

**Note**: `isDirty` is persistent — once set, it stays `true` even if the value is reverted. To check non-persistent dirty state, use `!isDefaultValue`.

```tsx
const { isDefaultValue, isTouched } = field.state.meta
// Non-persistent dirty: true only when value differs from default
const isChanged = !isDefaultValue
```

## Subscribing to Form State

Use `form.Subscribe` or `useStore` with a **selector** to avoid re-rendering on every state change.

```tsx
// ❌ No selector — re-renders on every state change
const store = useStore(form.store)

// ✅ Select specific values
const firstName = useStore(form.store, (state) => state.values.firstName)
const errors = useStore(form.store, (state) => state.errorMap)
```

```tsx
// ✅ form.Subscribe with selector
<form.Subscribe
  selector={(state) => [state.canSubmit, state.isSubmitting]}
  children={([canSubmit, isSubmitting]) => (
    <button type="submit" disabled={!canSubmit}>
      {isSubmitting ? '...' : 'Submit'}
    </button>
  )}
/>
```

## Do Not Use useField for Reactivity

`useField` is designed for internal use within `form.Field`. For reactive access to field values outside of a Field component, use `useStore`.

```tsx
// ❌ useField outside form.Field — not recommended
const field = useField({ form, name: 'firstName' })

// ✅ useStore for reactive field values
const firstName = useStore(form.store, (s) => s.values.firstName)
```

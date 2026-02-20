# Validation

TanStack Form supports sync and async validation at field-level and form-level, with fine-grained control over timing (onChange, onBlur, onSubmit, onMount).

## Field-Level Validation

Return a string error message or `undefined` for valid.

```tsx
<form.Field
  name="age"
  validators={{
    onChange: ({ value }) =>
      value < 13 ? 'You must be 13 to make an account' : undefined,
  }}
>
  {(field) => (
    <>
      <input
        value={field.state.value}
        type="number"
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.valueAsNumber)}
      />
      {!field.state.meta.isValid && (
        <em role="alert">{field.state.meta.errors.join(', ')}</em>
      )}
    </>
  )}
</form.Field>
```

## Multiple Validation Timings

You can combine different validators for different events on the same field.

```tsx
<form.Field
  name="age"
  validators={{
    onChange: ({ value }) => (value < 13 ? 'Must be at least 13' : undefined),
    onBlur: ({ value }) => (value < 0 ? 'Invalid value' : undefined),
  }}
>
  {(field) => (
    <input
      value={field.state.value}
      type="number"
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.valueAsNumber)}
    />
  )}
</form.Field>
```

## Async Validation with Debouncing

```tsx
// ❌ No debounce — fires async validation on every keystroke
<form.Field
  name="username"
  validators={{
    onChangeAsync: async ({ value }) => {
      const taken = await checkUsername(value)
      return taken ? 'Username taken' : undefined
    },
  }}
/>

// ✅ Debounce async validation
<form.Field
  name="username"
  asyncDebounceMs={500}
  validators={{
    onChangeAsync: async ({ value }) => {
      const taken = await checkUsername(value)
      return taken ? 'Username taken' : undefined
    },
  }}
/>
```

You can override debounce per-validator:

```tsx
<form.Field
  name="username"
  asyncDebounceMs={500}
  validators={{
    onChangeAsyncDebounceMs: 1500, // override for onChange only
    onChangeAsync: async ({ value }) => { /* ... */ },
    onBlurAsync: async ({ value }) => { /* ... */ }, // uses default 500ms
  }}
/>
```

Sync and async validators can coexist. The sync validator runs first; async only runs if sync passes (unless `asyncAlways` is set).

## Form-Level Validation

Validate across all fields at once. Errors propagate to individual fields.

```tsx
const form = useForm({
  defaultValues: { age: 0 },
  validators: {
    onChange: ({ value }) => {
      if (value.age < 13) return 'Must be 13 or older'
      return undefined
    },
  },
  onSubmit: async ({ value }) => console.log(value),
})
```

### Setting Field Errors from Form Validators

Useful for server-side validation that returns per-field errors:

```tsx
const form = useForm({
  defaultValues: { age: 0, email: '' },
  validators: {
    onSubmitAsync: async ({ value }) => {
      const errors = await validateOnServer(value)
      if (errors) {
        return {
          form: 'Invalid data',
          fields: {
            age: 'Must be 13 or older',
            email: 'Email already taken',
          },
        }
      }
      return null
    },
  },
})
```

**Note**: Field-specific validators override form-level field errors for the same field.

## Displaying Errors

```tsx
// All errors as array
{!field.state.meta.isValid && (
  <em>{field.state.meta.errors.join(', ')}</em>
)}

// Errors by timing via errorMap
{field.state.meta.errorMap['onChange'] && (
  <em>{field.state.meta.errorMap['onChange']}</em>
)}
```

## Preventing Invalid Submissions

```tsx
<form.Subscribe
  selector={(state) => [state.canSubmit, state.isSubmitting]}
  children={([canSubmit, isSubmitting]) => (
    <button type="submit" disabled={!canSubmit}>
      {isSubmitting ? '...' : 'Submit'}
    </button>
  )}
/>
```

To block submission before any interaction: `!canSubmit || isPristine`.

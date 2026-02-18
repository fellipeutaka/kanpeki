# Listeners

Listeners let you react to field events and dispatch side effects. Unlike validators, listeners don't return errors — they perform actions like resetting dependent fields or auto-saving.

## Field-Level Listeners

Available events: `onChange`, `onBlur`, `onMount`, `onSubmit`.

```tsx
// Reset province when country changes
<form.Field
  name="country"
  listeners={{
    onChange: ({ value }) => {
      console.log(`Country changed to: ${value}, resetting province`)
      form.setFieldValue('province', '')
    },
  }}
>
  {(field) => (
    <input
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  )}
</form.Field>
```

## Debouncing Listeners

For API calls or expensive operations inside listeners, use debouncing:

```tsx
<form.Field
  name="country"
  listeners={{
    onChangeDebounceMs: 500,
    onChange: ({ value }) => {
      // Only fires after 500ms of no changes
      form.setFieldValue('province', '')
    },
  }}
>
  {(field) => (
    <input
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  )}
</form.Field>
```

## Form-Level Listeners

Form listeners propagate `onChange` and `onBlur` to all children, and provide access to `onMount` and `onSubmit`.

```tsx
const form = useForm({
  defaultValues: { name: '', age: 0 },
  listeners: {
    onMount: ({ formApi }) => {
      loggingService('mount', formApi.state.values)
    },
    onChange: ({ formApi, fieldApi }) => {
      // Auto-save when form is valid
      if (formApi.state.isValid) {
        formApi.handleSubmit()
      }
      // fieldApi is the field that triggered the event
      console.log(fieldApi.name, fieldApi.state.value)
    },
    onChangeDebounceMs: 500,
  },
  onSubmit: async ({ value }) => saveToServer(value),
})
```

## Listeners vs Validators vs Linked Fields

| Feature | Purpose | Returns |
|---------|---------|---------|
| **Validators** | Validate field value, produce errors | Error string or `undefined` |
| **Linked Fields** | Re-run validation when another field changes | Error string or `undefined` |
| **Listeners** | Side effects (reset fields, log, auto-save) | Nothing |

Use listeners for side effects. Use validators + `onChangeListenTo` for cross-field validation.

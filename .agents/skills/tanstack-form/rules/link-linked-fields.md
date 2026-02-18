# Linked Fields

When one field's validation depends on another field's value (e.g. confirm password), use `onChangeListenTo` or `onBlurListenTo` to re-run validation when the linked field changes.

## The Problem

Without linking, changing the `password` field won't re-validate `confirm_password`:

```tsx
// ❌ confirm_password validation only runs when confirm_password itself changes
<form.Field
  name="confirm_password"
  validators={{
    onChange: ({ value, fieldApi }) =>
      value !== fieldApi.form.getFieldValue('password')
        ? 'Passwords do not match'
        : undefined,
  }}
>
  {(field) => (
    <input value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
  )}
</form.Field>
```

## The Solution: onChangeListenTo

```tsx
// ✅ Re-validates confirm_password whenever password changes
<form.Field name="password">
  {(field) => (
    <input
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  )}
</form.Field>

<form.Field
  name="confirm_password"
  validators={{
    onChangeListenTo: ['password'],
    onChange: ({ value, fieldApi }) => {
      if (value !== fieldApi.form.getFieldValue('password')) {
        return 'Passwords do not match'
      }
      return undefined
    },
  }}
>
  {(field) => (
    <div>
      <input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {field.state.meta.errors.map((err) => (
        <div key={err}>{err}</div>
      ))}
    </div>
  )}
</form.Field>
```

## onBlurListenTo

Same concept but triggers when the linked field is blurred:

```tsx
<form.Field
  name="confirm_password"
  validators={{
    onBlurListenTo: ['password'],
    onBlur: ({ value, fieldApi }) => {
      if (value !== fieldApi.form.getFieldValue('password')) {
        return 'Passwords do not match'
      }
      return undefined
    },
  }}
>
  {(field) => (
    <input
      value={field.state.value}
      onBlur={field.handleBlur}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  )}
</form.Field>
```

## Key Points

- `onChangeListenTo` accepts an array of field names to watch
- When any watched field changes, the current field's `onChange` validator re-runs
- Same pattern works for `onBlurListenTo` with `onBlur` validators
- Access other field values via `fieldApi.form.getFieldValue('fieldName')`

# Form Composition

For production apps, `createFormHook` eliminates boilerplate by pre-binding reusable field and form components with full type safety.

## Setup: createFormHook

```tsx
// src/hooks/form.ts — define once, use across entire app
import { createFormHookContexts, createFormHook } from '@tanstack/react-form'

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: { TextField, NumberField },
  formComponents: { SubmitButton },
  fieldContext,
  formContext,
})
```

## Pre-bound Field Components

Use `useFieldContext` to access the field API in custom components:

```tsx
import { useFieldContext } from './form'

export function TextField({ label }: { label: string }) {
  const field = useFieldContext<string>()
  return (
    <label>
      <span>{label}</span>
      <input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
      />
    </label>
  )
}
```

Use with `form.AppField` (not `form.Field`) to get context injection:

```tsx
// ❌ form.Field doesn't provide context to pre-bound components
<form.Field name="firstName" children={(field) => <TextField label="Name" />} />

// ✅ AppField provides the required context
<form.AppField
  name="firstName"
  children={(field) => <field.TextField label="Name" />}
/>
```

## Pre-bound Form Components

Share form-level UI like submit buttons:

```tsx
function SubmitButton({ label }: { label: string }) {
  const form = useFormContext()
  return (
    <form.Subscribe selector={(state) => state.isSubmitting}>
      {(isSubmitting) => <button type="submit" disabled={isSubmitting}>{label}</button>}
    </form.Subscribe>
  )
}

// Usage — wrap with AppForm for context
<form.AppForm>
  <form.SubmitButton label="Submit" />
</form.AppForm>
```

## Breaking Large Forms with withForm

Split big forms into smaller components while keeping type safety:

```tsx
const ChildForm = withForm({
  defaultValues: { firstName: '', lastName: '' },
  props: { title: 'Child Form' },
  // Use named function for ESLint hooks compatibility
  render: function Render({ form, title }) {
    return (
      <div>
        <p>{title}</p>
        <form.AppField
          name="firstName"
          children={(field) => <field.TextField label="First Name" />}
        />
      </div>
    )
  },
})

// Usage
function App() {
  const form = useAppForm({ defaultValues: { firstName: '', lastName: '' } })
  return <ChildForm form={form} title="Testing" />
}
```

**ESLint note**: Use `render: function Render(...)` not `render: (...)` to avoid hooks-in-arrow-function warnings.

## Reusable Field Groups with withFieldGroup

Group related fields (e.g. password + confirm) for reuse across forms:

```tsx
const PasswordFields = withFieldGroup({
  defaultValues: { password: '', confirm_password: '' },
  render: function Render({ group }) {
    return (
      <>
        <group.AppField name="password">
          {(field) => <field.TextField label="Password" />}
        </group.AppField>
        <group.AppField
          name="confirm_password"
          validators={{
            onChangeListenTo: ['password'],
            onChange: ({ value, fieldApi }) => {
              if (value !== group.getFieldValue('password')) return 'Passwords do not match'
              return undefined
            },
          }}
        >
          {(field) => <field.TextField label="Confirm Password" />}
        </group.AppField>
      </>
    )
  },
})

// Usage — specify where fields live in the form
<PasswordFields form={form} fields="account_data" />
```

## Tree-Shaking with React.lazy

For large apps with many form components, lazy-load them:

```tsx
import { lazy } from 'react'
const TextField = lazy(() => import('../components/text-field'))

const { useAppForm } = createFormHook({
  fieldComponents: { TextField },
  formComponents: {},
  fieldContext,
  formContext,
})

// Wrap usage in <Suspense>
<Suspense fallback={<p>Loading...</p>}>
  <MyForm />
</Suspense>
```

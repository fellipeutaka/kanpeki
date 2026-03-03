# React Hook Form API Reference

Complete API reference for React Hook Form v7.65.0

---

## useForm Hook

```typescript
const form = useForm(options)

// Access methods/state via form object:
// form.register, form.handleSubmit, form.watch, form.formState,
// form.setValue, form.getValues, form.reset, form.trigger,
// form.control, form.setError, form.clearErrors, form.setFocus
```

### Options

| Option | Type | Description |
|--------|------|-------------|
| `resolver` | `Resolver` | Schema validation resolver (zodResolver, etc.) |
| `mode` | `'onSubmit' \| 'onChange' \| 'onBlur' \| 'all'` | When to validate (default: 'onSubmit') |
| `reValidateMode` | `'onChange' \| 'onBlur'` | When to re-validate after error |
| `defaultValues` | `object \| () => object \| Promise<object>` | Initial form values |
| `values` | `object` | Controlled form values |
| `resetOptions` | `object` | Options for reset behavior |
| `shouldUnregister` | `boolean` | Unregister fields when unmounted |
| `shouldFocusError` | `boolean` | Focus first error on submit |
| `criteriaMode` | `'firstError' \| 'all'` | Return first error or all |
| `delayError` | `number` | Delay error display (ms) |

---

## register

Register input and apply validation rules.

```typescript
<input {...form.register('fieldName', options)} />
```

**Options**:
- `required`: `boolean | string`
- `min`: `number | { value: number, message: string }`
- `max`: `number | { value: number, message: string }`
- `minLength`: `number | { value: number, message: string }`
- `maxLength`: `number | { value: number, message: string }`
- `pattern`: `RegExp | { value: RegExp, message: string }`
- `validate`: `(value) => boolean | string | object`
- `valueAsNumber`: `boolean`
- `valueAsDate`: `boolean`
- `disabled`: `boolean`
- `onChange`: `(e) => void`
- `onBlur`: `(e) => void`

---

## handleSubmit

Wraps your form submission handler.

```typescript
const onSubmit = form.handleSubmit(
  (data) => {
    // Valid data
  },
  (errors) => {
    // Validation errors
  }
)

<form onSubmit={onSubmit}>
```

---

## watch

Watch specified inputs and return their values.

```typescript
// Watch all fields
const values = form.watch()

// Watch specific field
const email = form.watch('email')

// Watch multiple fields
const [email, password] = form.watch(['email', 'password'])

// Watch with callback
useEffect(() => {
  const subscription = form.watch((value, { name, type }) => {
    console.log(value, name, type)
  })
  return () => subscription.unsubscribe()
}, [form.watch])
```

---

## formState

Form state object.

```typescript
const {
  isDirty,        // Form has been modified
  dirtyFields,    // Object of modified fields
  touchedFields,  // Object of touched fields
  isSubmitted,    // Form has been submitted
  isSubmitSuccessful, // Last submission successful
  isSubmitting,   // Form is currently submitting
  isValidating,   // Form is validating
  isValid,        // Form is valid
  errors,         // Validation errors
  submitCount,    // Number of submissions
} = form.formState
```

---

## setValue

Set field value programmatically.

```typescript
form.setValue('fieldName', value, options)

// Options
{
  shouldValidate: boolean,  // Trigger validation
  shouldDirty: boolean,     // Mark as dirty
  shouldTouch: boolean,     // Mark as touched
}
```

---

## getValues

Get current form values.

```typescript
// Get all values
const values = form.getValues()

// Get specific field
const email = form.getValues('email')

// Get multiple fields
const [email, password] = form.getValues(['email', 'password'])
```

---

## reset

Reset form to default values.

```typescript
form.reset() // Reset to defaultValues

form.reset({ email: '', password: '' }) // Reset to specific values

form.reset(undefined, {
  keepErrors: boolean,
  keepDirty: boolean,
  keepIsSubmitted: boolean,
  keepTouched: boolean,
  keepIsValid: boolean,
  keepSubmitCount: boolean,
})
```

---

## trigger

Manually trigger validation.

```typescript
// Trigger all fields
await form.trigger()

// Trigger specific field
await form.trigger('email')

// Trigger multiple fields
await form.trigger(['email', 'password'])
```

---

## setError

Set field error manually.

```typescript
form.setError('fieldName', {
  type: 'manual',
  message: 'Error message',
})

// Root error (not tied to specific field)
form.setError('root', {
  type: 'server',
  message: 'Server error',
})
```

---

## clearErrors

Clear field errors.

```typescript
form.clearErrors() // Clear all errors

form.clearErrors('email') // Clear specific field

form.clearErrors(['email', 'password']) // Clear multiple fields
```

---

## setFocus

Focus on specific field.

```typescript
form.setFocus('fieldName', { shouldSelect: true })
```

---

## Controller

For controlled components (third-party UI libraries).

```typescript
import { Controller } from 'react-hook-form'

<Controller
  name="fieldName"
  control={form.control}
  defaultValue=""
  rules={{ required: true }}
  render={({ field, fieldState, formState }) => (
    <CustomInput
      {...field}
      error={fieldState.error}
    />
  )}
/>
```

**render props**:
- `field`: `{ value, onChange, onBlur, ref, name }`
- `fieldState`: `{ invalid, isTouched, isDirty, error }`
- `formState`: Full form state

---

## useController

Hook version of Controller (for reusable components).

```typescript
import { useController } from 'react-hook-form'

function CustomInput({ name, control }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: '',
  })

  return <input {...field} />
}
```

---

## useFieldArray

Manage dynamic field arrays.

```typescript
import { useFieldArray } from 'react-hook-form'

const { fields, append, prepend, remove, insert, update, replace } = useFieldArray({
  control: form.control,
  name: 'items',
  keyName: 'id', // Default: 'id'
})
```

**Methods**:
- `append(value)` - Add to end
- `prepend(value)` - Add to beginning
- `insert(index, value)` - Insert at index
- `remove(index)` - Remove at index
- `update(index, value)` - Update at index
- `replace(values)` - Replace entire array

**Important**: Use `field.id` as key, not array index!

```typescript
{fields.map((field, index) => (
  <div key={field.id}> {/* Use field.id! */}
    <input {...form.register(`items.${index}.name`)} />
  </div>
))}
```

---

## useWatch

Subscribe to input changes without re-rendering entire form.

```typescript
import { useWatch } from 'react-hook-form'

const email = useWatch({
  control: form.control,
  name: 'email',
  defaultValue: '',
})
```

---

## useFormState

Subscribe to form state without re-rendering entire form.

```typescript
import { useFormState } from 'react-hook-form'

const { isDirty, isValid } = useFormState({ control: form.control })
```

---

## useFormContext

Access form context (for deeply nested components).

```typescript
import { useFormContext } from 'react-hook-form'

function NestedComponent() {
  const form = useFormContext()

  return <input {...form.register('email')} />
}

// Wrap form with FormProvider
import { FormProvider, useForm } from 'react-hook-form'

function App() {
  const form = useForm()

  return (
    <FormProvider {...form}>
      <form>
        <NestedComponent />
      </form>
    </FormProvider>
  )
}
```

---

## ErrorMessage

Helper component for displaying errors (from @hookform/error-message).

```typescript
import { ErrorMessage } from '@hookform/error-message'

<ErrorMessage
  errors={form.formState.errors}
  name="email"
  render={({ message }) => <span className="error">{message}</span>}
/>
```

---

## DevTool

Development tool for debugging (from @hookform/devtools).

```typescript
import { DevTool } from '@hookform/devtools'

<DevTool control={form.control} />
```

---

**Official Docs**: https://react-hook-form.com/

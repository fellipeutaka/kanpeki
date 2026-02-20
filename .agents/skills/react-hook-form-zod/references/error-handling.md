# Error Handling Guide

Complete guide for handling and displaying form errors.

---

## Error Display Patterns

### 1. Inline Errors (Recommended)

```typescript
<input {...form.register('email')} />
{form.formState.errors.email && (
  <span role="alert" className="text-red-600">
    {form.formState.errors.email.message}
  </span>
)}
```

### 2. Error Summary (Accessibility Best Practice)

```typescript
{Object.keys(form.formState.errors).length > 0 && (
  <div role="alert" aria-live="assertive" className="error-summary">
    <h3>Please fix the following errors:</h3>
    <ul>
      {Object.entries(form.formState.errors).map(([field, error]) => (
        <li key={field}>
          <strong>{field}:</strong> {error.message}
        </li>
      ))}
    </ul>
  </div>
)}
```

### 3. Toast Notifications

```typescript
const onSubmit = form.handleSubmit(
  (data) => {
    // success
  },
  (errors) => {
    toast.error(`Please fix ${Object.keys(errors).length} errors`)
  }
)

<form onSubmit={onSubmit}>
```

---

## ARIA Attributes

### Required Attributes

```typescript
<input
  {...form.register('email')}
  aria-invalid={form.formState.errors.email ? 'true' : 'false'}
  aria-describedby={form.formState.errors.email ? 'email-error' : undefined}
  aria-required="true"
/>
{form.formState.errors.email && (
  <span id="email-error" role="alert">
    {form.formState.errors.email.message}
  </span>
)}
```

---

## Custom Error Messages

### Method 1: In Zod Schema

```typescript
const schema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
})
```

### Method 2: Custom Error Map

```typescript
const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.too_small:
      return { message: `Must be at least ${issue.minimum} characters` }
    case z.ZodIssueCode.invalid_string:
      if (issue.validation === 'email') {
        return { message: 'Please enter a valid email address' }
      }
      break
    default:
      return { message: ctx.defaultError }
  }
}

z.setErrorMap(customErrorMap)
```

---

## Error Formatting

### Flatten Errors for Forms

```typescript
try {
  schema.parse(data)
} catch (error) {
  if (error instanceof z.ZodError) {
    const formattedErrors = error.flatten().fieldErrors
    // Result: { email: ['Invalid email'], password: ['Too short'] }
  }
}
```

### Format Errors for Display

```typescript
const formatError = (error: FieldError): string => {
  switch (error.type) {
    case 'required':
      return 'This field is required'
    case 'min':
      return `Minimum length is ${error.message}`
    case 'pattern':
      return 'Invalid format'
    default:
      return error.message || 'Invalid value'
  }
}
```

---

## Server Error Integration

```typescript
const onSubmit = form.handleSubmit(async (data) => {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!result.success && result.errors) {
      // Map server errors to form fields
      Object.entries(result.errors).forEach(([field, message]) => {
        form.setError(field, {
          type: 'server',
          message: Array.isArray(message) ? message[0] : message,
        })
      })
    }
  } catch (error) {
    // Network error
    form.setError('root', {
      type: 'server',
      message: 'Unable to connect. Please try again.',
    })
  }
})
```

---

## Error Persistence

### Clear Errors on Input Change

```typescript
<input
  {...form.register('email')}
  onChange={(e) => {
    form.register('email').onChange(e)
    form.clearErrors('email') // Clear error when user starts typing
  }}
/>
```

### Clear All Errors on Submit Success

```typescript
const onSubmit = form.handleSubmit(async (data) => {
  const success = await submitData(data)
  if (success) {
    form.reset() // Clears form and errors
  }
})
```

---

## Internationalization (i18n)

```typescript
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()

const schema = z.object({
  email: z.string().email(t('errors.invalidEmail')),
  password: z.string().min(8, t('errors.passwordTooShort')),
})
```

---

## Error Components

### Reusable Error Display

```typescript
function FormError({ error }: { error?: FieldError }) {
  if (!error) return null

  return (
    <div role="alert" className="error">
      <svg className="icon">...</svg>
      <span>{error.message}</span>
    </div>
  )
}

// Usage
<FormError error={form.formState.errors.email} />
```

### Field Group with Error

```typescript
function FieldGroup({ name, label, type = 'text', form }) {
  return (
    <div className="field-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...form.register(name)}
        aria-invalid={form.formState.errors[name] ? 'true' : 'false'}
      />
      {form.formState.errors[name] && <FormError error={form.formState.errors[name]} />}
    </div>
  )
}
```

---

**Official Docs**: https://react-hook-form.com/

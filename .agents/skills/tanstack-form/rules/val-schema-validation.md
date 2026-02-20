# Schema Validation

TanStack Form natively supports [Standard Schema](https://github.com/standard-schema/standard-schema) libraries: Zod, Valibot, ArkType, Yup. Pass schemas directly — no adapters needed.

## Form-Level Schema Validation

Pass a schema to `validators` on the form. Errors automatically propagate to matching fields.

```tsx
import { z } from 'zod'

const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().gte(13, 'Must be 13 or older'),
})

const form = useForm({
  defaultValues: { name: '', age: 0 },
  validators: {
    onChange: userSchema,
  },
  onSubmit: ({ value }) => console.log(value),
})
```

## Field-Level Schema Validation

```tsx
<form.Field
  name="age"
  validators={{
    onChange: z.number().gte(13, 'Must be 13 or older'),
  }}
  children={(field) => <>{/* ... */}</>}
/>
```

## Async Schema Validation

```tsx
<form.Field
  name="age"
  validators={{
    onChange: z.number().gte(13, 'Must be 13 or older'),
    onChangeAsyncDebounceMs: 500,
    onChangeAsync: z.number().refine(
      async (value) => {
        const currentAge = await fetchCurrentAge()
        return value >= currentAge
      },
      { message: 'You can only increase the age' },
    ),
  }}
  children={(field) => <>{/* ... */}</>}
/>
```

## Combining Schema with Custom Logic

Use `fieldApi.parseValueWithSchema` to mix schema validation with custom logic:

```tsx
<form.Field
  name="age"
  asyncDebounceMs={500}
  validators={{
    onChangeAsync: async ({ value, fieldApi }) => {
      const errors = fieldApi.parseValueWithSchema(
        z.number().gte(13, 'Must be 13 or older'),
      )
      if (errors) return errors
      // additional custom validation
      const valid = await checkAgeOnServer(value)
      return valid ? undefined : 'Age rejected by server'
    },
  }}
  children={(field) => <>{/* ... */}</>}
/>
```

## Transforms Are NOT Applied in onSubmit

Standard Schema transforms are not preserved. The `value` in `onSubmit` is always the raw input. Parse manually if you need transformed output.

```tsx
const schema = z.object({
  age: z.string().transform((age) => Number(age)),
})

const form = useForm({
  defaultValues: { age: '13' } satisfies z.input<typeof schema>,
  validators: { onChange: schema },
  onSubmit: ({ value }) => {
    // ❌ value.age is string, NOT number
    const inputAge: string = value.age

    // ✅ Parse manually to get transformed value
    const result = schema.parse(value)
    const outputAge: number = result.age
  },
})
```

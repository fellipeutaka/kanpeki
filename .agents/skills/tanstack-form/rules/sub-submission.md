# Submission Handling

## Basic Submission

Always prevent default and stop propagation before calling `form.handleSubmit()`.

```tsx
<form
  onSubmit={(e) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }}
>
  {/* fields */}
</form>
```

## Passing Metadata to onSubmit

Use `onSubmitMeta` to define metadata types, then pass them via `handleSubmit()`.

```tsx
type FormMeta = {
  submitAction: 'continue' | 'backToMenu' | null
}

const form = useForm({
  defaultValues: { data: '' },
  onSubmitMeta: { submitAction: null } satisfies FormMeta,
  onSubmit: async ({ value, meta }) => {
    console.log(`Action: ${meta.submitAction}`, value)
  },
})

// Different submit buttons with different metadata
<button type="submit" onClick={() => form.handleSubmit({ submitAction: 'continue' })}>
  Submit and continue
</button>
<button type="submit" onClick={() => form.handleSubmit({ submitAction: 'backToMenu' })}>
  Submit and back to menu
</button>
```

If `handleSubmit()` is called without metadata, it uses the default from `onSubmitMeta`.

## Disable Submit When Invalid

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

`canSubmit` is `true` until the form is touched, even if fields are technically invalid. To block submission before any changes:

```tsx
<form.Subscribe
  selector={(state) => [state.canSubmit, state.isSubmitting, state.isPristine]}
  children={([canSubmit, isSubmitting, isPristine]) => (
    <button type="submit" disabled={!canSubmit || isPristine}>
      {isSubmitting ? '...' : 'Submit'}
    </button>
  )}
/>
```

## Schema Transforms in onSubmit

Standard Schema transforms are NOT applied to the `value` in `onSubmit`. Parse manually:

```tsx
const schema = z.object({
  age: z.string().transform((v) => Number(v)),
})

const form = useForm({
  defaultValues: { age: '13' } satisfies z.input<typeof schema>,
  validators: { onChange: schema },
  onSubmit: ({ value }) => {
    // value.age is still string
    const parsed = schema.parse(value)
    // parsed.age is now number
  },
})
```

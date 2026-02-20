# Form Setup

Correct form creation is the foundation of TanStack Form. Types are inferred from `defaultValues` — never pass generics manually.

## Type Inference from defaultValues

```tsx
// ❌ Passing generics — breaks TanStack Form's design philosophy
const form = useForm<{ name: string; age: number }>({
  defaultValues: { name: '', age: 0 },
  onSubmit: ({ value }) => console.log(value),
})

// ✅ Let TypeScript infer from defaultValues
interface Person {
  name: string
  age: number
}
const defaultPerson: Person = { name: '', age: 0 }

const form = useForm({
  defaultValues: defaultPerson,
  onSubmit: async ({ value }) => console.log(value),
})
```

## Always Prevent Default on Submit

```tsx
// ❌ Missing preventDefault — triggers native form submission
<form onSubmit={() => form.handleSubmit()}>

// ✅ Prevent native submission, then call handleSubmit
<form onSubmit={(e) => {
  e.preventDefault()
  e.stopPropagation()
  form.handleSubmit()
}}>
```

## Share Form Shape with formOptions

Use `formOptions` to share the same form configuration across multiple components or between client and server.

```tsx
import { formOptions } from '@tanstack/react-form'

const formOpts = formOptions({
  defaultValues: {
    firstName: '',
    lastName: '',
    age: 0,
  },
})

// Reuse across components
function PageA() {
  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => savePageA(value),
  })
}

function PageB() {
  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => savePageB(value),
  })
}
```

## Reset Buttons

Native `<button type="reset">` bypasses TanStack Form's state. Always use `form.reset()` explicitly.

```tsx
// ❌ Native reset — bypasses TanStack Form, breaks <select> elements
<button type="reset">Reset</button>

// ✅ Prevent native reset, call form.reset()
<button type="reset" onClick={(e) => { e.preventDefault(); form.reset() }}>
  Reset
</button>

// ✅ Alternative — use type="button" to avoid native reset entirely
<button type="button" onClick={() => form.reset()}>Reset</button>
```

## Async Initial Values with TanStack Query

```tsx
import { useQuery } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(),
  })

  const form = useForm({
    defaultValues: {
      firstName: data?.firstName ?? '',
      lastName: data?.lastName ?? '',
    },
    onSubmit: async ({ value }) => console.log(value),
  })

  if (isLoading) return <p>Loading...</p>

  return <form>{/* fields */}</form>
}
```

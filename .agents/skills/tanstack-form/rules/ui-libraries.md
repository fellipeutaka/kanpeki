# UI Libraries

TanStack Form is headless — it has no built-in UI. Integrate with any component library by wiring `field.state.value`, `field.handleChange`, and `field.handleBlur` to your components.

## General Pattern

```tsx
<form.Field
  name="fieldName"
  children={({ state, handleChange, handleBlur }) => (
    <YourComponent
      value={state.value}
      onChange={(newValue) => handleChange(newValue)}
      onBlur={handleBlur}
    />
  )}
/>
```

The key is mapping your UI library's event signatures to TanStack Form's `handleChange(value)` and `handleBlur()`.

## shadcn/ui

```tsx
<form.Field
  name="name"
  children={({ state, handleChange, handleBlur }) => (
    <Input
      value={state.value}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
    />
  )}
/>

<form.Field
  name="isChecked"
  children={({ state, handleChange, handleBlur }) => (
    <Checkbox
      checked={state.value}
      onCheckedChange={(checked) => handleChange(checked === true)}
      onBlur={handleBlur}
    />
  )}
/>
```

Note: shadcn/ui has a dedicated TanStack Form integration guide at [ui.shadcn.com/docs/forms/tanstack-form](https://ui.shadcn.com/docs/forms/tanstack-form).

## Mantine

```tsx
<form.Field
  name="name"
  children={({ state, handleChange, handleBlur }) => (
    <TextInput
      defaultValue={state.value}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
    />
  )}
/>

<form.Field
  name="isChecked"
  children={({ state, handleChange, handleBlur }) => (
    <Checkbox
      checked={state.value}
      onChange={(e) => handleChange(e.target.checked)}
      onBlur={handleBlur}
    />
  )}
/>
```

## Material UI

```tsx
<form.Field
  name="name"
  children={({ state, handleChange, handleBlur }) => (
    <TextField
      value={state.value}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
    />
  )}
/>

<form.Field
  name="isChecked"
  children={({ state, handleChange, handleBlur }) => (
    <MuiCheckbox
      checked={state.value}
      onChange={(e) => handleChange(e.target.checked)}
      onBlur={handleBlur}
    />
  )}
/>
```

## Chakra UI

```tsx
<form.Field
  name="name"
  children={({ state, handleChange, handleBlur }) => (
    <Input
      value={state.value}
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
    />
  )}
/>

<form.Field
  name="isChecked"
  children={({ state, handleChange, handleBlur }) => (
    <Checkbox.Root
      checked={state.value}
      onCheckedChange={(details) => handleChange(!!details.checked)}
      onBlur={handleBlur}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Accept terms</Checkbox.Label>
    </Checkbox.Root>
  )}
/>
```

Note: `!!details.checked` coerces Chakra's `"indeterminate"` state to a boolean.

## Production Tip

Instead of repeating these integrations in every form, wrap them in reusable components and register them with `createFormHook`. See `rules/comp-form-composition.md`.

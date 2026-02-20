# React Hook Form + Kanpeki

## Contents

- Critical Rules
- Text Input & Textarea (full example)
- Key Pattern: Controller + Field.Root
- Select
- Checkbox Group
- Switch
- Field Arrays

Install: `npm install react-hook-form @hookform/resolvers zod`

## Critical Rules

- Never use `z.infer<typeof schema>` on `useForm` — zodResolver infers the type
- Always `const form = useForm(...)` — never destructure; access via `form.control`, `form.formState`, etc.
- Always `const onSubmit = form.handleSubmit((value) => {...})` — extracted variable, not inlined
- Controller render: destructure `field: { ref, disabled, ...field }` + spread `{...field}` on `<TextField />` + `ref={ref}` on `<Input />`/`<Textarea />` + `isDisabled={disabled}`
- `<Field.Error errors={[fieldState.error]} />` — no conditional; `Field.Error` silently ignores `undefined`
- Always provide `defaultValues` in `useForm` — avoids uncontrolled→controlled warnings

## Text Input & Textarea

```tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { TextField } from "~/components/ui/text-field";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters.").max(32),
  description: z.string().min(20, "Description must be at least 20 characters."),
});

export function BugReportForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", description: "" },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-md flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="title"
        render={({ field: { ref, disabled, ...field }, fieldState }) => (
          <Field.Root
            render={
              <TextField isInvalid={fieldState.invalid} isDisabled={disabled} {...field} />
            }
          >
            <Field.Label>Title</Field.Label>
            <Input ref={ref} placeholder="Bug report title" />
            <Field.Description>Concise title for your report.</Field.Description>
            <Field.Error errors={[fieldState.error]} />
          </Field.Root>
        )}
      />
      <Controller
        control={form.control}
        name="description"
        render={({ field: { ref, disabled, ...field }, fieldState }) => (
          <Field.Root
            render={
              <TextField isInvalid={fieldState.invalid} isDisabled={disabled} {...field} />
            }
          >
            <Field.Label>Description</Field.Label>
            <Textarea ref={ref} className="min-h-15" placeholder="Describe in detail..." />
            <Field.Description>Include steps to reproduce.</Field.Description>
            <Field.Error errors={[fieldState.error]} />
          </Field.Root>
        )}
      />
      <div className="flex gap-2">
        <Button onPress={() => form.reset()} type="reset" variant="outline">Reset</Button>
        <Button isDisabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}
```

### Key Pattern: Controller + Field.Root

1. `Controller` wraps each field; `form.control` connects it to the form
2. Destructure `field: { ref, disabled, ...field }` in the render prop
3. `Field.Root render={<TextField ...>}` — spread `{...field}` + `isInvalid` + `isDisabled={disabled}`
4. Put `ref={ref}` on `<Input />` or `<Textarea />` (not on `TextField`)
5. `Field.Error errors={[fieldState.error]}` — always pass array; no conditional needed

## Select

Spread `{...field}` on `Select.Root`. Put `ref={ref}` on `Select.Trigger`.

```tsx
<Controller
  control={form.control}
  name="country"
  render={({ field: { ref, disabled, ...field }, fieldState }) => (
    <Field.Root
      render={
        <Select.Root
          {...field}
          isInvalid={fieldState.invalid}
          isDisabled={disabled}
          placeholder="Select a country"
        />
      }
    >
      <Field.Label>Country</Field.Label>
      <Select.Trigger ref={ref} className="w-full">
        <Select.Value />
      </Select.Trigger>
      <Popover.Content>
        <Listbox.Root>
          <Listbox.Item id="us">United States</Listbox.Item>
          <Listbox.Item id="uk">United Kingdom</Listbox.Item>
        </Listbox.Root>
      </Popover.Content>
      <Field.Error errors={[fieldState.error]} />
    </Field.Root>
  )}
/>
```

## Checkbox Group

Use `Checkbox.Provider` as the render prop. No `ref`/`disabled` destructure needed. Toggle array items manually.

```tsx
const options = [
  { id: "email", label: "Email notifications" },
  { id: "sms", label: "SMS notifications" },
];

<Controller
  control={form.control}
  name="notifications"
  render={({ field, fieldState }) => (
    <Field.Set>
      <Field.Legend variant="label">Notifications</Field.Legend>
      <Field.Group data-slot="checkbox-group">
        {options.map((option) => (
          <Field.Root
            key={option.id}
            orientation="horizontal"
            render={
              <Checkbox.Provider
                isInvalid={fieldState.invalid}
                isSelected={field.value.includes(option.id)}
                onChange={(checked) => {
                  if (checked) {
                    field.onChange([...field.value, option.id]);
                  } else {
                    field.onChange(field.value.filter((v) => v !== option.id));
                  }
                }}
              />
            }
          >
            <Checkbox.Root><Checkbox.Indicator /></Checkbox.Root>
            <Field.Label>{option.label}</Field.Label>
          </Field.Root>
        ))}
      </Field.Group>
      <Field.Error errors={[fieldState.error]} />
    </Field.Set>
  )}
/>
```

## Switch

No `TextField` wrapper. Wire `isSelected`, `onChange`, `name` directly on `Switch.Root`.

```tsx
<Controller
  control={form.control}
  name="marketing"
  render={({ field }) => (
    <Field.Root orientation="horizontal">
      <Field.Content>
        <Field.Title><Field.Label>Marketing emails</Field.Label></Field.Title>
        <Field.Description>Receive emails about new products.</Field.Description>
      </Field.Content>
      <Switch.Root
        isSelected={field.value}
        name={field.name}
        onChange={field.onChange}
      >
        <Switch.Track><Switch.Thumb /></Switch.Track>
      </Switch.Root>
    </Field.Root>
  )}
/>
```

## Field Arrays

Use `control: form.control` (not bare `control`).

```tsx
const { fields, append, remove } = useFieldArray({
  control: form.control,
  name: "emails",
});

{fields.map((item, index) => (
  <Controller
    key={item.id}
    control={form.control}
    name={`emails.${index}.address`}
    render={({ field: { ref, disabled, ...field }, fieldState }) => (
      <Field.Root
        render={
          <TextField isInvalid={fieldState.invalid} isDisabled={disabled} type="email" {...field} />
        }
      >
        <div className="flex items-center gap-2">
          <Input ref={ref} className="flex-1" placeholder="name@example.com" />
          {fields.length > 1 && (
            <Button onPress={() => remove(index)} size="icon" type="button" variant="ghost">
              <XIcon />
            </Button>
          )}
        </div>
        <Field.Error errors={[fieldState.error]} />
      </Field.Root>
    )}
  />
))}
```

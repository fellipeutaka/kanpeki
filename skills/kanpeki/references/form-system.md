# Form System

Kanpeki forms follow a 3-layer architecture:

1. **Form** — submission coordinator (React Aria `<Form>` or plain `<form>`)
2. **Field** — layout wrapper (label, description, error message)
3. **Input component** — React Aria primitive (TextField, Select, NumberField, etc.)

## Field Component API

Namespace import: `import { Field } from "~/components/ui/field";`

| Sub-component | Purpose |
|---|---|
| `Field.Root` | Wrapper, accepts `render` prop for React Aria integration |
| `Field.Label` | Label text |
| `Field.Description` | Help text below the input |
| `Field.Error` | Validation error message(s) |
| `Field.Content` | Generic content wrapper |
| `Field.Set` | `<fieldset>` wrapper |
| `Field.Legend` | `<legend>` inside a FieldSet |
| `Field.Group` | Groups multiple fields |
| `Field.Separator` | Visual separator between fields |
| `Field.Title` | Title within a field |

### Basic Field Usage

```tsx
import { Field } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { TextField } from "~/components/ui/text-field";

<Field.Root render={<TextField type="email" isRequired />}>
  <Field.Label>Email</Field.Label>
  <Input placeholder="john@example.com" />
  <Field.Description>We'll never share your email.</Field.Description>
  <Field.Error />
</Field.Root>
```

The `render` prop on `Field.Root` connects the Field to a React Aria form primitive. This enables automatic label association, validation, and accessibility.

### Field.Error with External Errors

`Field.Error` accepts an `errors` prop for libraries like TanStack Form:

```tsx
<Field.Error errors={field.state.meta.errors} />
```

Each error object should have a `message` property. Multiple errors render as a list.

## InputGroup Component API

Namespace import: `import { InputGroup } from "~/components/ui/input-group";`

| Sub-component | Purpose |
|---|---|
| `InputGroup.Root` | Wrapper with focus ring management |
| `InputGroup.Input` | Input element (from `~/components/ui/input`) |
| `InputGroup.Textarea` | Textarea element |
| `InputGroup.Addon` | Visual addon (icons, text). `align="inline-start"` or `"inline-end"` |
| `InputGroup.Button` | Button inside the group (ghost variant, xs size default) |
| `InputGroup.Text` | Plain text addon |

### InputGroup + Field Example

```tsx
import { Field } from "~/components/ui/field";
import { InputGroup } from "~/components/ui/input-group";
import { TextField } from "~/components/ui/text-field";
import { MailIcon } from "lucide-react";

<Field.Root render={<TextField type="email" />}>
  <Field.Label>Email</Field.Label>
  <InputGroup.Root>
    <InputGroup.Addon>
      <MailIcon />
    </InputGroup.Addon>
    <InputGroup.Input placeholder="Enter email" />
  </InputGroup.Root>
  <Field.Error />
</Field.Root>
```

## ButtonGroup Component API

```tsx
import { ButtonGroup } from "~/components/ui/button-group";
import { Button } from "~/components/ui/button";

<ButtonGroup.Root orientation="horizontal">
  <Button>Left</Button>
  <ButtonGroup.Separator />
  <Button>Right</Button>
</ButtonGroup.Root>
```

## TanStack Form Integration

Full example with Zod validation:

```tsx
"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Field } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { TextField } from "~/components/ui/text-field";
import { Textarea } from "~/components/ui/textarea";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(32, "Title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(200, "Description must be at most 200 characters."),
});

export function BugReportForm() {
  const form = useForm({
    defaultValues: { title: "", description: "" },
    validators: { onChange: formSchema },
    onSubmit: ({ value }) => {
      toast(JSON.stringify(value, null, 2));
    },
  });

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field name="title">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field.Root
              render={
                <TextField
                  id={field.name}
                  isInvalid={isInvalid}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  value={field.state.value}
                />
              }
            >
              <Field.Label>Title</Field.Label>
              <Input placeholder="Bug report title" />
              <Field.Description>
                Provide a concise title for your report.
              </Field.Description>
              <Field.Error errors={field.state.meta.errors} />
            </Field.Root>
          );
        }}
      </form.Field>

      <form.Field name="description">
        {(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field.Root
              render={
                <TextField
                  id={field.name}
                  isInvalid={isInvalid}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  value={field.state.value}
                />
              }
            >
              <Field.Label>Description</Field.Label>
              <Textarea
                className="min-h-15"
                placeholder="Describe the issue in detail..."
              />
              <Field.Description>
                Include steps to reproduce the issue.
              </Field.Description>
              <Field.Error errors={field.state.meta.errors} />
            </Field.Root>
          );
        }}
      </form.Field>

      <div className="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button onPress={() => form.reset()} type="reset" variant="outline">
          Reset
        </Button>
      </div>
    </form>
  );
}
```

### Key Pattern: TanStack Form + Field.Root

1. `form.Field` provides the field state and handlers
2. `Field.Root render={<TextField ...>}` connects the React Aria primitive
3. Pass `isInvalid`, `onChange`, `onBlur`, `value` from the field state to `TextField`
4. `Field.Error errors={field.state.meta.errors}` renders validation messages

## Native HTML Validation

```tsx
import { Form } from "~/components/ui/form";
import { Field } from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { TextField } from "~/components/ui/text-field";
import { Button } from "~/components/ui/button";

<Form>
  <Field.Root render={<TextField name="email" type="email" isRequired />}>
    <Field.Label>Email</Field.Label>
    <Input />
    <Field.Error />
  </Field.Root>
  <Button type="submit">Submit</Button>
</Form>
```

React Aria's `<Form>` component handles native validation and displays `Field.Error` messages automatically.

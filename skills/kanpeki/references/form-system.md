# Form System

## Contents

- Field Component API
- InputGroup Component API
- ButtonGroup Component API
- Native HTML Validation
- Form Library Integration (links to RHF / TanStack Form guides)

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

`Field.Error` accepts an `errors` prop for form libraries:

```tsx
{/* React Hook Form */}
<Field.Error errors={[fieldState.error]} />

{/* TanStack Form */}
<Field.Error errors={field.state.meta.errors} />
```

Each error object should have a `message` property. Multiple errors render as a list. `undefined` entries are silently ignored — no conditional needed.

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

## Form Library Integration

For integrating with form libraries, see the library-specific guides:

- **React Hook Form** → [form-react-hook-form.md](form-react-hook-form.md)
- **TanStack Form** → [form-tanstack-form.md](form-tanstack-form.md)

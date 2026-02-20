# TanStack Form + Kanpeki

## Contents

- Full Example with Zod Validation
- Key Pattern: form.Field + Field.Root

Install: `npm install @tanstack/react-form zod`

## Full Example with Zod Validation

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

## Key Pattern: form.Field + Field.Root

1. `form.Field` provides field state and handlers via render children
2. `Field.Root render={<TextField ...>}` connects the React Aria primitive
3. Pass `id`, `name`, `isInvalid`, `onChange`, `onBlur`, `value` from field state to `TextField`
4. Compute `isInvalid` as `field.state.meta.isTouched && !field.state.meta.isValid`
5. `Field.Error errors={field.state.meta.errors}` renders validation messages
6. Submit: `e.preventDefault()` + `e.stopPropagation()` + `form.handleSubmit()` on the `<form>` element

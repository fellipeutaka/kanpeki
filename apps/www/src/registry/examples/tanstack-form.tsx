"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { Textarea } from "~/registry/ui/textarea";

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

export function TanstackForm() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      toast(JSON.stringify(value, null, 2));
    },
  });

  return (
    <form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field.Root data-invalid={isInvalid || undefined}>
              <Field.Label htmlFor={field.name}>Title</Field.Label>
              <Input
                aria-invalid={isInvalid || undefined}
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Bug report title"
                value={field.state.value}
              />
              <Field.Description>
                Provide a concise title for your report.
              </Field.Description>
              {isInvalid && <Field.Error errors={field.state.meta.errors} />}
            </Field.Root>
          );
        }}
        name="title"
      />
      <form.Field
        children={(field) => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field.Root data-invalid={isInvalid || undefined}>
              <Field.Label htmlFor={field.name}>Description</Field.Label>
              <Textarea
                aria-invalid={isInvalid || undefined}
                className="min-h-[100px]"
                id={field.name}
                name={field.name}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Describe the issue in detail..."
                value={field.state.value}
              />
              <Field.Description>
                Include steps to reproduce the issue.
              </Field.Description>
              {isInvalid && <Field.Error errors={field.state.meta.errors} />}
            </Field.Root>
          );
        }}
        name="description"
      />
      <div className="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button onClick={() => form.reset()} type="button" variant="outline">
          Reset
        </Button>
      </div>
    </form>
  );
}

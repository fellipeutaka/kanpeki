"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";
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

export function TanstackFormDemo() {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    validators: {
      onChange: formSchema,
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
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field
        children={(field) => {
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
        name="title"
      />
      <form.Field
        children={(field) => {
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
        name="description"
      />
      <div className="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button onPress={() => form.reset()} type="reset" variant="outline">
          Reset
        </Button>
      </div>
    </form>
  );
}

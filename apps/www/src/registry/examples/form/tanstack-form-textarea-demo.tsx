"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { TextField } from "~/registry/ui/text-field";
import { Textarea } from "~/registry/ui/textarea";

const formSchema = z.object({
  bio: z
    .string()
    .min(20, "Bio must be at least 20 characters.")
    .max(200, "Bio must be at most 200 characters."),
});

export function TanstackFormTextareaDemo() {
  const form = useForm({
    defaultValues: {
      bio: "",
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
      className="flex w-full max-w-sm flex-col gap-4"
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
              <Field.Label>Bio</Field.Label>
              <Textarea
                className="min-h-24"
                placeholder="Tell us about yourself..."
              />
              <Field.Description>
                Between 20 and 200 characters.
              </Field.Description>
              <Field.Error errors={field.state.meta.errors} />
            </Field.Root>
          );
        }}
        name="bio"
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button isDisabled={!canSubmit} type="submit">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        )}
      />
    </form>
  );
}

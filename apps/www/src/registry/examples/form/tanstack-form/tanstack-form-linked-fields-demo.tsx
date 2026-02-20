"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

const formSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string(),
});

export function TanstackFormLinkedFieldsDemo() {
  const form = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
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
                  type="password"
                  value={field.state.value}
                />
              }
            >
              <Field.Label>Password</Field.Label>
              <Input />
              <Field.Error errors={field.state.meta.errors} />
            </Field.Root>
          );
        }}
        name="password"
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
                  type="password"
                  value={field.state.value}
                />
              }
            >
              <Field.Label>Confirm Password</Field.Label>
              <Input />
              <Field.Error errors={field.state.meta.errors} />
            </Field.Root>
          );
        }}
        name="confirmPassword"
        validators={{
          onChangeListenTo: ["password"],
          onChange: ({ value, fieldApi }) => {
            if (value !== fieldApi.form.getFieldValue("password")) {
              return {
                message: "Passwords do not match.",
              };
            }
          },
        }}
      />
      <div className="flex gap-2">
        <Button onPress={() => form.reset()} type="reset" variant="outline">
          Reset
        </Button>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button isDisabled={!canSubmit} type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        />
      </div>
    </form>
  );
}

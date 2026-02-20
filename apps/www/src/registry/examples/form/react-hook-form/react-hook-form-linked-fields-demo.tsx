"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

const formSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export function ReactHookFormLinkedFieldsDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-sm flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="password"
        render={({ field: { ref, disabled, ...field }, fieldState }) => (
          <Field.Root
            render={
              <TextField
                isInvalid={fieldState.invalid}
                isDisabled={disabled}
                type="password"
                {...field}
              />
            }
          >
            <Field.Label>Password</Field.Label>
            <Input ref={ref} />
            <Field.Error errors={[fieldState.error]} />
          </Field.Root>
        )}
      />
      <Controller
        control={form.control}
        name="confirmPassword"
        render={({ field: { ref, disabled, ...field }, fieldState }) => (
          <Field.Root
            render={
              <TextField
                isInvalid={fieldState.invalid}
                isDisabled={disabled}
                type="password"
                {...field}
              />
            }
          >
            <Field.Label>Confirm Password</Field.Label>
            <Input ref={ref} />
            <Field.Error errors={[fieldState.error]} />
          </Field.Root>
        )}
      />
      <div className="flex gap-2">
        <Button onPress={() => form.reset()} type="reset" variant="outline">
          Reset
        </Button>
        <Button isDisabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
}

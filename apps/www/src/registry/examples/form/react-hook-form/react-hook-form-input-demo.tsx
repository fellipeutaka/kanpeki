"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username must be at most 20 characters.")
    .regex(/^[a-z0-9_]+$/, "Only lowercase letters, numbers, and underscores."),
});

export function ReactHookFormInputDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-sm flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="username"
        render={({ field: { ref, disabled, ...field }, fieldState }) => (
          <Field.Root
            render={
              <TextField
                isInvalid={fieldState.invalid}
                isDisabled={disabled}
                {...field}
              />
            }
          >
            <Field.Label>Username</Field.Label>
            <Input ref={ref} placeholder="johndoe" />
            <Field.Description>Your public display name.</Field.Description>
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

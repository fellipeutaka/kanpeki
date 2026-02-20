"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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

export function ReactHookFormTextareaDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
    },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-sm flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="bio"
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
            <Field.Label>Bio</Field.Label>
            <Textarea
              ref={ref}
              className="min-h-24"
              placeholder="Tell us about yourself..."
            />
            <Field.Description>
              Between 20 and 200 characters.
            </Field.Description>
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

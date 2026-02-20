"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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

export function ReactHookFormDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-md flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="title"
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
            <Field.Label>Title</Field.Label>
            <Input ref={ref} placeholder="Bug report title" />
            <Field.Description>
              Provide a concise title for your report.
            </Field.Description>
            <Field.Error errors={[fieldState.error]} />
          </Field.Root>
        )}
      />
      <Controller
        control={form.control}
        name="description"
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
            <Field.Label>Description</Field.Label>
            <Textarea
              ref={ref}
              className="min-h-15"
              placeholder="Describe the issue in detail..."
            />
            <Field.Description>
              Include steps to reproduce the issue.
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

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, XIcon } from "lucide-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

const MAX_EMAILS = 5;

const formSchema = z.object({
  emails: z
    .array(z.object({ address: z.string().email("Enter a valid email.") }))
    .min(1, "Add at least one email address.")
    .max(MAX_EMAILS, `You can add up to ${MAX_EMAILS} email addresses.`),
});

export function ReactHookFormArrayDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emails: [{ address: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "emails",
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-sm flex-col gap-4" onSubmit={onSubmit}>
      <Field.Set>
        <Field.Legend variant="label">Email Addresses</Field.Legend>
        <Field.Group>
          {fields.map((item, index) => (
            <Controller
              key={item.id}
              control={form.control}
              name={`emails.${index}.address`}
              render={({ field: { ref, disabled, ...field }, fieldState }) => (
                <Field.Root
                  render={
                    <TextField
                      isInvalid={fieldState.invalid}
                      isDisabled={disabled}
                      type="email"
                      {...field}
                    />
                  }
                >
                  <div className="flex items-center gap-2">
                    <Input
                      ref={ref}
                      className="flex-1"
                      placeholder="name@example.com"
                    />
                    {fields.length > 1 && (
                      <Button
                        aria-label={`Remove email ${index + 1}`}
                        onPress={() => remove(index)}
                        size="icon"
                        type="button"
                        variant="ghost"
                      >
                        <XIcon />
                      </Button>
                    )}
                  </div>
                  <Field.Error errors={[fieldState.error]} />
                </Field.Root>
              )}
            />
          ))}
        </Field.Group>
        <Button
          isDisabled={fields.length >= MAX_EMAILS}
          onPress={() => append({ address: "" })}
          size="sm"
          type="button"
          variant="outline"
        >
          <PlusIcon />
          Add email
        </Button>
      </Field.Set>
      <Button isDisabled={form.formState.isSubmitting} type="submit">
        {form.formState.isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}

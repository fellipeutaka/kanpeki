"use client";

import { useForm } from "@tanstack/react-form";
import { PlusIcon, XIcon } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

const MAX_EMAILS = 5;

const formSchema = z.object({
  emails: z
    .array(z.object({ address: z.email("Enter a valid email.") }))
    .min(1, "Add at least one email address.")
    .max(MAX_EMAILS, `You can add up to ${MAX_EMAILS} email addresses.`),
});

export function TanstackFormArrayDemo() {
  const form = useForm({
    defaultValues: {
      emails: [{ address: "" }],
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
        children={(field) => (
          <Field.Set>
            <Field.Legend variant="label">Email Addresses</Field.Legend>
            <Field.Group>
              {field.state.value.map((_, index) => (
                <form.Field
                  children={(subField) => {
                    const isInvalid =
                      subField.state.meta.isTouched &&
                      !subField.state.meta.isValid;
                    return (
                      <Field.Root
                        render={
                          <TextField
                            id={subField.name}
                            isInvalid={isInvalid}
                            name={subField.name}
                            onBlur={subField.handleBlur}
                            onChange={subField.handleChange}
                            type="email"
                            value={subField.state.value}
                          />
                        }
                      >
                        <div className="flex items-center gap-2">
                          <Input
                            className="flex-1"
                            placeholder="name@example.com"
                          />
                          {field.state.value.length > 1 && (
                            <Button
                              aria-label={`Remove email ${index + 1}`}
                              onPress={() => field.removeValue(index)}
                              size="icon"
                              type="button"
                              variant="ghost"
                            >
                              <XIcon />
                            </Button>
                          )}
                        </div>
                        <Field.Error errors={subField.state.meta.errors} />
                      </Field.Root>
                    );
                  }}
                  // biome-ignore lint/suspicious/noArrayIndexKey: index is stable for array fields
                  key={index}
                  name={`emails[${index}].address`}
                />
              ))}
            </Field.Group>
            <Button
              isDisabled={field.state.value.length >= MAX_EMAILS}
              onPress={() => field.pushValue({ address: "" })}
              size="sm"
              type="button"
              variant="outline"
            >
              <PlusIcon />
              Add email
            </Button>
          </Field.Set>
        )}
        mode="array"
        name="emails"
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

"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/registry/ui/button";
import { Checkbox } from "~/registry/ui/checkbox";
import { Field } from "~/registry/ui/field";

const options = [
  { id: "email", label: "Email notifications" },
  { id: "sms", label: "SMS notifications" },
  { id: "push", label: "Push notifications" },
] as const;

const formSchema = z.object({
  notifications: z
    .array(z.string())
    .min(1, "Select at least one notification type."),
});

const defaultValues: z.infer<typeof formSchema> = {
  notifications: [],
};

export function TanstackFormCheckboxDemo() {
  const form = useForm({
    defaultValues,
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
            <Field.Set>
              <Field.Legend variant="label">Notifications</Field.Legend>
              <Field.Group data-slot="checkbox-group">
                {options.map((option) => (
                  <Field.Root
                    key={option.id}
                    orientation="horizontal"
                    render={
                      <Checkbox.Provider
                        isInvalid={isInvalid}
                        isSelected={field.state.value.includes(option.id)}
                        onChange={(checked) => {
                          if (checked) {
                            field.pushValue(option.id);
                            return;
                          }

                          const index = field.state.value.indexOf(option.id);
                          if (index > -1) {
                            field.removeValue(index);
                          }
                        }}
                      />
                    }
                  >
                    <Checkbox.Root>
                      <Checkbox.Indicator />
                    </Checkbox.Root>
                    <Field.Label>{option.label}</Field.Label>
                  </Field.Root>
                ))}
              </Field.Group>
              <Field.Error errors={field.state.meta.errors} />
            </Field.Set>
          );
        }}
        mode="array"
        name="notifications"
      />
      <div className="grid grid-cols-2 gap-2">
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

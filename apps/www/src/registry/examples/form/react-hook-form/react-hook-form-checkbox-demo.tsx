"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
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

export function ReactHookFormCheckboxDemo() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notifications: [],
    },
  });

  const onSubmit = form.handleSubmit((value) => {
    toast(JSON.stringify(value, null, 2));
  });

  return (
    <form className="flex w-full max-w-sm flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        control={form.control}
        name="notifications"
        render={({ field, fieldState }) => (
          <Field.Set>
            <Field.Legend variant="label">Notifications</Field.Legend>
            <Field.Group data-slot="checkbox-group">
              {options.map((option) => (
                <Field.Root
                  key={option.id}
                  orientation="horizontal"
                  render={
                    <Checkbox.Provider
                      isInvalid={fieldState.invalid}
                      isSelected={field.value.includes(option.id)}
                      onChange={(checked) => {
                        if (checked) {
                          field.onChange([...field.value, option.id]);
                        } else {
                          field.onChange(
                            field.value.filter((v) => v !== option.id)
                          );
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
            <Field.Error errors={[fieldState.error]} />
          </Field.Set>
        )}
      />
      <div className="grid grid-cols-2 gap-2">
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

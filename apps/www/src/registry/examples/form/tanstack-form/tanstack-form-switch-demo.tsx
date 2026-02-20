"use client";

import { useForm } from "@tanstack/react-form";
import { useId } from "react";
import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Switch } from "~/registry/ui/switch";

export function TanstackFormSwitchDemo() {
  const id = useId();

  const form = useForm({
    defaultValues: {
      marketing: false,
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
          <Field.Root orientation="horizontal">
            <Field.Content>
              <Field.Title>
                <Field.Label htmlFor={id}>Marketing emails</Field.Label>
              </Field.Title>
              <Field.Description>
                Receive emails about new products and features.
              </Field.Description>
            </Field.Content>
            <Switch.Root
              id={id}
              isSelected={field.state.value}
              onChange={field.handleChange}
            >
              <Switch.Track>
                <Switch.Thumb />
              </Switch.Track>
            </Switch.Root>
          </Field.Root>
        )}
        name="marketing"
      />
      <div className="flex gap-2">
        <Button onPress={() => form.reset()} type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Save preferences</Button>
      </div>
    </form>
  );
}

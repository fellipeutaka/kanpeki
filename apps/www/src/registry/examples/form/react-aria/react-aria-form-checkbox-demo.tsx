"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Checkbox } from "~/registry/ui/checkbox";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";

const options = [
  { id: "email", label: "Email notifications" },
  { id: "sms", label: "SMS notifications" },
  { id: "push", label: "Push notifications" },
] as const;

export function ReactAriaFormCheckboxDemo() {
  return (
    <Form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        toast(JSON.stringify(data.getAll("notifications"), null, 2));
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <Field.Set>
        <Field.Legend variant="label">Notifications</Field.Legend>
        <Field.Group data-slot="checkbox-group">
          {options.map((option) => (
            <Field.Root
              key={option.id}
              orientation="horizontal"
              render={
                <Checkbox.Provider
                  isRequired
                  name="notifications"
                  value={option.id}
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
      </Field.Set>
      <div className="grid grid-cols-2 gap-2">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}

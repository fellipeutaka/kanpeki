"use client";

import { useId } from "react";
import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";
import { Switch } from "~/registry/ui/switch";

export function ReactAriaFormSwitchDemo() {
  const id = useId();

  return (
    <Form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        toast(JSON.stringify(data, null, 2));
      }}
    >
      <Field.Root orientation="horizontal">
        <Field.Content>
          <Field.Title>
            <Field.Label htmlFor={id}>Marketing emails</Field.Label>
          </Field.Title>
          <Field.Description>
            Receive emails about new products and features.
          </Field.Description>
        </Field.Content>
        <Switch.Root id={id} name="marketing" value="on">
          <Switch.Track>
            <Switch.Thumb />
          </Switch.Track>
        </Switch.Root>
      </Field.Root>
      <div className="flex gap-2">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Save preferences</Button>
      </div>
    </Form>
  );
}

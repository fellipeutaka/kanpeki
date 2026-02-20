"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";
import { TextField } from "~/registry/ui/text-field";
import { Textarea } from "~/registry/ui/textarea";

export function ReactAriaFormTextareaDemo() {
  return (
    <Form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        toast(JSON.stringify(data, null, 2));
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <Field.Root
        render={
          <TextField isRequired maxLength={200} minLength={20} name="bio" />
        }
      >
        <Field.Label>Bio</Field.Label>
        <Textarea
          className="min-h-24"
          placeholder="Tell us about yourself..."
        />
        <Field.Description>Between 20 and 200 characters.</Field.Description>
        <Field.Error />
      </Field.Root>
      <div className="flex gap-2">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  );
}

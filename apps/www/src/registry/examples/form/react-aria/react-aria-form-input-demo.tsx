"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function ReactAriaFormInputDemo() {
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
          <TextField
            isRequired
            maxLength={20}
            minLength={3}
            name="username"
            pattern="^[a-z0-9_]+$"
          />
        }
      >
        <Field.Label>Username</Field.Label>
        <Input placeholder="johndoe" />
        <Field.Description>Your public display name.</Field.Description>
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

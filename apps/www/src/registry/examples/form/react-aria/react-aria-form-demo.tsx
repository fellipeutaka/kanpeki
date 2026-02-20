"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";
import { Textarea } from "~/registry/ui/textarea";

export function ReactAriaFormDemo() {
  return (
    <Form
      className="flex w-full max-w-md flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        toast(JSON.stringify(data, null, 2));
        (e.currentTarget as HTMLFormElement).reset();
      }}
    >
      <Field.Root
        render={
          <TextField isRequired maxLength={32} minLength={5} name="title" />
        }
      >
        <Field.Label>Title</Field.Label>
        <Input placeholder="Bug report title" />
        <Field.Description>
          Provide a concise title for your report.
        </Field.Description>
        <Field.Error />
      </Field.Root>
      <Field.Root
        render={
          <TextField
            isRequired
            maxLength={200}
            minLength={20}
            name="description"
          />
        }
      >
        <Field.Label>Description</Field.Label>
        <Textarea
          className="min-h-15"
          placeholder="Describe the issue in detail..."
        />
        <Field.Description>
          Include steps to reproduce the issue.
        </Field.Description>
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

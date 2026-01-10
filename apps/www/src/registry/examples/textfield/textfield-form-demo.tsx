"use client";

import { toast } from "sonner";
import { Button } from "~/registry/ui/button";
import { Field } from "~/registry/ui/field";
import { Form } from "~/registry/ui/form";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function TextfieldFormDemo() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    toast(JSON.stringify(data, null, 2));
  }

  return (
    <Form
      className="flex w-full max-w-sm flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <Field.Root render={<TextField isRequired name="email" type="email" />}>
        <Field.Label>Email</Field.Label>
        <Input placeholder="john@example.com" />
        <Field.Description>We'll never share your email.</Field.Description>
        <Field.Error />
      </Field.Root>
      <Field.Root render={<TextField isRequired name="username" />}>
        <Field.Label>Username</Field.Label>
        <Input placeholder="johndoe" />
        <Field.Error />
      </Field.Root>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

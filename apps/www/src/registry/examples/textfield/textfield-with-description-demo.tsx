"use client";

import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function TextfieldWithDescriptionDemo() {
  return (
    <Field.Root render={<TextField type="email" />}>
      <Field.Label>Email</Field.Label>
      <Input placeholder="john@example.com" />
      <Field.Description>
        We'll never share your email with anyone.
      </Field.Description>
    </Field.Root>
  );
}

import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function FieldInputDemo() {
  return (
    <Field.Root render={<TextField type="email" />}>
      <Field.Label>Email</Field.Label>
      <Input placeholder="john@example.com" />
      <Field.Description>We'll never share your email.</Field.Description>
    </Field.Root>
  );
}

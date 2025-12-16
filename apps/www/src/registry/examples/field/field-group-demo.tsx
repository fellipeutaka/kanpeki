import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function FieldGroupDemo() {
  return (
    <Field.Group>
      <Field.Root render={<TextField type="email" />}>
        <Field.Label>Email</Field.Label>
        <Input placeholder="john@example.com" />
      </Field.Root>
      <Field.Separator>Or</Field.Separator>
      <Field.Root render={<TextField type="tel" />}>
        <Field.Label>Phone</Field.Label>
        <Input placeholder="+1 (555) 123-4567" />
      </Field.Root>
    </Field.Group>
  );
}

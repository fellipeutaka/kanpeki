import { Field } from "~/registry/ui/field";
import { TextField } from "~/registry/ui/text-field";
import { Textarea } from "~/registry/ui/textarea";

export function FieldTextareaDemo() {
  return (
    <Field.Root render={<TextField />}>
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself..." />
      <Field.Description>Max 500 characters.</Field.Description>
    </Field.Root>
  );
}

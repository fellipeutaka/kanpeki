import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function TextfieldDemo() {
  return (
    <Field.Root render={<TextField />}>
      <Field.Label>Name</Field.Label>
      <Input placeholder="Enter your name" />
    </Field.Root>
  );
}

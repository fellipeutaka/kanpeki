import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function TextfieldValidationDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Field.Root render={<TextField isRequired />}>
        <Field.Label>Required field</Field.Label>
        <Input placeholder="This field is required" />
      </Field.Root>
      <Field.Root render={<TextField isInvalid />}>
        <Field.Label>Invalid field</Field.Label>
        <Input placeholder="This field has an error" />
        <Field.Error>Please enter a valid value.</Field.Error>
      </Field.Root>
      <Field.Root render={<TextField isDisabled />}>
        <Field.Label>Disabled field</Field.Label>
        <Input placeholder="This field is disabled" />
      </Field.Root>
      <Field.Root
        render={<TextField defaultValue="Read only value" isReadOnly />}
      >
        <Field.Label>Read-only field</Field.Label>
        <Input />
      </Field.Root>
    </div>
  );
}

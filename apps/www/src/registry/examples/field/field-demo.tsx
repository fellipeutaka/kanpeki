import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function FieldDemo() {
  return (
    <Field.Set>
      <Field.Legend>Profile</Field.Legend>
      <Field.Description>
        This information will be displayed on your profile.
      </Field.Description>
      <Field.Group>
        <Field.Root render={<TextField />}>
          <Field.Label>Full name</Field.Label>
          <Input placeholder="John Doe" />
          <Field.Description>
            This appears on invoices and emails.
          </Field.Description>
        </Field.Root>
        <Field.Root render={<TextField isInvalid />}>
          <Field.Label>Username</Field.Label>
          <Input placeholder="johndoe" />
          <Field.Error>This username is already taken.</Field.Error>
        </Field.Root>
      </Field.Group>
    </Field.Set>
  );
}

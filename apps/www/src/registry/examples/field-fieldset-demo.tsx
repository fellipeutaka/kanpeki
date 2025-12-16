import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function FieldFieldsetDemo() {
  return (
    <Field.Set>
      <Field.Legend>Shipping Address</Field.Legend>
      <Field.Group>
        <Field.Root render={<TextField />}>
          <Field.Label>Street address</Field.Label>
          <Input placeholder="123 Main St" />
        </Field.Root>
        <Field.Root render={<TextField />}>
          <Field.Label>City</Field.Label>
          <Input placeholder="San Francisco" />
        </Field.Root>
        <Field.Root render={<TextField />}>
          <Field.Label>Postal code</Field.Label>
          <Input placeholder="94102" />
        </Field.Root>
      </Field.Group>
    </Field.Set>
  );
}

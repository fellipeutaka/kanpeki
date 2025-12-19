import { Checkbox } from "~/registry/ui/checkbox";
import { Field } from "~/registry/ui/field";

export function FieldCheckboxDemo() {
  return (
    <Field.Root orientation="horizontal" render={<Checkbox.Provider />}>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>

      <Field.Content>
        <Field.Label>Accept terms and conditions</Field.Label>
        <Field.Description>
          You agree to our Terms of Service and Privacy Policy.
        </Field.Description>
      </Field.Content>
    </Field.Root>
  );
}

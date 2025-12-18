import { useId } from "react";
import { Field } from "~/registry/ui/field";
import { Switch } from "~/registry/ui/switch";

export function FieldSwitchDemo() {
  const id = useId();

  return (
    <Field.Root orientation="horizontal">
      <Field.Content>
        <Field.Label htmlFor={id}>Marketing emails</Field.Label>
        <Field.Description>
          Receive emails about new products and features.
        </Field.Description>
      </Field.Content>

      <Switch.Root id={id}>
        <Switch.Track>
          <Switch.Thumb />
        </Switch.Track>
      </Switch.Root>
    </Field.Root>
  );
}

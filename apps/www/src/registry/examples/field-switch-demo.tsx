import { Field } from "~/registry/ui/field";
import { Switch } from "~/registry/ui/switch";

export function FieldSwitchDemo() {
  return (
    <Field.Root orientation="horizontal">
      <Field.Content>
        <Field.Label>Marketing emails</Field.Label>
        <Field.Description>
          Receive emails about new products and features.
        </Field.Description>
      </Field.Content>
      <Switch.Root>
        <Switch.Track>
          <Switch.Thumb />
        </Switch.Track>
      </Switch.Root>
    </Field.Root>
  );
}

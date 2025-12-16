import { Field } from "~/registry/ui/field";
import { Label } from "~/registry/ui/label";
import { RadioGroup } from "~/registry/ui/radio-group";

export function FieldRadioDemo() {
  return (
    <Field.Set>
      <Field.Legend>Notification preferences</Field.Legend>
      <Field.Description>
        How would you like to receive notifications?
      </Field.Description>
      <RadioGroup.Root data-slot="radio-group" defaultValue="email">
        <Field.Root orientation="horizontal">
          <RadioGroup.Item value="email">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label>Email</Label>
        </Field.Root>
        <Field.Root orientation="horizontal">
          <RadioGroup.Item value="sms">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label>SMS</Label>
        </Field.Root>
        <Field.Root orientation="horizontal">
          <RadioGroup.Item value="push">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label>Push notification</Label>
        </Field.Root>
      </RadioGroup.Root>
    </Field.Set>
  );
}

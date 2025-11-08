import { Label } from "~/registry/ui/label/label";
import { RadioGroup } from "~/registry/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup.Root aria-label="Display density" defaultValue="comfortable">
      <RadioGroup.Item value="default">
        <RadioGroup.Indicator />
        <Label>Default</Label>
      </RadioGroup.Item>

      <RadioGroup.Item value="comfortable">
        <RadioGroup.Indicator />
        <Label>Comfortable</Label>
      </RadioGroup.Item>

      <RadioGroup.Item value="compact">
        <RadioGroup.Indicator />
        <Label>Compact</Label>
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}

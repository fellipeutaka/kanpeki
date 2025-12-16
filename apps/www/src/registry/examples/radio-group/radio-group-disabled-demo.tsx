import { Label } from "~/registry/ui/label/label";
import { RadioGroup } from "~/registry/ui/radio-group";

export function RadioGroupDisabledDemo() {
  return (
    <RadioGroup.Root aria-label="Favorite pet">
      <RadioGroup.Item value="dog">
        <RadioGroup.Indicator />
        <Label>Dog</Label>
      </RadioGroup.Item>

      <RadioGroup.Item value="cat">
        <RadioGroup.Indicator />
        <Label>Cat</Label>
      </RadioGroup.Item>

      <RadioGroup.Item isDisabled value="dragon">
        <RadioGroup.Indicator />
        <Label>Dragon</Label>
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}

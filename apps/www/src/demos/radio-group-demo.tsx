import { RadioGroup } from "~/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup.Root>
      <RadioGroup.Item value="r1">Default</RadioGroup.Item>
      <RadioGroup.Item value="r2">Comfortable</RadioGroup.Item>
      <RadioGroup.Item value="r3">Compact</RadioGroup.Item>
    </RadioGroup.Root>
  );
}

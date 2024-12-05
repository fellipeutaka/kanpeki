import { Checkbox } from "~/components/ui/checkbox";

export default function CheckboxDisabled() {
  return (
    <Checkbox.Provider isDisabled>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Accept terms and conditions
    </Checkbox.Provider>
  );
}

import { Checkbox } from "~/registry/ui/checkbox";

export function CheckboxDisabledDemo() {
  return (
    <Checkbox.Provider isDisabled>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Enable notifications
    </Checkbox.Provider>
  );
}

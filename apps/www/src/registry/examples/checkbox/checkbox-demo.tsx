import { Checkbox } from "~/registry/ui/checkbox";

export function CheckboxDemo() {
  return (
    <Checkbox.Provider>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Accept terms and conditions
    </Checkbox.Provider>
  );
}

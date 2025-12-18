import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";

import { Select } from "~/registry/ui/select";

export function SelectDemo() {
  return (
    <Select.Root aria-label="Fruits" placeholder="Select a fruit">
      <Select.Trigger className="w-[180px]">
        <Select.Value />
      </Select.Trigger>
      <Popover.Content>
        <Listbox.Root>
          <Listbox.Label>Fruits</Listbox.Label>
          <Listbox.Item id="apple">Apple</Listbox.Item>
          <Listbox.Item id="banana">Banana</Listbox.Item>
          <Listbox.Item id="blueberry">Blueberry</Listbox.Item>
          <Listbox.Item id="grapes" isDisabled>
            Grapes
          </Listbox.Item>
          <Listbox.Item id="pineapple">Pineapple</Listbox.Item>
        </Listbox.Root>
      </Popover.Content>
    </Select.Root>
  );
}

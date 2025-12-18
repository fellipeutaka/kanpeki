import { Field } from "~/registry/ui/field";
import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";
import { Select } from "~/registry/ui/select";

export function FieldSelectDemo() {
  return (
    <Field.Root render={<Select.Root placeholder="Select a fruit" />}>
      <Field.Label>Favorite fruit</Field.Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Popover.Content>
        <Listbox.Root>
          <Listbox.Item id="apple">Apple</Listbox.Item>
          <Listbox.Item id="banana">Banana</Listbox.Item>
          <Listbox.Item id="blueberry">Blueberry</Listbox.Item>
          <Listbox.Item id="pineapple">Pineapple</Listbox.Item>
        </Listbox.Root>
      </Popover.Content>
      <Field.Description>Choose your favorite fruit.</Field.Description>
    </Field.Root>
  );
}

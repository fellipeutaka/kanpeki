"use client";

import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashedIcon,
} from "lucide-react";
import { Text } from "react-aria-components";
import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";

import { Select } from "~/registry/ui/select";

const LARGE_LIST_ITEMS = Array.from({ length: 100 }, (_, i) => ({ id: i }));

export function SelectDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Select.Root aria-label="Fruits" placeholder="Select a fruit">
        <Select.Trigger className="w-[180px]">
          <Select.Value />
        </Select.Trigger>
        <Popover.Content>
          <Listbox.Root>
            {/* <SelectLabel>Fruits</SelectLabel> */}
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

      <Select.Root aria-label="Large List" placeholder="Large List">
        <Select.Trigger className="w-[180px]">
          <Select.Value />
        </Select.Trigger>
        <Popover.Content>
          <Listbox.Root items={LARGE_LIST_ITEMS}>
            {({ id }) => <Listbox.Item id={id}>Item {id}</Listbox.Item>}
          </Listbox.Root>
        </Popover.Content>
      </Select.Root>

      <Select.Root aria-label="Fruits" isDisabled placeholder="Disabled">
        <Select.Trigger className="w-[180px]">
          <Select.Value />
        </Select.Trigger>
        <Popover.Content>
          <Listbox.Root>
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

      <Select.Root aria-label="Charts" placeholder="With Icon">
        <Select.Trigger className="w-[180px]">
          <Select.Value>
            {(values) => (
              <>
                {values.isPlaceholder && (
                  <CircleDashedIcon className="text-muted-foreground" />
                )}
                {values.defaultChildren}
              </>
            )}
          </Select.Value>
        </Select.Trigger>
        <Popover.Content>
          <Listbox.Root>
            <Listbox.Item id="line">
              <ChartLineIcon />
              <Text slot="label">Line</Text>
            </Listbox.Item>
            <Listbox.Item id="bar">
              <ChartBarIcon />
              <Text slot="label">Bar</Text>
            </Listbox.Item>
            <Listbox.Item id="pie">
              <ChartPieIcon />
              <Text slot="label">Pie</Text>
            </Listbox.Item>
          </Listbox.Root>
        </Popover.Content>
      </Select.Root>
    </div>
  );
}

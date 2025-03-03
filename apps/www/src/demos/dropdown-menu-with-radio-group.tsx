"use client";

import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Button } from "~/components/ui/button";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { Popover } from "~/components/ui/popover";

const items = [
  {
    id: "status-bar",
    name: "Status Bar",
  },
  {
    id: "activity-bar",
    name: "Activity Bar",
    isDisabled: true,
  },
  {
    id: "panel",
    name: "Panel",
  },
] satisfies {
  id: string;
  name: string;
  isDisabled?: boolean;
}[];

export default function DropdownMenuWithRadioGroupDemo() {
  const [selected, setSelected] = useState<Selection>(new Set(["status-bar"]));

  return (
    <DropdownMenu.Root>
      <Button variant="outline">Open</Button>

      <Popover.Content>
        <DropdownMenu.Content
          items={items}
          selectedKeys={selected}
          onSelectionChange={setSelected}
          selectionMode="single"
        >
          {(item) => (
            <DropdownMenu.Item
              type="radio"
              id={item.id}
              isDisabled={item.isDisabled}
            >
              {item.name}
            </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </Popover.Content>
    </DropdownMenu.Root>
  );
}

"use client";

import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Button } from "~/registry/ui/button/button";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function MenuRadioGroupDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  return (
    <Menu.Root>
      <Button variant="outline">Radio Group</Button>

      <Popover.Content placement="bottom start">
        <Menu.Content className="w-56">
          <Menu.Label inset>Panel Position</Menu.Label>
          <Menu.Group
            onSelectionChange={setSelectedKeys}
            selectedKeys={selectedKeys}
            selectionMode="single"
          >
            <Menu.Item>Top</Menu.Item>
            <Menu.Item>Bottom</Menu.Item>
            <Menu.Item isDisabled>Right</Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

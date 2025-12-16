"use client";

import {
  CreditCardIcon,
  LogOutIcon,
  Settings2Icon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Button } from "~/registry/ui/button/button";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function MenuCheckboxesDemo() {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));

  return (
    <Menu.Root>
      <Button variant="outline">Checkboxes</Button>

      <Popover.Content placement="bottom start">
        <Menu.Content className="w-56">
          <Menu.Group>
            <Menu.Label>Account</Menu.Label>
            <Menu.Item>
              <UserIcon /> Profile
            </Menu.Item>
            <Menu.Item>
              <CreditCardIcon /> Billing
            </Menu.Item>
            <Menu.Item>
              <Settings2Icon /> Settings
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group
            onSelectionChange={setSelectedKeys}
            selectedKeys={selectedKeys}
            selectionMode="multiple"
          >
            <Menu.Label>Appearance</Menu.Label>
            <Menu.Item>Status Bar</Menu.Item>
            <Menu.Item isDisabled>Activity Bar</Menu.Item>
            <Menu.Item>Panel</Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group>
            <Menu.Item>
              <LogOutIcon /> Sign Out
            </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

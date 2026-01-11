"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { InputGroup } from "~/registry/ui/input-group";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function InputGroupDropdownDemo() {
  const [selectedDomain, setSelectedDomain] = useState(".com");

  return (
    <InputGroup.Root>
      <InputGroup.Input placeholder="example" />
      <InputGroup.Addon align="inline-end">
        <Menu.Root>
          <InputGroup.Button>
            {selectedDomain}
            <ChevronDownIcon />
          </InputGroup.Button>
          <Popover.Content>
            <Menu.Content>
              <Menu.Item onAction={() => setSelectedDomain(".com")}>
                .com
              </Menu.Item>
              <Menu.Item onAction={() => setSelectedDomain(".org")}>
                .org
              </Menu.Item>
              <Menu.Item onAction={() => setSelectedDomain(".net")}>
                .net
              </Menu.Item>
              <Menu.Item onAction={() => setSelectedDomain(".io")}>
                .io
              </Menu.Item>
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
      </InputGroup.Addon>
    </InputGroup.Root>
  );
}

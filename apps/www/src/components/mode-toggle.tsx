"use client";

import { Button } from "@kanpeki/ui/button";
import { DropdownMenu } from "@kanpeki/ui/dropdown-menu";
import { Icons } from "@kanpeki/ui/icons";
import { PressResponder } from "@react-aria/interactions";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <PressResponder>
          <Button variant="ghost" size="icon" aria-label="Toggle theme">
            <Icons.Sun className="dark:-rotate-90 size-5 rotate-0 scale-100 transition dark:scale-0" />
            <Icons.Moon className="absolute size-5 rotate-90 scale-0 transition dark:rotate-0 dark:scale-100" />
          </Button>
        </PressResponder>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onSelect={() => setTheme("light")}>
          <Icons.Sun className="mr-2 size-4" />
          Light
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => setTheme("dark")}>
          <Icons.Moon className="mr-2 size-4" />
          Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => setTheme("system")}>
          <Icons.Laptop className="mr-2 size-4" />
          System
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

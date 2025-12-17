"use client";

import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "~/registry/ui/button";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function ModeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <Menu.Root>
      <Button aria-label="Toggle theme" size="icon" variant="ghost">
        <SunIcon className="size-4 rotate-0 scale-100 transition dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute size-4 rotate-90 scale-0 transition dark:rotate-0 dark:scale-100" />
      </Button>

      <Popover.Content className="min-w-32" placement="bottom end">
        <Menu.Content>
          <Menu.Item onAction={() => setTheme("light")}>
            <SunIcon className="size-4" />
            Light
          </Menu.Item>
          <Menu.Item onAction={() => setTheme("dark")}>
            <MoonIcon className="size-4" />
            Dark
          </Menu.Item>
          <Menu.Item onAction={() => setTheme("system")}>
            <LaptopIcon className="size-4" />
            System
          </Menu.Item>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

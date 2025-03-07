"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Collection } from "react-aria-components";
import type { NavItem, SidebarNavItem } from "~/config/docs";
import { Button } from "./ui/button";
import { Command } from "./ui/command";
import { Dialog } from "./ui/dialog";
import { DropdownMenu } from "./ui/dropdown-menu";
import { Icons } from "./ui/icons";
import { ScrollArea } from "./ui/scroll-area";
import { TextSearch } from "./ui/text-search";
import { TextField } from "./ui/textfield";

interface CommandMenuProps {
  mainNav: NavItem[];
  sidebarNav: SidebarNavItem[];
}

export function CommandMenu({ mainNav, sidebarNav }: CommandMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      "keydown",
      (e) => {
        if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
          if (
            (e.target instanceof HTMLElement && e.target.isContentEditable) ||
            e.target instanceof HTMLInputElement ||
            e.target instanceof HTMLTextAreaElement ||
            e.target instanceof HTMLSelectElement
          ) {
            return;
          }

          e.preventDefault();
          setIsOpen((open) => !open);
        }
      },
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, []);

  return (
    <Dialog.Root isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 font-normal text-muted-fg text-sm shadow-none sm:pr-12 md:w-40 lg:w-64"
        onPress={() => setIsOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Dialog.Overlay>
        <Dialog.Modal className="p-0">
          <Dialog.Content>
            <Command.Root>
              <TextSearch.Root className="flex-row items-center gap-2 border-b">
                <TextSearch.Icon className="ml-3" />
                <TextField.Input
                  autoFocus
                  className="py-4 text-sm"
                  placeholder="Type a command or search..."
                />
                <TextField.Input
                  className="py-4 sm:hidden"
                  placeholder="Type a command or search..."
                />
              </TextSearch.Root>
              <ScrollArea.Root>
                <ScrollArea.Viewport className="max-h-[18.75rem]">
                  <Command.List
                    renderEmptyState={() => (
                      <Command.Empty>No results found.</Command.Empty>
                    )}
                    className="px-2 **:data-[slot=command-item]:py-3"
                  >
                    <Command.Group>
                      <Command.Header>Links</Command.Header>
                      <Collection items={mainNav}>
                        {(navItem) => (
                          <Command.Item
                            id={navItem.href}
                            textValue={navItem.title}
                            isDisabled={navItem.disabled}
                            href={navItem.disabled ? undefined : navItem.href}
                          >
                            <Icons.File className="size-5" />
                            {navItem.title}
                          </Command.Item>
                        )}
                      </Collection>
                    </Command.Group>
                    <Collection items={sidebarNav}>
                      {(group) => (
                        <Command.Group id={group.title}>
                          <Command.Header>{group.title}</Command.Header>
                          {group.items?.map((navItem) => (
                            <Command.Item
                              key={navItem.href}
                              textValue={navItem.title}
                              isDisabled={navItem.disabled}
                              href={navItem.disabled ? undefined : navItem.href}
                            >
                              <Icons.Circle className="size-5" />
                              {navItem.title}
                            </Command.Item>
                          ))}
                        </Command.Group>
                      )}
                    </Collection>
                    <DropdownMenu.Separator />
                    <Command.Group>
                      <Command.Header>Theme</Command.Header>
                      <Command.Item
                        textValue="Light"
                        onAction={() => setTheme("light")}
                      >
                        <Icons.Sun className="size-5" />
                        Light
                      </Command.Item>
                      <Command.Item
                        textValue="Dark"
                        onAction={() => setTheme("dark")}
                      >
                        <Icons.Moon className="size-5" />
                        Dark
                      </Command.Item>
                      <Command.Item
                        textValue="System"
                        onAction={() => setTheme("system")}
                      >
                        <Icons.Laptop className="size-5" />
                        System
                      </Command.Item>
                    </Command.Group>
                  </Command.List>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical">
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </Command.Root>
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}

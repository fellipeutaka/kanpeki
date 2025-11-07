"use client";

import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SearchIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Autocomplete } from "~/registry/ui/autocomplete";
import { Dialog } from "~/registry/ui/dialog";
import { Keyboard } from "~/registry/ui/keyboard";
import { Menu } from "~/registry/ui/menu";
import { SearchField } from "~/registry/ui/search-field";

export function AutocompleteDialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setIsOpen((isOpen) => !isOpen);
        }
      },
      {
        signal: controller.signal,
      }
    );

    return () => controller.abort();
  }, []);

  return (
    <Dialog.Root isOpen={isOpen} onOpenChange={setIsOpen}>
      <p className="text-muted-foreground text-sm">
        Press{" "}
        <Keyboard>
          <span className="text-xs">⌘</span>J
        </Keyboard>
      </p>

      <Dialog.Overlay>
        <Dialog.Modal className="bg-popover p-0 text-popover-foreground">
          <Dialog.Content className="gap-0">
            <Autocomplete>
              <SearchField.Root aria-label="Search" autoFocus className="h-12">
                <SearchIcon />
                <SearchField.Input placeholder="Type a command or search..." />
                <SearchField.Button />
              </SearchField.Root>

              <Menu.Content
                renderEmptyState={() => (
                  <Menu.Empty>No results found.</Menu.Empty>
                )}
                variant="command"
              >
                <Menu.Group>
                  <Menu.Label>Suggestions</Menu.Label>

                  <Menu.Item textValue="Calendar">
                    <CalendarIcon />
                    <span>Calendar</span>
                  </Menu.Item>
                  <Menu.Item textValue="Search Emoji">
                    <SmileIcon />
                    <span>Search Emoji</span>
                  </Menu.Item>
                  <Menu.Item textValue="Calculator">
                    <CalculatorIcon />
                    <span>Calculator</span>
                  </Menu.Item>
                </Menu.Group>
                <Menu.Separator />
                <Menu.Group>
                  <Menu.Label>Settings</Menu.Label>

                  <Menu.Item textValue="Profile">
                    <UserIcon />
                    <span>Profile</span>
                    <Keyboard variant="menu">⌘P</Keyboard>
                  </Menu.Item>
                  <Menu.Item textValue="Billing">
                    <CreditCardIcon />
                    <span>Billing</span>
                    <Keyboard variant="menu">⌘B</Keyboard>
                  </Menu.Item>
                  <Menu.Item textValue="Settings">
                    <SettingsIcon />
                    <span>Settings</span>
                    <Keyboard variant="menu">⌘S</Keyboard>
                  </Menu.Item>
                </Menu.Group>
              </Menu.Content>
            </Autocomplete>
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}

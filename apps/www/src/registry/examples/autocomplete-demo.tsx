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
import { Autocomplete } from "~/registry/ui/autocomplete";
import { Card } from "~/registry/ui/card";
import { InputGroup } from "~/registry/ui/input-group";
import { Keyboard } from "~/registry/ui/keyboard";
import { Menu } from "~/registry/ui/menu";
import { SearchField } from "~/registry/ui/search-field";

export function AutocompleteDemo() {
  return (
    <Card.Root className="w-full">
      <Autocomplete>
        <Card.Header>
          <InputGroup.Root
            render={<SearchField.Root aria-label="Search" className="px-0" />}
          >
            <InputGroup.Addon>
              <SearchIcon />
            </InputGroup.Addon>
            <InputGroup.Input placeholder="Type a command or search..." />
            <InputGroup.Addon align="inline-end">
              <SearchField.Button />
            </InputGroup.Addon>
          </InputGroup.Root>
        </Card.Header>

        <Card.Content>
          <Menu.Content
            renderEmptyState={() => <Menu.Empty>No results found.</Menu.Empty>}
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
        </Card.Content>
      </Autocomplete>
    </Card.Root>
  );
}

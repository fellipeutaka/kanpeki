"use client";

import { Button } from "~/components/ui/button";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { Popover } from "~/components/ui/popover";

export default function DropdownMenuWithSubmenuDemo() {
  return (
    <DropdownMenu.Root>
      <Button variant="outline">Open</Button>

      <Popover.Content>
        <DropdownMenu.Content>
          <DropdownMenu.Header>My Account</DropdownMenu.Header>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item textValue="Profile">
              <DropdownMenu.Label>Profile</DropdownMenu.Label>
              <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item textValue="Billing">
              <DropdownMenu.Label>Billing</DropdownMenu.Label>
              <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item textValue="Settings">
              <DropdownMenu.Label>Settings</DropdownMenu.Label>
              <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
            <DropdownMenu.Item textValue="Keyboard shortcuts">
              <DropdownMenu.Label>Keyboard shortcuts</DropdownMenu.Label>
              <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Group>
            <DropdownMenu.Item>Team</DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.Item>Invite users</DropdownMenu.Item>

              <Popover.Content>
                <DropdownMenu.Content>
                  <DropdownMenu.Item>Email</DropdownMenu.Item>
                  <DropdownMenu.Item>Message</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>More...</DropdownMenu.Item>
                </DropdownMenu.Content>
              </Popover.Content>
            </DropdownMenu.Sub>
            <DropdownMenu.Item textValue="New Team">
              <DropdownMenu.Label>New Team</DropdownMenu.Label>
              <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>GitHub</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Item isDisabled>API</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item textValue="Log out">
            <DropdownMenu.Label>Log out</DropdownMenu.Label>
            <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </Popover.Content>
    </DropdownMenu.Root>
  );
}

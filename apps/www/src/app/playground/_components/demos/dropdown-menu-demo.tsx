"use client";

import {
  BadgeCheckIcon,
  BellIcon,
  ChevronsUpDownIcon,
  CreditCardIcon,
  LogOut,
  LogOutIcon,
  MoreHorizontalIcon,
  PencilIcon,
  Settings2Icon,
  ShareIcon,
  SparklesIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Avatar } from "~/registry/ui/avatar";
import { Button } from "~/registry/ui/button/button";
import { Keyboard } from "~/registry/ui/keyboard";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function DropdownMenuDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <MenuSimple />
      <MenuCheckboxes />
      <MenuRadioGroupDemo />
      <MenuWithAvatar />
      <MenuAvatarOnly />
      <MenuIconColor />
    </div>
  );
}

function MenuSimple() {
  return (
    <Menu.Root>
      <Button variant="outline">Open</Button>

      <Popover.Content placement="bottom start">
        <Menu.Content className="w-56">
          <Menu.Label>My Account</Menu.Label>
          <Menu.Group>
            <Menu.Item textValue="Profile">
              Profile
              <Keyboard variant="menu">⇧⌘P</Keyboard>
            </Menu.Item>
            <Menu.Item textValue="Billing">
              Billing
              <Keyboard variant="menu">⌘B</Keyboard>
            </Menu.Item>
            <Menu.Item textValue="Settings">
              Settings
              <Keyboard variant="menu">⌘S</Keyboard>
            </Menu.Item>
            <Menu.Item textValue="Keyboard shortcuts">
              Keyboard shortcuts
              <Keyboard variant="menu">⌘K</Keyboard>
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group>
            <Menu.Item textValue="Team">Team</Menu.Item>
            <Menu.Sub>
              <Menu.Item textValue="Invite users">Invite users</Menu.Item>
              <Popover.Content>
                <Menu.Content>
                  <Menu.Item textValue="Email">Email</Menu.Item>
                  <Menu.Item textValue="Message">Message</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item textValue="More">More...</Menu.Item>
                </Menu.Content>
              </Popover.Content>
            </Menu.Sub>
            <Menu.Item textValue="New Team">
              New Team
              <Keyboard variant="menu">⌘+T</Keyboard>
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Item>GitHub</Menu.Item>
          <Menu.Item>Support</Menu.Item>
          <Menu.Item isDisabled>API</Menu.Item>
          <Menu.Separator />
          <Menu.Item textValue="Log out">
            Log out
            <Keyboard variant="menu">⇧⌘Q</Keyboard>
          </Menu.Item>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

function MenuCheckboxes() {
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

function MenuRadioGroupDemo() {
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

function MenuWithAvatar() {
  return (
    <Menu.Root>
      <Button
        className="h-12 justify-start px-2 md:max-w-[200px]"
        variant="outline"
      >
        <Avatar.Root>
          <Avatar.Image alt="Shadcn" src="https://github.com/shadcn.png" />
          <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
        </Avatar.Root>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">shadcn</span>
          <span className="truncate text-muted-foreground text-xs">
            shadcn@example.com
          </span>
        </div>
        <ChevronsUpDownIcon className="ml-auto text-muted-foreground" />
      </Button>

      <Popover.Content placement="bottom start">
        <Menu.Content className="w-(--radix-dropdown-menu.-trigger-width) min-w-56">
          <Menu.Label className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar.Root>
                <Avatar.Image
                  alt="Shadcn"
                  src="https://github.com/shadcn.png"
                />
                <Avatar.Fallback className="rounded-lg">CN</Avatar.Fallback>
              </Avatar.Root>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">shadcn</span>
                <span className="truncate text-muted-foreground text-xs">
                  shadcn@example.com
                </span>
              </div>
            </div>
          </Menu.Label>
          <Menu.Separator />
          <Menu.Group>
            <Menu.Item>
              <SparklesIcon />
              Upgrade to Pro
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group>
            <Menu.Item>
              <BadgeCheckIcon />
              Account
            </Menu.Item>
            <Menu.Item>
              <CreditCardIcon />
              Billing
            </Menu.Item>
            <Menu.Item>
              <BellIcon />
              Notifications
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Item>
            <LogOut />
            Sign Out
          </Menu.Item>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

function MenuAvatarOnly() {
  return (
    <Menu.Root>
      <Button className="size-8 rounded-full border-none p-0" variant="outline">
        <Avatar.Root>
          <Avatar.Image alt="leerob" src="https://github.com/leerob.png" />
          <Avatar.Fallback className="rounded-lg">LR</Avatar.Fallback>
        </Avatar.Root>
      </Button>

      <Popover.Content placement="bottom start">
        <Menu.Content className="w-(--radix-dropdown-menu.-trigger-width) min-w-56">
          <Menu.Label className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar.Root>
                <Avatar.Image
                  alt="leerob"
                  src="https://github.com/leerob.png"
                />
                <Avatar.Fallback className="rounded-lg">LR</Avatar.Fallback>
              </Avatar.Root>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">leerob</span>
                <span className="truncate text-muted-foreground text-xs">
                  leerob@example.com
                </span>
              </div>
            </div>
          </Menu.Label>
          <Menu.Separator />
          <Menu.Group>
            <Menu.Item>
              <SparklesIcon />
              Upgrade to Pro
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group>
            <Menu.Item>
              <BadgeCheckIcon />
              Account
            </Menu.Item>
            <Menu.Item>
              <CreditCardIcon />
              Billing
            </Menu.Item>
            <Menu.Item>
              <BellIcon />
              Notifications
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Item>
            <LogOut />
            Sign Out
          </Menu.Item>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

function MenuIconColor() {
  return (
    <Menu.Root>
      <Button size="icon" variant="ghost">
        <MoreHorizontalIcon />
        <span className="sr-only">Toggle menu.</span>
      </Button>

      <Popover.Content placement="bottom start">
        <Menu.Content>
          <Menu.Group className="*:data-[slot=dropdown-menu.-item]:[&>svg]:text-muted-foreground">
            <Menu.Item>
              <PencilIcon />
              Edit
            </Menu.Item>
            <Menu.Item>
              <ShareIcon />
              Share
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item variant="destructive">
              <TrashIcon />
              Delete
            </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

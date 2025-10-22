"use client";

import { Button } from "~/components/ui/button";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { Popover } from "~/components/ui/popover";

const roles = [
  { description: "Has full access to all resources", id: 1, name: "Admin" },
  {
    description: "Can edit content but has limited access to settings",
    id: 2,
    name: "Editor",
  },
  {
    description: "Can view content but cannot make changes",
    id: 3,
    name: "Viewer",
  },
  {
    description: "Can contribute content for review",
    id: 4,
    name: "Contributor",
  },
  {
    description: "Limited access, mostly for viewing purposes",
    id: 5,
    name: "Guest",
  },
];

export default function DropdownMenuWithDetailsDemo() {
  return (
    <DropdownMenu.Root>
      <Button variant="outline">Open</Button>
      <Popover.Content>
        <DropdownMenu.Content items={roles}>
          {(item) => (
            <DropdownMenu.Item id={item.id} textValue={item.name}>
              <DropdownMenu.ItemDetails>
                <DropdownMenu.Label className="font-medium lg:text-sm">
                  {item.name}
                </DropdownMenu.Label>
                <DropdownMenu.Description className="text-muted-fg text-xs">
                  {item.description}
                </DropdownMenu.Description>
              </DropdownMenu.ItemDetails>
            </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </Popover.Content>
    </DropdownMenu.Root>
  );
}

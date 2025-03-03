"use client";

import { Text } from "react-aria-components";
import { ListBox } from "~/components/ui/list-box";

const roles = [
  { id: 1, name: "Admin", description: "Has full access to all resources" },
  {
    id: 2,
    name: "Editor",
    description: "Can edit content but has limited access to settings",
  },
  {
    id: 3,
    name: "Viewer",
    description: "Can view content but cannot make changes",
  },
  {
    id: 4,
    name: "Contributor",
    description: "Can contribute content for review",
  },
  {
    id: 5,
    name: "Guest",
    description: "Limited access, mostly for viewing purposes",
  },
];

export default function ListBoxItemDetails() {
  return (
    <ListBox.Root selectionMode="single" items={roles} aria-label="Bands">
      {(item) => (
        <ListBox.Item id={item.id}>
          <div className="flex flex-col gap-y-1">
            <Text slot="label" className="font-medium lg:text-sm">
              {item.name}
            </Text>
            <Text slot="description" className="text-muted-fg text-xs">
              {item.description}
            </Text>
          </div>
        </ListBox.Item>
      )}
    </ListBox.Root>
  );
}

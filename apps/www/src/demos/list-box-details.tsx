"use client";

import { Text } from "react-aria-components";
import { ListBox } from "~/components/ui/list-box";

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

export default function ListBoxItemDetails() {
  return (
    <ListBox.Root aria-label="Bands" items={roles} selectionMode="single">
      {(item) => (
        <ListBox.Item id={item.id}>
          <div className="flex flex-col gap-y-1">
            <Text className="font-medium lg:text-sm" slot="label">
              {item.name}
            </Text>
            <Text className="text-muted-fg text-xs" slot="description">
              {item.description}
            </Text>
          </div>
        </ListBox.Item>
      )}
    </ListBox.Root>
  );
}

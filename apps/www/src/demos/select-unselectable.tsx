"use client";

import { useState } from "react";
import type { Key } from "react-aria-components";
import { Icons } from "~/components/ui/icons";
import { Select } from "~/components/ui/select";

const fruits = [
  {
    id: 1,
    name: "Apple",
  },
  {
    id: 2,
    name: "Banana",
  },
  {
    id: 3,
    name: "Blueberry",
  },
  {
    id: 4,
    name: "Orange",
  },
  {
    id: 5,
    name: "Strawberry",
  },
  {
    id: 6,
    name: "Grapes",
  },
  {
    id: 7,
    name: "Mango",
  },
];

export default function SelectUnselectableDemo() {
  const [fruit, setFruit] = useState<Key | null>(null);

  function handleSelectionChange(key: Key | null) {
    setFruit(key === fruit ? null : key);
  }

  return (
    <Select.Root
      aria-label="Fruits"
      onChange={handleSelectionChange}
      value={fruit}
    >
      <Select.Trigger className="w-44" />

      <Select.Popover>
        <Select.Content items={fruits}>
          {(item) => (
            <Select.Item
              className="group flex items-center justify-between"
              id={item.id}
              textValue={item.name}
            >
              {item.name}
              <Icons.Check className="size-0 opacity-0 group-selected:size-4 group-selected:opacity-100" />
            </Select.Item>
          )}
        </Select.Content>
      </Select.Popover>
    </Select.Root>
  );
}

"use client";

import { ListBox } from "~/components/ui/list-box";

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
    name: "Orange",
  },
  {
    id: 4,
    name: "Strawberry",
  },
  {
    id: 5,
    name: "Grapes",
  },
  {
    id: 6,
    name: "Mango",
  },
  {
    id: 7,
    name: "Pineapple",
  },
];

export default function ListBoxMultiple() {
  return (
    <ListBox.Root items={fruits} selectionMode="multiple" aria-label="Bands">
      {(item) => <ListBox.Item id={item.id}>{item.name}</ListBox.Item>}
    </ListBox.Root>
  );
}

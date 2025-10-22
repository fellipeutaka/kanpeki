"use client";

import { ListBox } from "~/components/ui/list-box";

const rockPopBands = [
  { id: "1", name: "Nirvana" },
  { id: "2", name: "Radiohead" },
  { id: "3", name: "Foo Fighters" },
  { id: "4", name: "Arctic Monkeys" },
  { id: "5", name: "The Strokes" },
];

export default function ListBoxDemo() {
  return (
    <ListBox.Root
      aria-label="Bands"
      items={rockPopBands}
      selectionMode="single"
    >
      {(item) => <ListBox.Item id={item.id}>{item.name}</ListBox.Item>}
    </ListBox.Root>
  );
}

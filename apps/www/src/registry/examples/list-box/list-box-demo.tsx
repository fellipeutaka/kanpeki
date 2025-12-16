"use client";

import { Listbox } from "~/registry/ui/list-box";

const rockPopBands = [
  { id: "1", name: "Nirvana" },
  { id: "2", name: "Radiohead" },
  { id: "3", name: "Foo Fighters" },
  { id: "4", name: "Arctic Monkeys" },
  { id: "5", name: "The Strokes" },
];

export function ListBoxDemo() {
  return (
    <Listbox.Root
      aria-label="Bands"
      items={rockPopBands}
      selectionMode="single"
    >
      {(item) => <Listbox.Item id={item.id}>{item.name}</Listbox.Item>}
    </Listbox.Root>
  );
}

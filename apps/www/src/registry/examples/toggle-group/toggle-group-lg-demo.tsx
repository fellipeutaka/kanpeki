import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup } from "~/registry/ui/toggle-group";

export function ToggleGroupLgDemo() {
  return (
    <ToggleGroup.Root selectionMode="multiple" size="lg">
      <ToggleGroup.Item aria-label="Toggle bold" id="bold">
        <BoldIcon className="size-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle italic" id="italic">
        <ItalicIcon className="size-4" />
      </ToggleGroup.Item>
      <ToggleGroup.Item aria-label="Toggle underline" id="underline">
        <UnderlineIcon className="size-4" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}

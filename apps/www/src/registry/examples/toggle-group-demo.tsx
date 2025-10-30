import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { ToggleGroup } from "~/registry/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <ToggleGroup.Root selectionMode="multiple">
        <ToggleGroup.Item aria-label="Toggle bold" id="bold">
          <BoldIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle italic" id="italic">
          <ItalicIcon />
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle strikethrough" id="strikethrough">
          <UnderlineIcon />
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <ToggleGroup.Root
        className="*:data-[slot=toggle-group-item]:w-20"
        defaultSelectedKeys={["all"]}
        selectionMode="single"
        variant="outline"
      >
        <ToggleGroup.Item aria-label="Toggle all" id="all">
          All
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle missed" id="missed">
          Missed
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <ToggleGroup.Root
        className="*:data-[slot=toggle-group-item]:px-3"
        defaultSelectedKeys={["last-24-hours"]}
        selectionMode="single"
        size="sm"
        variant="outline"
      >
        <ToggleGroup.Item aria-label="Toggle last 24 hours" id="last-24-hours">
          Last 24 hours
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle last 7 days" id="last-7-days">
          Last 7 days
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <ToggleGroup.Root
        className="*:data-[slot=toggle-group-item]:px-3"
        defaultSelectedKeys={["last-24-hours"]}
        selectionMode="single"
        size="sm"
      >
        <ToggleGroup.Item aria-label="Toggle last 24 hours" id="last-24-hours">
          Last 24 hours
        </ToggleGroup.Item>
        <ToggleGroup.Item aria-label="Toggle last 7 days" id="last-7-days">
          Last 7 days
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}

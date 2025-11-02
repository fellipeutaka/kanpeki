import { InfoIcon } from "lucide-react";

import { Button } from "~/registry/ui/button/button";
import { Tooltip } from "~/registry/ui/tooltip";

const positions = ["top", "right", "bottom", "left"] as const;

export function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Tooltip.Root>
        <Button variant="outline">Hover</Button>
        <Tooltip.Content offset={8}>
          <p>Add to library</p>

          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
      <div className="flex gap-2">
        {positions.map((side) => (
          <Tooltip.Root key={side}>
            <Button className="capitalize" variant="outline">
              {side}
            </Button>
            <Tooltip.Content offset={8} placement={side}>
              <p>Add to library</p>

              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Root>
        ))}
      </div>
      <Tooltip.Root>
        <Button size="icon" variant="ghost">
          <InfoIcon />
          <span className="sr-only">Info</span>
        </Button>
        <Tooltip.Content offset={8}>
          To learn more about how this works, check out the docs. If you have
          any questions, please reach out to us.
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </div>
  );
}

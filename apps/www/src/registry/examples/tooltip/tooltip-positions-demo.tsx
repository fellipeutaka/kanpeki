import { Button } from "~/registry/ui/button/button";
import { Tooltip } from "~/registry/ui/tooltip";

const positions = ["top", "right", "left", "bottom"] as const;

export function TooltipPositionsDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {positions.map((side) => (
        <Tooltip.Root key={side}>
          <Button className="capitalize" variant="outline">
            {side}
          </Button>
          <Tooltip.Content placement={side}>
            <p>Add to library</p>

            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Root>
      ))}
    </div>
  );
}

import { Button } from "~/registry/ui/button/button";
import { Tooltip } from "~/registry/ui/tooltip";

export function TooltipDemo() {
  return (
    <Tooltip.Root>
      <Button variant="outline">Hover</Button>
      <Tooltip.Content>
        <p>Add to library</p>

        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

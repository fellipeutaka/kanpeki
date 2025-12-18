import { InfoIcon } from "lucide-react";
import { Button } from "~/registry/ui/button/button";
import { Tooltip } from "~/registry/ui/tooltip";

export function TooltipWithArrowDemo() {
  return (
    <Tooltip.Root>
      <Button size="icon" variant="ghost">
        <InfoIcon />
        <span className="sr-only">Info</span>
      </Button>
      <Tooltip.Content className="max-w-80 text-pretty text-center">
        To learn more about how this works, check out the docs. If you have any
        questions, please reach out to us.
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

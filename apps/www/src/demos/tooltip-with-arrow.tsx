import { Button } from "~/components/ui/button";
import { Tooltip } from "~/components/ui/tooltip";

export default function TooltipWithArrowDemo() {
  return (
    <Tooltip.Root delay={700}>
      <Button variant="outline">Hover</Button>
      <Tooltip.Content>
        <p>Add to library</p>

        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

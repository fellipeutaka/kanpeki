import { PlusIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";

export function ButtonGroupSplitDemo() {
  return (
    <ButtonGroup.Root>
      <Button variant="secondary">Button</Button>
      <ButtonGroup.Separator />
      <Button size="icon" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup.Root>
  );
}

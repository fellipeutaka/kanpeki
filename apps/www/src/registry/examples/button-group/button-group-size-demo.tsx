import { PlusIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";

export function ButtonGroupSizeDemo() {
  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup.Root>
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="sm" variant="outline">
          Button
        </Button>
        <Button size="sm" variant="outline">
          Group
        </Button>
        <Button size="icon-sm" variant="outline">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button variant="outline">Default</Button>
        <Button variant="outline">Button</Button>
        <Button variant="outline">Group</Button>
        <Button size="icon" variant="outline">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button size="lg" variant="outline">
          Large
        </Button>
        <Button size="lg" variant="outline">
          Button
        </Button>
        <Button size="lg" variant="outline">
          Group
        </Button>
        <Button size="icon-lg" variant="outline">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
    </div>
  );
}

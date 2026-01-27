import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";

export function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup.Root>
      <Button size="sm" variant="secondary">
        Copy
      </Button>
      <ButtonGroup.Separator />
      <Button size="sm" variant="secondary">
        Paste
      </Button>
    </ButtonGroup.Root>
  );
}

import { AudioLinesIcon, PlusIcon } from "lucide-react";
import { Button, RACButton } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { InputGroup } from "~/registry/ui/input-group";
import { Tooltip } from "~/registry/ui/tooltip";

export function ButtonGroupNestedDemo() {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button size="icon" variant="outline">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <InputGroup.Root>
          <InputGroup.Input placeholder="Send a message..." />
          <Tooltip.Root>
            <RACButton>
              <InputGroup.Addon align="inline-end">
                <AudioLinesIcon />
              </InputGroup.Addon>
            </RACButton>
            <Tooltip.Content>
              Voice Mode
              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Root>
        </InputGroup.Root>
      </ButtonGroup.Root>
    </ButtonGroup.Root>
  );
}

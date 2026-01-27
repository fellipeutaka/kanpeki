import { BotIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { Field } from "~/registry/ui/field";
import { Popover } from "~/registry/ui/popover";
import { Textarea } from "~/registry/ui/textarea";

export function ButtonGroupPopoverDemo() {
  return (
    <ButtonGroup.Root>
      <Button variant="outline">
        <BotIcon /> Copilot
      </Button>
      <Popover.Root>
        <Button aria-label="Open Popover" size="icon" variant="outline">
          <ChevronDownIcon />
        </Button>
        <Popover.Content className="rounded-xl text-sm" placement="bottom end">
          <div className="grid gap-2">
            <div className="grid gap-1.5">
              <h4 className="font-medium leading-none">
                Start a new task with Copilot
              </h4>
              <p className="text-muted-foreground text-sm">
                Describe your task in natural language.
              </p>
            </div>
            <Field.Root>
              <Field.Label className="sr-only" htmlFor="task">
                Task Description
              </Field.Label>
              <Textarea
                className="resize-none"
                id="task"
                placeholder="I need to..."
              />
              <Field.Description>
                Copilot will open a pull request for review.
              </Field.Description>
            </Field.Root>
          </div>
        </Popover.Content>
      </Popover.Root>
    </ButtonGroup.Root>
  );
}

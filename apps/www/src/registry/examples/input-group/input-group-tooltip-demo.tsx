import { HelpCircleIcon, InfoIcon } from "lucide-react";
import { InputGroup } from "~/registry/ui/input-group";
import { Tooltip } from "~/registry/ui/tooltip";

export function InputGroupTooltipDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter password" type="password" />
        <InputGroup.Addon align="inline-end">
          <Tooltip.Root>
            <InputGroup.Button aria-label="Info" size="icon-xs" variant="ghost">
              <InfoIcon />
            </InputGroup.Button>
            <Tooltip.Content>
              <p>Password must be at least 8 characters</p>

              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Root>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Your email address" />
        <InputGroup.Addon align="inline-end">
          <Tooltip.Root>
            <InputGroup.Button aria-label="Help" size="icon-xs" variant="ghost">
              <HelpCircleIcon />
            </InputGroup.Button>
            <Tooltip.Content>
              <p>We&apos;ll use this to send you notifications</p>

              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Root>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter API key" />
        <Tooltip.Root>
          <InputGroup.Addon>
            <InputGroup.Button aria-label="Help" size="icon-xs" variant="ghost">
              <HelpCircleIcon />
            </InputGroup.Button>
          </InputGroup.Addon>
          <Tooltip.Content placement="left">
            <p>Click for help with API keys</p>

            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Root>
      </InputGroup.Root>
    </div>
  );
}

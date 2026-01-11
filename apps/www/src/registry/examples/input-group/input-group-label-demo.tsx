import { InfoIcon } from "lucide-react";
import { InputGroup } from "~/registry/ui/input-group";
import { Label } from "~/registry/ui/label";
import { Tooltip } from "~/registry/ui/tooltip";

export function InputGroupLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup.Root>
        <InputGroup.Input id="email" placeholder="shadcn" />
        <InputGroup.Addon>
          <Label htmlFor="email">@</Label>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroup.Addon align="block-start">
          <Label className="text-foreground" htmlFor="email-2">
            Email
          </Label>
          <Tooltip.Root>
            <InputGroup.Button
              aria-label="Help"
              className="ml-auto rounded-full"
              size="icon-xs"
              variant="ghost"
            >
              <InfoIcon />
            </InputGroup.Button>

            <Tooltip.Content>
              <p>We&apos;ll use this to send you notifications</p>

              <Tooltip.Arrow />
            </Tooltip.Content>
          </Tooltip.Root>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  );
}

import { CalendarIcon } from "lucide-react";
import { AvatarDemo } from "~/registry/examples/avatar/avatar-demo";
import { RACButton } from "~/registry/ui/button/button";
import { Tooltip } from "~/registry/ui/tooltip";

export function TooltipHoverCardDemo() {
  return (
    <Tooltip.Root>
      <RACButton>
        <AvatarDemo />
      </RACButton>

      <Tooltip.Content className="max-w-80 p-4">
        <div className="flex justify-between gap-4">
          <AvatarDemo />
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">@fellipeutaka</h4>
            <p className="text-sm">
              Software Engineer - loves building awesome user interfaces.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <CalendarIcon className="size-4 opacity-70" />
              <span className="text-muted-fg text-xs">
                Joined December 2025
              </span>
            </div>
          </div>
        </div>
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

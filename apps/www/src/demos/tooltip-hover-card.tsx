import { Avatar } from "~/components/ui/avatar";
import { ButtonPrimitive } from "~/components/ui/button";
import { Icons } from "~/components/ui/icons";
import { Tooltip } from "~/components/ui/tooltip";

function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Image
        alt="@fellipeutaka"
        src="https://github.com/fellipeutaka.png"
      />
      <Avatar.Fallback>FU</Avatar.Fallback>
      <Avatar.Placeholder>
        <svg
          aria-hidden="true"
          className="size-6"
          fill="none"
          height={24}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
          <circle cx={12} cy={7} r={4} />
        </svg>
      </Avatar.Placeholder>
    </Avatar.Root>
  );
}

export default function TooltipHoverCardDemo() {
  return (
    <Tooltip.Root delay={500}>
      <ButtonPrimitive>
        <AvatarDemo />
      </ButtonPrimitive>

      <Tooltip.Content className="max-w-80 p-4">
        <div className="flex justify-between gap-4">
          <AvatarDemo />
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">@fellipeutaka</h4>
            <p className="text-sm">
              Software Engineer - loves building awesome user interfaces.
            </p>
            <div className="flex items-center pt-2">
              <Icons.Calendar className="mr-2 size-4 opacity-70" />
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

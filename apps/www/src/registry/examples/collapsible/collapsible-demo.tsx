import { ChevronsUpDownIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { Collapsible } from "~/registry/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <Collapsible.Root className="flex w-full flex-col gap-2 md:w-87.5">
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="line-clamp-1 font-semibold text-sm">
          @peduarte starred 3 repositories
        </h4>
        <Button size="sm" slot="trigger" variant="ghost">
          <ChevronsUpDownIcon className="size-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">
        @radix-ui/primitives
      </div>
      <Collapsible.Content className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 font-mono shadow-xs">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono shadow-xs">
          @stitches/react
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

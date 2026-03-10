import { BellIcon, RefreshCcwIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { Empty } from "~/registry/ui/empty";

export function EmptyBackgroundDemo() {
  return (
    <Empty.Root className="h-full bg-muted/30">
      <Empty.Header>
        <Empty.Media variant="icon">
          <BellIcon />
        </Empty.Media>
        <Empty.Title>No Notifications</Empty.Title>
        <Empty.Description className="max-w-xs text-pretty">
          You&apos;re all caught up. New notifications will appear here.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button variant="outline">
          <RefreshCcwIcon data-icon="inline-start" />
          Refresh
        </Button>
      </Empty.Content>
    </Empty.Root>
  );
}

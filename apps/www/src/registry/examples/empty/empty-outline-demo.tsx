import { CloudIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { Empty } from "~/registry/ui/empty";

export function EmptyOutlineDemo() {
  return (
    <Empty.Root className="border border-dashed">
      <Empty.Header>
        <Empty.Media variant="icon">
          <CloudIcon />
        </Empty.Media>
        <Empty.Title>Cloud Storage Empty.</Empty.Title>
        <Empty.Description>
          Upload files to your cloud storage to access them anywhere.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm" variant="outline">
          Upload Files
        </Button>
      </Empty.Content>
    </Empty.Root>
  );
}

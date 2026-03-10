import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { Empty } from "~/registry/ui/empty";

export function EmptyDemo() {
  return (
    <Empty.Root>
      <Empty.Header>
        <Empty.Media variant="icon">
          <FolderCodeIcon />
        </Empty.Media>
        <Empty.Title>No Projects Yet</Empty.Title>
        <Empty.Description>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content className="flex-row justify-center gap-2">
        <Button>Create Project</Button>
        <Button variant="outline">Import Project</Button>
      </Empty.Content>
      <Button className="text-muted-foreground" size="sm" variant="link">
        Learn More <ArrowUpRightIcon />
      </Button>
    </Empty.Root>
  );
}

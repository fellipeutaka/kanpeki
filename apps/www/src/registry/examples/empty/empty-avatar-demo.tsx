import { Avatar } from "~/registry/ui/avatar";
import { Button } from "~/registry/ui/button";
import { Empty } from "~/registry/ui/empty";

export function EmptyAvatarDemo() {
  return (
    <Empty.Root>
      <Empty.Header>
        <Empty.Media variant="default">
          <Avatar.Root className="size-12">
            <Avatar.Image
              className="grayscale"
              src="https://github.com/fellipeutaka.png"
            />
            <Avatar.Fallback>FU</Avatar.Fallback>
          </Avatar.Root>
        </Empty.Media>
        <Empty.Title>User Offline</Empty.Title>
        <Empty.Description>
          This user is currently offline. You can leave a message to notify them
          or try again later.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">Leave Message</Button>
      </Empty.Content>
    </Empty.Root>
  );
}

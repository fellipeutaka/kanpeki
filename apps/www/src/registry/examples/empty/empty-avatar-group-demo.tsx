import { PlusIcon } from "lucide-react";
import { Avatar } from "~/registry/ui/avatar";
import { Button } from "~/registry/ui/button";
import { Empty } from "~/registry/ui/empty";

const users = [
  {
    id: "fellipeutaka",
    fallback: "FU",
  },
  {
    id: "victormicco",
    fallback: "VM",
  },
  {
    id: "yKriguer",
    fallback: "KR",
  },
  {
    id: "HenriqueBragaMoreira",
    fallback: "HB",
  },
  {
    id: "MatheusLukas",
    fallback: "ML",
  },
] as const satisfies {
  id: string;
  fallback: string;
}[];

export function EmptyAvatarGroupDemo() {
  return (
    <Empty.Root>
      <Empty.Header>
        <Empty.Media>
          <div className="flex -space-x-2 *:data-[slot=avatar-root]:size-12 *:data-[slot=avatar-root]:ring-2 *:data-[slot=avatar-root]:ring-background *:data-[slot=avatar-root]:grayscale">
            {users.map((user) => (
              <Avatar.Root key={user.id}>
                <Avatar.Image
                  alt={`@${user.id}`}
                  src={`https://github.com/${user.id}.png`}
                />
                <Avatar.Fallback>{user.fallback}</Avatar.Fallback>
              </Avatar.Root>
            ))}
          </div>
        </Empty.Media>
        <Empty.Title>No Team Members</Empty.Title>
        <Empty.Description>
          Invite your team to collaborate on this project.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </Empty.Content>
    </Empty.Root>
  );
}

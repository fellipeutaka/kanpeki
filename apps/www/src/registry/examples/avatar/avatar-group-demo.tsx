import { UserIcon } from "lucide-react";
import { Avatar } from "~/registry/ui/avatar";

const avatars = [
  {
    id: "fellipeutaka",
    fallback: "FU",
  },
  {
    id: "shadcn",
    fallback: "SN",
  },
  {
    id: "devongovett",
    fallback: "DG",
  },
  {
    id: "benoitgrelard",
    fallback: "BG",
  },
  {
    id: "adamwathan",
    fallback: "AW",
  },
] as const satisfies {
  id: string;
  fallback: string;
}[];

export function AvatarGroupDemo() {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar) => (
        <Avatar.Root className="ring ring-background" key={avatar.id}>
          <Avatar.Image
            alt={`@${avatar.id}`}
            src={`https://github.com/${avatar.id}.png`}
          />
          <Avatar.Fallback>{avatar.fallback}</Avatar.Fallback>
          <Avatar.Placeholder>
            <UserIcon className="size-6" />
          </Avatar.Placeholder>
        </Avatar.Root>
      ))}
      <Avatar.Root>
        <Avatar.Placeholder className="animate-none text-muted-foreground">
          +3
        </Avatar.Placeholder>
      </Avatar.Root>
    </div>
  );
}

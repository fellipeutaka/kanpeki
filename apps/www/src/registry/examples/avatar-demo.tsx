import { UserIcon } from "lucide-react";
import { Avatar } from "~/registry/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Image
        alt="@fellipeutaka"
        src="https://github.com/fellipeutaka.png"
      />
      <Avatar.Placeholder>
        <UserIcon />
      </Avatar.Placeholder>
      <Avatar.Fallback>FU</Avatar.Fallback>
    </Avatar.Root>
  );
}

import { Avatar } from "@kanpeki/ui/avatar";
import { Icons } from "@kanpeki/ui/icons";

export default function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="https://github.com/fellipeutaka.png"
        alt="@fellipeutaka"
      />
      <Avatar.Fallback>FU</Avatar.Fallback>
      <Avatar.Placeholder>
        <Icons.User className="size-6" />
      </Avatar.Placeholder>
    </Avatar.Root>
  );
}

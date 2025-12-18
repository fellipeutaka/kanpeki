import { UserIcon } from "lucide-react";
import { Avatar } from "~/registry/ui/avatar";

const avatars = [
  {
    src: "https://github.com/fellipeutaka.png",
    alt: "@fellipeutaka",
    fallback: "FU",
  },
  {
    src: "https://github.com/shadcn.png",
    alt: "@shadcn",
    fallback: "SN",
  },
  {
    src: "https://github.com/devongovett.png",
    alt: "@devongovett",
    fallback: "DG",
  },
  {
    src: "https://github.com/benoitgrelard.png",
    alt: "@benoitgrelard",
    fallback: "BG",
  },
  {
    src: "https://github.com/adamwathan.png",
    alt: "@adamwathan",
    fallback: "AW",
  },
] as const satisfies {
  src: string;
  alt: string;
  fallback: string;
}[];

export function AvatarGroupDemo() {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar) => (
        <Avatar.Root className="ring ring-background" key={avatar.alt}>
          <Avatar.Image alt={avatar.alt} src={avatar.src} />
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

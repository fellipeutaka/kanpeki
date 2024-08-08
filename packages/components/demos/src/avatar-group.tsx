import { Avatar } from "@kanpeki/ui/avatar";
import { Icons } from "@kanpeki/ui/icons";

const avatars = [
  {
    src: "https://github.com/fellipeutaka.png",
    alt: "@fellipeutaka",
    fallback: "FU",
  },
  {
    src: "https://github.com/victormicco.png",
    alt: "@victormicco",
    fallback: "VM",
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

export default function AvatarGroupDemo() {
  return (
    <div className="-space-x-2 flex">
      {avatars.map((avatar) => (
        <Avatar.Root key={avatar.alt}>
          <Avatar.Image src={avatar.src} alt={avatar.alt} />
          <Avatar.Fallback>{avatar.fallback}</Avatar.Fallback>
          <Avatar.Placeholder>
            <Icons.User className="size-6" />
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

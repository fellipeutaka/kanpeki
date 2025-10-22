import { Avatar } from "~/components/ui/avatar";
import { Icons } from "~/components/ui/icons";

const avatars = [
  {
    alt: "@fellipeutaka",
    fallback: "FU",
    src: "https://github.com/fellipeutaka.png",
  },
  {
    alt: "@victormicco",
    fallback: "VM",
    src: "https://github.com/victormicco.png",
  },
  {
    alt: "@shadcn",
    fallback: "SN",
    src: "https://github.com/shadcn.png",
  },
  {
    alt: "@devongovett",
    fallback: "DG",
    src: "https://github.com/devongovett.png",
  },
  {
    alt: "@benoitgrelard",
    fallback: "BG",
    src: "https://github.com/benoitgrelard.png",
  },
  {
    alt: "@adamwathan",
    fallback: "AW",
    src: "https://github.com/adamwathan.png",
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
        <Avatar.Root className="outline outline-border" key={avatar.alt}>
          <Avatar.Image alt={avatar.alt} src={avatar.src} />
          <Avatar.Fallback>{avatar.fallback}</Avatar.Fallback>
          <Avatar.Placeholder>
            <Icons.User className="size-6" />
          </Avatar.Placeholder>
        </Avatar.Root>
      ))}
      <Avatar.Root>
        <Avatar.Placeholder className="animate-none text-muted-fg">
          +3
        </Avatar.Placeholder>
      </Avatar.Root>
    </div>
  );
}

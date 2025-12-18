import { Avatar } from "~/registry/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-4">
      <Avatar.Root>
        <Avatar.Fallback>CN</Avatar.Fallback>

        <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="size-12">
        <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root className="rounded-lg">
        <Avatar.Image
          alt="@evilrabbit"
          src="https://github.com/evilrabbit.png"
        />
        <Avatar.Fallback>ER</Avatar.Fallback>
      </Avatar.Root>
      <div className="flex -space-x-2 *:data-[slot=avatar.-root]:ring-2 *:data-[slot=avatar.-root]:ring-background *:data-[slot=avatar.-root]:grayscale">
        <Avatar.Root>
          <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image alt="@leerob" src="https://github.com/leerob.png" />
          <Avatar.Fallback>LR</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <Avatar.Fallback>ER</Avatar.Fallback>
        </Avatar.Root>
      </div>
      <div className="flex -space-x-2 *:data-[slot=avatar.-root]:size-12 *:data-[slot=avatar.-root]:ring-2 *:data-[slot=avatar.-root]:ring-background *:data-[slot=avatar.-root]:grayscale">
        <Avatar.Root>
          <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image alt="@leerob" src="https://github.com/leerob.png" />
          <Avatar.Fallback>LR</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <Avatar.Fallback>ER</Avatar.Fallback>
        </Avatar.Root>
      </div>
      <div className="flex -space-x-2 hover:space-x-1 *:data-[slot=avatar.-root]:size-12 *:data-[slot=avatar.-root]:ring-2 *:data-[slot=avatar.-root]:ring-background *:data-[slot=avatar.-root]:grayscale *:data-[slot=avatar.-root]:transition-all *:data-[slot=avatar.-root]:duration-300 *:data-[slot=avatar.-root]:ease-in-out">
        <Avatar.Root>
          <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image alt="@leerob" src="https://github.com/leerob.png" />
          <Avatar.Fallback>LR</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Image
            alt="@evilrabbit"
            src="https://github.com/evilrabbit.png"
          />
          <Avatar.Fallback>ER</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </div>
  );
}

import Image from "next/image";

import { AspectRatio } from "~/registry/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="grid w-full max-w-sm items-start gap-4">
      <AspectRatio className="rounded-lg bg-muted" ratio={16 / 9}>
        <Image
          alt="Photo by Drew Beamer"
          className="h-full w-full select-none rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
          draggable={false}
          fill
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        />
      </AspectRatio>
      <AspectRatio className="rounded-lg bg-muted" ratio={1 / 1}>
        <Image
          alt="Photo by Drew Beamer"
          className="h-full w-full select-none rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
          draggable={false}
          fill
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        />
      </AspectRatio>
    </div>
  );
}

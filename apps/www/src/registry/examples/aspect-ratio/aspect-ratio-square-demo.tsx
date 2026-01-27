import Image from "next/image";
import { AspectRatio } from "~/registry/ui/aspect-ratio";

export function AspectRatioSquareDemo() {
  return (
    <div className="w-full max-w-48">
      <AspectRatio className="rounded-lg bg-muted" ratio={1 / 1}>
        <Image
          alt="Photo"
          className="rounded-lg object-cover grayscale dark:brightness-20"
          fill
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        />
      </AspectRatio>
    </div>
  );
}

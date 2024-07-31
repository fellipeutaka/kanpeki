import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@kanpeki/ui/scroll-area";
import { cn } from "@kanpeki/utils/cn";

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <ScrollAreaRoot className="my-6 rounded-md">
      <ScrollAreaViewport>
        <table className={cn("w-full", className)} {...props} />
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    </ScrollAreaRoot>
  );
}

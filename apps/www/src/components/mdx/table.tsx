"use client";

import { cn } from "~/utils/cn";
import { ScrollArea } from "../ui/scroll-area";

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <ScrollArea.Root className="my-6 rounded-md">
      <ScrollArea.Viewport>
        <table className={cn("w-full", className)} {...props} />
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

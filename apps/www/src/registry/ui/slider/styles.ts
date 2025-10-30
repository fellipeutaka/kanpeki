import { cva } from "~/registry/lib/cva";

export const SliderStyles = {
  Header: cva({
    base: ["flex items-center justify-between gap-2"],
  }),
  Output: cva({
    base: ["text-muted-foreground text-sm tabular-nums"],
  }),
  Range: cva({
    base: [
      "rounded-full bg-primary group-disabled/track:bg-background-disabled",
      "group-orientation-horizontal/top-0 pointer-events-none absolute group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full group-orientation-vertical/track:w-full",
    ],
  }),
  Root: cva({
    base: [
      "flex flex-col gap-2",
      "orientation-vertical:h-56 orientation-vertical:items-center",
      "orientation-horizontal:w-full",
      "disabled:opacity-50",
    ],
  }),
  Thumb: cva({
    base: [
      "top-1/2 left-1/2 size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
    ],
  }),
  Track: cva({
    base: [
      "group/track relative rounded-full bg-zinc-200 disabled:bg-background-disabled dark:bg-zinc-800",
      "orientation-horizontal:h-1.5 orientation-horizontal:w-full orientation-vertical:w-1.5 orientation-vertical:flex-1 grow",
    ],
  }),
};

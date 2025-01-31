import { cva } from "~/lib/cva";

export const SliderStyles = {
  Root: cva({
    base: [
      "flex flex-col gap-2",
      "orientation-vertical:h-56 orientation-vertical:items-center",
      "orientation-horizontal:w-full",
      "disabled:opacity-50",
    ],
  }),
  Header: cva({
    base: ["flex items-center justify-between gap-2"],
  }),
  Output: cva({
    base: ["text-muted-fg text-sm tabular-nums"],
  }),
  Track: cva({
    base: [
      "group/track relative cursor-pointer rounded-full bg-zinc-200 disabled:cursor-default disabled:bg-bg-disabled dark:bg-zinc-800",
      "orientation-horizontal:h-1.5 orientation-horizontal:w-full orientation-vertical:w-1.5 orientation-vertical:flex-1 grow",
    ],
  }),
  Thumb: cva({
    base: [
      "z-50 dragging:cursor-grabbing border border-zinc-200 outline-hidden focus:border-primary focus:outline-hidden focus:ring-4 focus:ring-primary/20",
      "rounded-full bg-white transition-[width,height]",
      "-translate-x-1/2! -translate-y-1/2! absolute top-1/2 left-1/2 block",
      "disabled:border disabled:border-bg disabled:bg-bg-disabled",
      "orientation-horizontal:h-2 orientation-vertical:w-2",
      "dragging:size-[1.30rem] size-[1.15rem] dragging:border-primary",
    ],
  }),
  Filler: cva({
    base: [
      "rounded-full bg-primary group-disabled/track:bg-bg-disabled",
      "group-orientation-horizontal/top-0 pointer-events-none absolute group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full group-orientation-vertical/track:w-full",
    ],
  }),
};

import { cva } from "~/registry/lib/cva";

export const ChartStyles = {
  Root: cva({
    base: [
      "flex aspect-video justify-center text-xs",
      "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
      "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent",
      "[&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
      "[&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
      "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent",
      "[&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
    ],
  }),
  TooltipContent: cva({
    base: [
      "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
    ],
  }),
  TooltipContentLabel: cva({
    base: ["font-medium"],
  }),
};

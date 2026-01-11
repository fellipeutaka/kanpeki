import { cva } from "~/registry/lib/cva";

export const CollapsibleStyles = {
  Content: cva({
    base: [
      "h-(--disclosure-panel-height) transform-gpu overflow-clip text-sm duration-300 motion-safe:transition-[height]",
    ],
  }),
};

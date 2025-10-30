import { cva } from "~/registry/lib/cva";

export const CollapsibleStyles = {
  Content: cva({
    base: [
      "overflow-hidden text-sm transition-[height,content_visibility] transition-discrete [interpolate-size:allow-keywords] aria-hidden:h-0",
    ],
  }),
};

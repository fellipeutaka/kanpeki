import { cva } from "~/lib/cva";

export const CollapsibleStyles = {
  Content: cva({
    base: [
      "overflow-hidden text-sm opacity-100 transition-all transition-discrete [interpolate-size:allow-keywords] aria-hidden:h-0",
    ],
  }),
};

import { compose, cva } from "~/lib/cva";
import { FocusRingStyles } from "~/styles/focus-ring";

export const DropZoneStyles = compose(
  FocusRingStyles,
  cva({
    base: [
      "group flex max-h-[200px] max-w-xl flex-col items-center justify-center gap-2 rounded-md border border-dashed p-6",
      "text-sm has-[slot=description]:text-center",

      "drop-target:border-primary drop-target:border-solid drop-target:bg-primary/10 drop-target:ring-4",
      "drop-target:ring-primary/20 drop-target:[&_.text-muted-fg]:text-primary-fg",
    ],
  })
);

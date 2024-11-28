"use client";

import { DropZone as DropZonePrimitive } from "react-aria-components";
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

export interface DropZoneProps
  extends React.ComponentProps<typeof DropZonePrimitive> {}

export function DropZone({ className, ...props }: DropZoneProps) {
  return (
    <DropZonePrimitive
      {...props}
      className={(values) =>
        DropZoneStyles({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

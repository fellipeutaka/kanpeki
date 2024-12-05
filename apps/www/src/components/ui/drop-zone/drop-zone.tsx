"use client";

import { DropZone as DropZonePrimitive } from "react-aria-components";
import { DropZoneStyles } from "./styles";

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

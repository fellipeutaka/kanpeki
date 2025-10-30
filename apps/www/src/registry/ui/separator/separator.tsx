"use client";

import { Separator as RACSeparator } from "react-aria-components";
import { SeparatorStyles } from "./styles";

export interface SeparatorProps
  extends React.ComponentProps<typeof RACSeparator> {}

export function Separator({
  className,
  orientation,
  ...props
}: SeparatorProps) {
  return (
    <RACSeparator
      className={SeparatorStyles({ className })}
      data-orientation={orientation}
      data-slot="separator"
      orientation={orientation}
      {...props}
    />
  );
}

import type { VariantProps } from "cva";
import { BadgeStyles } from "./styles";

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof BadgeStyles> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={BadgeStyles({ className, variant })}
      data-slot="badge"
      {...props}
    />
  );
}

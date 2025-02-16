import type { VariantProps } from "~/lib/cva";
import { BadgeStyles } from "./styles";

export interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof BadgeStyles> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div {...props} className={BadgeStyles({ className, variant })} />;
}

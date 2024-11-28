import { type VariantProps, compose, cva } from "~/lib/cva";
import { FocusRingStyles } from "~/styles/focus-ring";

export const BadgeStyles = compose(
  FocusRingStyles,
  cva({
    base: [
      "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold",
      "text-xs transition",
    ],
    variants: {
      variant: {
        default: [
          "border-transparent bg-primary text-primary-fg shadow",
          "hover:bg-primary/80",
        ],
        secondary: [
          "border-transparent bg-secondary text-secondary-fg",
          "hover:bg-secondary/80",
        ],
        danger: [
          "border-transparent bg-danger text-danger-fg shadow",
          "hover:bg-danger/80",
        ],
        outline: ["text-fg"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  })
);

export interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof BadgeStyles> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div {...props} className={BadgeStyles({ className, variant })} />;
}

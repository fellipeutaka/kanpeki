import { type VariantProps, tv } from "tailwind-variants";

export const BadgeStyles = tv({
  base: [
    "inline-flex items-center rounded-md border px-2.5 py-0.5 font-semibold",
    "text-xs outline-none ring-offset-2 ring-offset-background transition",
  ],
  variants: {
    variant: {
      default: [
        "border-transparent bg-primary text-primary-foreground shadow",
        "hover:bg-primary/80",
      ],
      secondary: [
        "border-transparent bg-secondary text-secondary-foreground",
        "hover:bg-secondary/80",
      ],
      destructive: [
        "border-transparent bg-destructive text-destructive-foreground shadow",
        "hover:bg-destructive/80",
      ],
      outline: ["text-foreground"],
    },
    nativeFocus: {
      true: ["focus:ring-2 focus:ring-ring"],
      false: ["data-[focused=true]:ring-2 data-[focused=true]:ring-ring"],
    },
  },
  defaultVariants: {
    variant: "default",
    nativeFocus: true,
  },
});

export type BadgeProps = React.ComponentProps<"div"> &
  VariantProps<typeof BadgeStyles>;

export function Badge({
  className,
  variant,
  nativeFocus,
  ...props
}: BadgeProps) {
  return (
    <div
      {...props}
      className={BadgeStyles({ className, variant, nativeFocus })}
    />
  );
}

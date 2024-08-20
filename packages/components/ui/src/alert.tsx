import { type VariantProps, tv } from "tailwind-variants";

export const AlertStyles = {
  Root: tv({
    base: [
      "relative w-full rounded-lg border px-4 py-3 text-sm",
      "[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    ],

    variants: {
      variant: {
        default: ["bg-background text-foreground"],
        destructive: [
          "border-destructive/50 text-destructive",
          "dark:border-destructive",
          "[&>svg]:text-destructive",
        ],
        warning: [
          "border-amber-500/50 text-amber-500",
          "dark:border-amber-500",
          "[&>svg]:text-amber-500",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Title: tv({
    base: ["mb-1 font-medium leading-none tracking-tight"],
  }),
  Description: tv({
    base: ["text-sm", "[&_p]:leading-relaxed"],
  }),
};

export type AlertRootProps = React.ComponentProps<"div"> &
  VariantProps<(typeof AlertStyles)["Root"]>;

export function AlertRoot({ className, variant, ...props }: AlertRootProps) {
  return (
    <div
      role="alert"
      className={AlertStyles.Root({ variant, className })}
      {...props}
    />
  );
}

export type AlertTitleProps = React.ComponentProps<"h5">;

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return <h5 {...props} className={AlertStyles.Title({ className })} />;
}

export type AlertDescriptionProps = React.ComponentProps<"h6">;

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return <h6 {...props} className={AlertStyles.Description({ className })} />;
}

export const Alert = Object.assign(
  {},
  {
    Root: AlertRoot,
    Title: AlertTitle,
    Description: AlertDescription,
  }
);

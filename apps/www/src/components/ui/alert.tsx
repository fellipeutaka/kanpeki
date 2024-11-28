import { type VariantProps, cva } from "~/lib/cva";

export const AlertStyles = {
  Root: cva({
    base: [
      "relative w-full rounded-lg border px-4 py-3 text-sm",
      "[&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-fg [&>svg~*]:pl-7",
    ],

    variants: {
      variant: {
        default: ["bg-bg text-fg"],
        danger: [
          "border-danger/50 text-danger",
          "dark:border-datext-danger",
          "[&>svg]:text-danger",
        ],
        warning: [
          "border-warning/50 text-warning",
          "dark:border-warning",
          "[&>svg]:text-warning",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }),
  Title: cva({
    base: ["mb-1 font-medium leading-none tracking-tight"],
  }),
  Description: cva({
    base: ["text-sm", "[&_p]:leading-relaxed"],
  }),
};

export interface AlertRootProps
  extends React.ComponentProps<"div">,
    VariantProps<(typeof AlertStyles)["Root"]> {}

export function AlertRoot({ className, variant, ...props }: AlertRootProps) {
  return (
    <div
      role="alert"
      className={AlertStyles.Root({ variant, className })}
      {...props}
    />
  );
}

export interface AlertTitleProps extends React.ComponentProps<"h5"> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return <h5 {...props} className={AlertStyles.Title({ className })} />;
}

export interface AlertDescriptionProps extends React.ComponentProps<"h6"> {}

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

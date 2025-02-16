import type { VariantProps } from "~/lib/cva";
import { AlertStyles } from "./styles";

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

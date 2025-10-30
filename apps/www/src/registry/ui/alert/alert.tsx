import type { VariantProps } from "cva";
import { AlertStyles } from "./styles";

export interface AlertRootProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof AlertStyles.Root> {}

export function AlertRoot({ className, variant, ...props }: AlertRootProps) {
  return (
    <div
      className={AlertStyles.Root({ className, variant })}
      data-slot="alert-root"
      role="alert"
      {...props}
    />
  );
}

export interface AlertTitleProps extends React.ComponentProps<"div"> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      className={AlertStyles.Title({ className })}
      data-slot="alert-title"
      {...props}
    />
  );
}

export interface AlertDescriptionProps extends React.ComponentProps<"div"> {}

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return (
    <div
      className={AlertStyles.Description({ className })}
      data-slot="alert-description"
      {...props}
    />
  );
}

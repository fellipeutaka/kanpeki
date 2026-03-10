import type { VariantProps } from "cva";
import { EmptyStyles } from "./styles";

export interface EmptyRootProps extends React.ComponentProps<"div"> {}

export function EmptyRoot({ className, ...props }: EmptyRootProps) {
  return (
    <div
      className={EmptyStyles.Root({ className })}
      data-slot="empty"
      {...props}
    />
  );
}

export interface EmptyHeaderProps extends React.ComponentProps<"div"> {}

export function EmptyHeader({ className, ...props }: EmptyHeaderProps) {
  return (
    <div
      className={EmptyStyles.Header({ className })}
      data-slot="empty-header"
      {...props}
    />
  );
}

export interface EmptyMediaProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof EmptyStyles.Media> {}

export function EmptyMedia({
  className,
  variant = "default",
  ...props
}: EmptyMediaProps) {
  return (
    <div
      className={EmptyStyles.Media({ variant, className })}
      data-slot="empty-icon"
      data-variant={variant}
      {...props}
    />
  );
}

export interface EmptyTitleProps extends React.ComponentProps<"div"> {}

export function EmptyTitle({ className, ...props }: EmptyTitleProps) {
  return (
    <div
      className={EmptyStyles.Title({ className })}
      data-slot="empty-title"
      {...props}
    />
  );
}

export interface EmptyDescriptionProps extends React.ComponentProps<"p"> {}

export function EmptyDescription({
  className,
  ...props
}: EmptyDescriptionProps) {
  return (
    <div
      className={EmptyStyles.Description({ className })}
      data-slot="empty-description"
      {...props}
    />
  );
}

export interface EmptyContentProps extends React.ComponentProps<"div"> {}

export function EmptyContent({ className, ...props }: EmptyContentProps) {
  return (
    <div
      className={EmptyStyles.Content({ className })}
      data-slot="empty-content"
      {...props}
    />
  );
}

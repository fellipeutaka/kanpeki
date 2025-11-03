import { CardStyles } from "./styles";

export interface CardRootProps extends React.ComponentProps<"div"> {}

export function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <div
      className={CardStyles.Root({ className })}
      data-slot="card-root"
      {...props}
    />
  );
}

export interface CardHeaderProps extends React.ComponentProps<"div"> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={CardStyles.Header({ className })}
      data-slot="card-header"
      {...props}
    />
  );
}

export interface CardTitleProps extends React.ComponentProps<"div"> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      className={CardStyles.Title({ className })}
      data-slot="card-title"
      {...props}
    />
  );
}

export interface CardDescriptionProps extends React.ComponentProps<"div"> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      className={CardStyles.Description({ className })}
      data-slot="card-description"
      {...props}
    />
  );
}

export interface CardActionProps extends React.ComponentProps<"div"> {}

export function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      className={CardStyles.Action({ className })}
      data-slot="card-action"
      {...props}
    />
  );
}

export interface CardContentProps extends React.ComponentProps<"div"> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      className={CardStyles.Content({ className })}
      data-slot="card-content"
      {...props}
    />
  );
}

export interface CardFooterProps extends React.ComponentProps<"div"> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={CardStyles.Footer({ className })}
      data-slot="card-footer"
      {...props}
    />
  );
}

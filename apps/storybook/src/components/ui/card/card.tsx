import { CardStyles } from "./styles";

export interface CardRootProps extends React.ComponentProps<"div"> {}

export function CardRoot({ className, ...props }: CardRootProps) {
  return <div {...props} className={CardStyles.Root({ className })} />;
}

export interface CardHeaderProps extends React.ComponentProps<"header"> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <header {...props} className={CardStyles.Header({ className })} />;
}

export interface CardTitleProps extends React.ComponentProps<"h3"> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 {...props} className={CardStyles.Title({ className })} />;
}

export interface CardDescriptionProps extends React.ComponentProps<"p"> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p {...props} className={CardStyles.Description({ className })} />;
}

export interface CardContentProps extends React.ComponentProps<"div"> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div {...props} className={CardStyles.Content({ className })} />;
}

export interface CardFooterProps extends React.ComponentProps<"footer"> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <footer {...props} className={CardStyles.Footer({ className })} />;
}

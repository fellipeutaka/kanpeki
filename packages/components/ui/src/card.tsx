import { tv } from "tailwind-variants";

export const CardStyles = {
  Root: tv({
    base: ["rounded-xl border bg-card text-card-foreground shadow"],
  }),
  Header: tv({
    base: ["flex flex-col space-y-1.5 p-6"],
  }),
  Title: tv({
    base: ["font-semibold leading-none tracking-tight"],
  }),
  Description: tv({
    base: ["text-muted-foreground text-sm"],
  }),
  Content: tv({
    base: ["p-6 pt-0"],
  }),
  Footer: tv({
    base: ["flex items-center p-6 pt-0"],
  }),
};

export type CardRootProps = React.ComponentProps<"div">;

export function CardRoot({ className, ...props }: CardRootProps) {
  return <div {...props} className={CardStyles.Root({ className })} />;
}

export type CardHeaderProps = React.ComponentProps<"header">;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <header {...props} className={CardStyles.Header({ className })} />;
}

export type CardTitleProps = React.ComponentProps<"h3">;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <h3 {...props} className={CardStyles.Title({ className })} />;
}

export type CardDescriptionProps = React.ComponentProps<"p">;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p {...props} className={CardStyles.Description({ className })} />;
}

export type CardContentProps = React.ComponentProps<"div">;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div {...props} className={CardStyles.Content({ className })} />;
}

export type CardFooterProps = React.ComponentProps<"footer">;

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <footer {...props} className={CardStyles.Footer({ className })} />;
}

export const Card = Object.assign(
  {},
  {
    Root: CardRoot,
    Header: CardHeader,
    Title: CardTitle,
    Description: CardDescription,
    Content: CardContent,
    Footer: CardFooter,
  },
);

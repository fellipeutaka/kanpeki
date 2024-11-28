import { cva } from "~/lib/cva";

export const CardStyles = {
  Root: cva({
    base: ["rounded-xl border bg-card text-card-fg shadow"],
  }),
  Header: cva({
    base: ["flex flex-col space-y-1.5 p-6"],
  }),
  Title: cva({
    base: ["font-semibold text-base leading-none tracking-tight"],
  }),
  Description: cva({
    base: ["text-muted-fg text-sm"],
  }),
  Content: cva({
    base: ["p-6 pt-0"],
  }),
  Footer: cva({
    base: ["flex items-center p-6 pt-0"],
  }),
};

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

export const Card = Object.assign(
  {},
  {
    Root: CardRoot,
    Header: CardHeader,
    Title: CardTitle,
    Description: CardDescription,
    Content: CardContent,
    Footer: CardFooter,
  }
);

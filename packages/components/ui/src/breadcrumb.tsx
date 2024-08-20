import Link from "next/link";
import { tv } from "tailwind-variants";
import { Icons } from "./icons";

export const BreadcrumbStyles = {
  List: tv({
    base: [
      "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm",
      "sm:gap-2.5",
    ],
  }),
  Item: tv({
    base: ["inline-flex items-center gap-1.5"],
  }),
  Link: tv({
    base: ["transition-colors hover:text-foreground"],
  }),
  Page: tv({
    base: ["font-normal text-foreground"],
  }),
  Ellipsis: tv({
    base: ["grid size-9 place-content-center"],
  }),
};

export type BreadcrumbRootProps = React.ComponentProps<"nav">;

export function BreadcrumbRoot(props: BreadcrumbRootProps) {
  return <nav {...props} />;
}

export type BreadcrumbListProps = React.ComponentProps<"ol">;

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return <ol {...props} className={BreadcrumbStyles.List({ className })} />;
}

export type BreadcrumbItemProps = React.ComponentProps<"li">;

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return <li {...props} className={BreadcrumbStyles.Item({ className })} />;
}

export type BreadcrumbLinkProps = React.ComponentProps<typeof Link>;

export function BreadcrumbLink({ className, ...props }: BreadcrumbLinkProps) {
  return <Link {...props} className={BreadcrumbStyles.Link({ className })} />;
}

export type BreadcrumbPageProps = React.ComponentProps<"span">;

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled
      aria-current="page"
      {...props}
      className={BreadcrumbStyles.Page({ className })}
    />
  );
}

export type BreadcrumbSeparatorProps = React.ComponentProps<"li">;

export function BreadcrumbSeparator({
  children,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li role="presentation" aria-hidden {...props}>
      {children ?? <Icons.ChevronRight className="size-3.5" />}
    </li>
  );
}

export type BreadcrumbEllipsisProps = Omit<
  React.ComponentProps<"span">,
  "children"
>;

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      role="presentation"
      aria-hidden
      aria-label="More"
      {...props}
      className={BreadcrumbStyles.Ellipsis({ className })}
    >
      <Icons.Check className="size-4" />
    </span>
  );
}

export const Breadcrumb = Object.assign(
  {},
  {
    Root: BreadcrumbRoot,
    List: BreadcrumbList,
    Item: BreadcrumbItem,
    Link: BreadcrumbLink,
    Page: BreadcrumbPage,
    Separator: BreadcrumbSeparator,
    Ellipsis: BreadcrumbEllipsis,
  }
);

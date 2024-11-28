import {
  Breadcrumb as BreadcrumbPrimitive,
  Breadcrumbs as BreadcrumbsPrimitive,
} from "react-aria-components";
import { cva } from "~/lib/cva";
import { Link } from "./link";

const Icons = {
  ChevronRight: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  DotsHorizontal: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.625 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0m5 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0M12.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25"
        clipRule="evenodd"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export const BreadcrumbStyles = {
  Root: cva({
    base: [
      "flex flex-wrap items-center gap-1.5 break-words text-muted-fg text-sm",
      "sm:gap-2.5",
    ],
  }),
  Item: cva({
    base: ["inline-flex items-center gap-1.5"],
  }),
  Page: cva({
    base: ["font-normal text-fg"],
  }),
  Ellipsis: cva({
    base: ["grid size-9 place-content-center"],
  }),
};

export interface BreadcrumbRootProps<T extends object>
  extends React.ComponentProps<typeof BreadcrumbsPrimitive<T>> {}

export function BreadcrumbRoot<T extends object>({
  className,
  ...props
}: BreadcrumbRootProps<T>) {
  return (
    <BreadcrumbsPrimitive
      {...props}
      className={BreadcrumbStyles.Root({ className })}
    />
  );
}

export interface BreadcrumbItemProps
  extends React.ComponentProps<typeof BreadcrumbPrimitive> {}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <BreadcrumbPrimitive
      {...props}
      className={(values) =>
        BreadcrumbStyles.Item({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface BreadcrumbLinkProps
  extends React.ComponentProps<typeof Link> {}

export function BreadcrumbLink(props: BreadcrumbLinkProps) {
  return <Link variant="default" {...props} />;
}

export interface BreadcrumbPageProps extends React.ComponentProps<"span"> {}

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      tabIndex={-1}
      aria-disabled
      aria-current="page"
      {...props}
      className={BreadcrumbStyles.Page({ className })}
    />
  );
}

export interface BreadcrumbSeparatorProps
  extends React.ComponentProps<typeof BreadcrumbPrimitive> {}

export function BreadcrumbSeparator({
  children,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <BreadcrumbPrimitive {...props}>
      {children ?? <Icons.ChevronRight className="size-3.5" />}
    </BreadcrumbPrimitive>
  );
}

export interface BreadcrumbEllipsisProps
  extends Omit<React.ComponentProps<"span">, "children"> {}

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
      <Icons.DotsHorizontal className="size-4" />
    </span>
  );
}

export const Breadcrumb = Object.assign(
  {},
  {
    Root: BreadcrumbRoot,
    Item: BreadcrumbItem,
    Link: BreadcrumbLink,
    Page: BreadcrumbPage,
    Separator: BreadcrumbSeparator,
    Ellipsis: BreadcrumbEllipsis,
  }
);

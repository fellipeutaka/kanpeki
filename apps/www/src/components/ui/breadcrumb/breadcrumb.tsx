"use client";

import {
  Breadcrumb as BreadcrumbPrimitive,
  Breadcrumbs as BreadcrumbsPrimitive,
} from "react-aria-components";
import { Link } from "../link/link";
import { BreadcrumbStyles } from "./styles";

const Icons = {
  ChevronRight: (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  DotsHorizontal: (props) => (
    <svg
      aria-hidden="true"
      height={32}
      viewBox="0 0 15 15"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M3.625 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0m5 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0M12.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

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
      aria-current="page"
      aria-disabled
      role="link"
      tabIndex={-1}
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
      aria-hidden
      aria-label="More"
      role="presentation"
      {...props}
      className={BreadcrumbStyles.Ellipsis({ className })}
    >
      <Icons.DotsHorizontal className="size-4" />
    </span>
  );
}

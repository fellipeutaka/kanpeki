"use client";

import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import {
  Breadcrumb,
  Breadcrumbs,
  composeRenderProps,
} from "react-aria-components";
import { BreadcrumbStyles } from "./styles";

export interface BreadcrumbRootProps<T extends object>
  extends React.ComponentProps<typeof Breadcrumbs<T>> {}

export function BreadcrumbRoot<T extends object>({
  className,
  ...props
}: BreadcrumbRootProps<T>) {
  return (
    <Breadcrumbs
      className={BreadcrumbStyles.Root({ className })}
      data-slot="breadcrumb-root"
      {...props}
    />
  );
}

export interface BreadcrumbItemProps
  extends React.ComponentProps<typeof Breadcrumb> {}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <Breadcrumb
      className={BreadcrumbStyles.Item({ className })}
      data-slot="breadcrumb-item"
      {...props}
    />
  );
}

export interface BreadcrumbSeparatorProps
  extends React.ComponentProps<typeof Breadcrumb> {}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <Breadcrumb
      className={composeRenderProps(className, (className) =>
        BreadcrumbStyles.Separator({ className })
      )}
      data-slot="breadcrumb-separator"
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </Breadcrumb>
  );
}

export interface BreadcrumbEllipsisProps extends React.ComponentProps<"span"> {}

export function BreadcrumbEllipsis({
  className,
  ...props
}: BreadcrumbEllipsisProps) {
  return (
    <span
      aria-hidden="true"
      className={BreadcrumbStyles.Ellipsis({ className })}
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

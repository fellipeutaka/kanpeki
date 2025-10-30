"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { composeRenderProps, Link } from "react-aria-components";

import { type Button, ButtonStyles } from "~/registry/ui/button";
import { PaginationStyles } from "./styles";

export interface PaginationRootProps extends React.ComponentProps<"nav"> {}

export function PaginationRoot({ className, ...props }: PaginationRootProps) {
  return (
    <nav
      aria-label="pagination"
      className={PaginationStyles.Root({ className })}
      data-slot="pagination-root"
      {...props}
    />
  );
}

export interface PaginationContentProps extends React.ComponentProps<"ul"> {}

export function PaginationContent({
  className,
  ...props
}: PaginationContentProps) {
  return (
    <ul
      className={PaginationStyles.Content({ className })}
      data-slot="pagination-content"
      {...props}
    />
  );
}

export interface PaginationItemProps extends React.ComponentProps<"li"> {}

export function PaginationItem({ ...props }: PaginationItemProps) {
  return <li data-slot="pagination-item" {...props} />;
}

export interface PaginationLinkProps
  extends Pick<React.ComponentProps<typeof Button>, "size">,
    React.ComponentProps<typeof Link> {
  isActive?: boolean;
}

export function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={composeRenderProps(className, (className) =>
        ButtonStyles({
          className,
          size,
          variant: isActive ? "outline" : "ghost",
        })
      )}
      data-active={isActive}
      data-slot="pagination-link"
      {...props}
    />
  );
}

export interface PaginationPreviousProps
  extends React.ComponentProps<typeof PaginationLink> {}

export function PaginationPrevious({
  className,
  ...props
}: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={PaginationStyles.Navigation({
        className,
        variant: "previous",
      })}
      size="default"
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

export interface PaginationNextProps
  extends React.ComponentProps<typeof PaginationLink> {}

export function PaginationNext({ className, ...props }: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={PaginationStyles.Navigation({
        className,
        variant: "next",
      })}
      size="default"
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

export interface PaginationEllipsisProps extends React.ComponentProps<"span"> {}

export function PaginationEllipsis({
  className,
  ...props
}: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      className={PaginationStyles.Ellipsis({ className })}
      data-slot="pagination-ellipsis"
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

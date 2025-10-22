"use client";

import {
  Cell,
  Collection,
  Column,
  ColumnResizer,
  ResizableTableContainer,
  TableBody as TableBodyPrimitive,
  TableHeader as TableHeaderPrimitive,
  Table as TablePrimitive,
  Row as TableRowPrimitive,
  useTableOptions,
} from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { ButtonPrimitive } from "../button";
import { Checkbox } from "../checkbox";
import { TableStyles } from "./styles";

const Icons = {
  ChevronDown: (props) => (
    <svg
      aria-hidden="true"
      height={32}
      viewBox="0 0 24 24"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export interface TableRootProps
  extends React.ComponentProps<typeof TablePrimitive> {
  allowResize?: boolean;
}

export function TableRoot({ children, className, ...props }: TableRootProps) {
  return (
    <div className="relative w-full">
      {props.allowResize ? (
        <ResizableTableContainer className="overflow-auto">
          <TablePrimitive
            {...props}
            className={TableStyles.Root({ className })}
            data-resizable="true"
          >
            {children}
          </TablePrimitive>
        </ResizableTableContainer>
      ) : (
        <TablePrimitive
          {...props}
          className={TableStyles.Root({ className })}
          data-resizable="false"
        >
          {children}
        </TablePrimitive>
      )}
    </div>
  );
}

export interface TableHeaderProps<T extends object>
  extends React.ComponentProps<typeof TableHeaderPrimitive<T>> {}

export function TableHeader<T extends object>({
  className,
  columns,
  children,
  ...props
}: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <TableHeaderPrimitive
      {...props}
      className={TableStyles.Header({ className })}
    >
      {allowsDragging && <TableColumn className="w-0" />}
      {selectionBehavior === "toggle" && (
        <TableColumn className="w-0 pl-4">
          {selectionMode === "multiple" && (
            <Checkbox.Provider slot="selection">
              <Checkbox.Root>
                <Checkbox.Indicator />
              </Checkbox.Root>
            </Checkbox.Provider>
          )}
        </TableColumn>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeaderPrimitive>
  );
}

export interface TableColumnProps
  extends React.ComponentProps<typeof Column>,
    VariantProps<(typeof TableStyles)["Column"]> {}

export function TableColumn({
  className,
  isResizable,
  ...props
}: TableColumnProps) {
  return (
    <Column
      {...props}
      className={(values) =>
        TableStyles.Column({
          className:
            typeof className === "function" ? className(values) : className,
          isResizable,
        })
      }
    />
  );
}

export interface TableColumnResizerProps
  extends React.ComponentProps<typeof ColumnResizer> {}

export function TableColumnResizer({
  className,
  ...props
}: TableColumnResizerProps) {
  return (
    <ColumnResizer
      {...props}
      className={(values) =>
        TableStyles.ColumnResizer({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    >
      <div className="h-full w-px bg-border py-3" />
    </ColumnResizer>
  );
}

export interface TableBodyProps<T extends object>
  extends React.ComponentProps<typeof TableBodyPrimitive<T>> {}

export function TableBody<T extends object>({
  className,
  ...props
}: TableBodyProps<T>) {
  return (
    <TableBodyPrimitive
      {...props}
      className={(values) =>
        TableStyles.Body({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface TableRowProps<T extends object>
  extends React.ComponentProps<typeof TableRowPrimitive<T>> {}

export function TableRow<T extends object>({
  className,
  columns,
  children,
  ...props
}: TableRowProps<T>) {
  const { allowsDragging, selectionBehavior } = useTableOptions();

  return (
    <TableRowPrimitive
      {...props}
      className={(values) =>
        TableStyles.Row({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    >
      {allowsDragging && (
        <Cell className="group cursor-grab dragging:cursor-grabbing pr-0 ring-primary">
          <ButtonPrimitive
            className="relative bg-transparent py-1.5 pl-3.5 pressed:text-fg text-muted-fg"
            slot="drag"
          >
            <Icons.ChevronDown />
          </ButtonPrimitive>
        </Cell>
      )}

      {selectionBehavior === "toggle" && (
        <Cell className="pl-4">
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 hidden h-full w-0.5 bg-primary group-selected:block"
          />

          <Checkbox.Provider slot="selection">
            <Checkbox.Root>
              <Checkbox.Indicator />
            </Checkbox.Root>
          </Checkbox.Provider>
        </Cell>
      )}

      <Collection items={columns}>{children}</Collection>
    </TableRowPrimitive>
  );
}

export interface TableCellProps extends React.ComponentProps<typeof Cell> {}

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <Cell
      {...props}
      className={(values) =>
        TableStyles.Cell({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface TableSortIconProps extends React.ComponentProps<"svg"> {}

export function TableSortIcon({ className, ...props }: TableSortIconProps) {
  return (
    <Icons.ChevronDown
      {...props}
      className={TableStyles.SortIcon({
        className,
      })}
    />
  );
}

// export interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

// export function TableFooter({ className, ...props }: TableFooterProps) {
//   return <tfoot {...props} className={TableStyles.Footer({ className })} />;
// }

// export interface TableCaptionProps extends React.ComponentProps<"caption"> {}

// export function TableCaption({ className, ...props }: TableCaptionProps) {
//   return <caption {...props} className={TableStyles.Caption({ className })} />;
// }

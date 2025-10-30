import { TableStyles } from "./styles";

export interface TableRootProps extends React.ComponentProps<"table"> {}

export function TableRoot({ className, ...props }: TableRootProps) {
  return (
    <div className={TableStyles.Container()} data-slot="table-container">
      <table
        className={TableStyles.Root({ className })}
        data-slot="table"
        {...props}
      />
    </div>
  );
}

export interface TableHeaderProps extends React.ComponentProps<"thead"> {}

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      className={TableStyles.Header({ className })}
      data-slot="table-header"
      {...props}
    />
  );
}

export interface TableBodyProps extends React.ComponentProps<"tbody"> {}

export function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      className={TableStyles.Body({ className })}
      data-slot="table-body"
      {...props}
    />
  );
}

export interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

export function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      className={TableStyles.Footer({ className })}
      data-slot="table-footer"
      {...props}
    />
  );
}

export interface TableRowProps extends React.ComponentProps<"tr"> {}

export function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      className={TableStyles.Row({ className })}
      data-slot="table-row"
      {...props}
    />
  );
}

export interface TableHeadProps extends React.ComponentProps<"th"> {}

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className={TableStyles.Head({ className })}
      data-slot="table-head"
      {...props}
    />
  );
}

export interface TableCellProps extends React.ComponentProps<"td"> {}

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      className={TableStyles.Cell({ className })}
      data-slot="table-cell"
      {...props}
    />
  );
}

export interface TableCaptionProps extends React.ComponentProps<"caption"> {}

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      className={TableStyles.Caption({ className })}
      data-slot="table-caption"
      {...props}
    />
  );
}

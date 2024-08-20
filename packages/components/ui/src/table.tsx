import { tv } from "tailwind-variants";

export const TableStyles = {
  Root: tv({
    base: ["w-full caption-bottom text-sm"],
  }),
  Header: tv({
    base: ["[&_tr]:border-b"],
  }),
  Body: tv({
    base: ["[&_tr:last-child]:border-0"],
  }),
  Footer: tv({
    base: ["bg-primary font-medium text-primary-foreground"],
  }),
  Row: tv({
    base: [
      "border-border border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
    ],
  }),
  Head: tv({
    base: [
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
    ],
  }),
  Cell: tv({
    base: ["p-4 align-middle [&:has([role=checkbox])]:pr-0"],
  }),
  Caption: tv({
    base: ["mt-4 text-muted-foreground text-sm"],
  }),
};

export type TableRootProps = React.ComponentProps<"table">;

export function TableRoot({ className, ...props }: TableRootProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table {...props} className={TableStyles.Root({ className })} />
    </div>
  );
}

export type TableHeaderProps = React.ComponentProps<"thead">;

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return <thead {...props} className={TableStyles.Header({ className })} />;
}

export type TableBodyProps = React.ComponentProps<"thead">;

export function TableBody({ className, ...props }: TableBodyProps) {
  return <tbody {...props} className={TableStyles.Body({ className })} />;
}

export type TableFooterProps = React.ComponentProps<"tfoot">;

export function TableFooter({ className, ...props }: TableFooterProps) {
  return <tfoot {...props} className={TableStyles.Footer({ className })} />;
}

export type TableRowProps = React.ComponentProps<"tr">;

export function TableRow({ className, ...props }: TableRowProps) {
  return <tr {...props} className={TableStyles.Row({ className })} />;
}

export type TableHeadProps = React.ComponentProps<"th">;

export function TableHead({ className, ...props }: TableHeadProps) {
  return <th {...props} className={TableStyles.Head({ className })} />;
}

export type TableCellProps = React.ComponentProps<"td">;

export function TableCell({ className, ...props }: TableCellProps) {
  return <td {...props} className={TableStyles.Cell({ className })} />;
}

export type TableCaptionProps = React.ComponentProps<"caption">;

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return <caption {...props} className={TableStyles.Caption({ className })} />;
}

export const Table = Object.assign(
  {},
  {
    Root: TableRoot,
    Header: TableHeader,
    Body: TableBody,
    Footer: TableFooter,
    Row: TableRow,
    Head: TableHead,
    Cell: TableCell,
    Caption: TableCaption,
  }
);

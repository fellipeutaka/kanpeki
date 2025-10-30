import { cva } from "~/registry/lib/cva";

export const TableStyles = {
  Body: cva({
    base: ["[&_tr:last-child]:border-0"],
  }),
  Caption: cva({
    base: ["mt-4 text-muted-foreground text-sm"],
  }),
  Cell: cva({
    base: [
      "whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    ],
  }),
  Container: cva({
    base: ["relative w-full overflow-x-auto"],
  }),
  Footer: cva({
    base: ["border-t bg-muted/50 font-medium [&>tr]:last:border-b-0"],
  }),
  Head: cva({
    base: [
      "h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
    ],
  }),
  Header: cva({
    base: ["[&_tr]:border-b"],
  }),
  Root: cva({
    base: ["w-full caption-bottom text-sm"],
  }),
  Row: cva({
    base: [
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
    ],
  }),
};

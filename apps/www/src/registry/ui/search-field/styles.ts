import { cva } from "~/registry/lib/cva";

export const SearchFieldStyles = {
  Close: cva({
    base: [
      "group-empty:pointer-events-none group-empty:opacity-0",
      "opacity-70 ring-offset-background transition-opacity",
      "hover:opacity-100",
      "focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
    ],
  }),
  Input: cva({
    base: [
      "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden",
      "placeholder:text-muted-foreground",
      "disabled:cursor-not-allowed disabled:opacity-50",

      // Hide default clear button
      "[&::-webkit-search-cancel-button]:appearance-none",
      "[&::-webkit-search-decoration]:appearance-none",
    ],
  }),
  Root: cva({
    base: [
      "group flex h-9 items-center gap-2 border-b px-3",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 [&_svg]:opacity-50",
    ],
  }),
};

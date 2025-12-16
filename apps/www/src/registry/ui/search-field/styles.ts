import { cva } from "~/registry/lib/cva";

export const SearchFieldStyles = {
  Close: cva({
    base: [
      "group-empty/input-group:pointer-events-none group-empty/input-group:opacity-0",
    ],
  }),
};

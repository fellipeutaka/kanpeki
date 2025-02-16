import { cva } from "~/lib/cva";

export const LabelStyles = cva({
  base: [
    "w-fit cursor-default font-medium text-secondary-fg text-sm",
    "group-required:after:ml-0.5 group-required:after:text-danger group-required:after:content-['*']",
  ],
});

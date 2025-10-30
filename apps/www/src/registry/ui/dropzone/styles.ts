import { cva } from "~/registry/lib/cva";

export const DropzoneStyles = {
  Label: cva({
    base: ["font-medium text-sm"],
  }),
  Provider: cva({
    base: ["group relative"],
  }),
  Root: cva({
    base: [
      "grid w-full select-none place-content-center rounded-lg border-2 border-dashed transition",
      "group-drop-target:border-primary",
    ],
  }),
};

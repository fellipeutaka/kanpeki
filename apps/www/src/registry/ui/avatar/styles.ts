import { cva } from "~/registry/lib/cva";

export const AvatarStyles = {
  Fallback: cva({
    base: [
      "col-start-1 row-start-1 size-full select-none place-content-center rounded-full bg-muted",
      "grid group-data-[status=success]:hidden",
    ],
  }),
  Image: cva({
    base: ["aspect-square size-full"],
  }),
  Placeholder: cva({
    base: [
      "col-start-1 row-start-1 grid size-full animate-pulse place-content-center bg-muted",
    ],
  }),
  Root: cva({
    base: ["group relative grid size-8 shrink-0 overflow-hidden rounded-full"],
  }),
};

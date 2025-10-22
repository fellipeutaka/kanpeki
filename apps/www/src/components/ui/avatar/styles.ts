import { cva } from "~/lib/cva";

export const AvatarStyles = {
  Fallback: cva({
    base: [
      "grid size-full select-none place-content-center rounded-full bg-muted",
    ],
  }),
  Image: cva({
    base: ["aspect-square size-full"],
  }),
  Placeholder: cva({
    base: ["grid size-full animate-pulse place-content-center bg-muted"],
  }),
  Root: cva({
    base: ["relative flex size-10 shrink-0 overflow-hidden rounded-full"],
  }),
};

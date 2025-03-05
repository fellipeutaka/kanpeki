import { compose, cva } from "~/lib/cva";
import { TextFieldStyles } from "../textfield/styles";

export const DateFieldStyles = {
  Root: cva({
    base: ["group flex flex-col gap-y-1.5"],
  }),
  Input: compose(
    TextFieldStyles.Root,
    cva({
      base: [
        "block w-full min-w-sm px-2.5 py-2 text-base uppercase",
        "disabled:bg-secondary",
        "lg:text-sm/[1.4rem]",
      ],
    })
  ),
  Segment: cva({
    base: [
      "inline rounded p-0.5 text-fg tabular-nums caret-transparent outline-hidden",
      "type-literal:px-0 type-literal:text-muted-fg/70",
      "data-placeholder:text-muted-fg/70",
      "focus:bg-accent focus:text-fg focus:data-placeholder:text-fg",
      "invalid:text-danger invalid:data-placeholder:text-danger",
      "invalid:focus:bg-danger invalid:focus:text-white invalid:focus:placeholder:text-white",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  }),
};

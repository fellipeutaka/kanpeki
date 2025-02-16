import { compose, cva } from "~/lib/cva";
import { TextFieldStyles } from "../textfield/styles";

export const DateFieldStyles = {
  Root: cva({
    base: ["flex flex-col"],
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
      "inline shrink-0 rounded p-0.5 type-literal:px-0 text-fg tabular-nums tracking-wider caret-transparent outline outline-0",
      "lg:text-sm",
      "focus:bg-primary focus:text-primary-fg",
      "disabled:text-fg/50",
      "placeholder-shown:text-muted-fg",
      "invalid:bg-danger invalid:text-danger-fg",
    ],
  }),
};

import { compose, cva } from "~/registry/lib/cva";
import { ToggleStyles } from "../toggle/styles";

export const ToggleGroupStyles = {
  Root: cva({
    base: [
      "group/toggle-group-root flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md",
      "data-[spacing=default]:data-[variant=outline]:shadow-xs",
    ],
  }),
  Item: compose(
    ToggleStyles,
    cva({
      base: [
        "min-w-0 shrink-0 px-3",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:last:rounded-r-md data-[spacing=0]:first:rounded-l-md",
        "data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
      ],
    })
  ),
};

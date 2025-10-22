import { cva } from "~/lib/cva";

export const NumberFieldStyles = {
  Controls: cva({
    base: [
      "grid h-10 place-content-center border-s group-focus-within:border-ring/85",
    ],
  }),
  Root: cva({
    base: ["group flex flex-col gap-y-1.5"],
  }),
  StepperButton: cva({
    base: [
      "cursor-default px-2 text-muted-fg",
      "pressed:bg-primary pressed:text-primary-fg",
      "group-disabled:bg-secondary",
    ],
  }),
};

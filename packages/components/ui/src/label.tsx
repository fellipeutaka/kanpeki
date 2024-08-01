"use client";

import { chain } from "@kanpeki/utils/chain";
import { type VariantProps, tv } from "tailwind-variants";

export const LabelStyles = tv({
  base: [
    "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ],
});

export type LabelProps = React.ComponentProps<"label"> &
  VariantProps<typeof LabelStyles>;

export function Label({ className, ...props }: LabelProps) {
  function onMouseDown(event: React.MouseEvent<HTMLLabelElement>) {
    // only prevent text selection if clicking inside the label itself
    const target = event.target as HTMLElement;
    if (target.closest("button, input, select, textarea")) {
      return;
    }

    props.onMouseDown?.(event);
    // prevent text selection when double clicking label
    if (!event.defaultPrevented && event.detail > 1) {
      event.preventDefault();
    }
  }

  return (
    <label
      {...props}
      onMouseDown={chain(onMouseDown, props.onMouseDown)}
      className={LabelStyles({ className })}
    />
  );
}

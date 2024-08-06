"use client";

import { Content, Portal, Root, Trigger } from "@radix-ui/react-popover";
import { tv } from "tailwind-variants";

export const PopoverStyles = {
  Content: tv({
    base: [
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      " data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
    ],
  }),
};

export const PopoverRoot = Root;

export const PopoverTrigger = Trigger;

export type PopoverContentProps = React.ComponentProps<typeof Content>;

export function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <Portal>
      <Content
        align={align}
        sideOffset={sideOffset}
        className={PopoverStyles.Content({ className })}
        {...props}
      />
    </Portal>
  );
}

export const Popover = Object.assign(
  {},
  {
    Root,
    Trigger,
    Content: PopoverContent,
  },
);

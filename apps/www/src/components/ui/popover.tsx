"use client";

import {
  DialogTrigger,
  OverlayArrow,
  PopoverContext,
  Popover as PopoverPrimitive,
  useSlottedContext,
} from "react-aria-components";
import { cva } from "~/lib/cva";

export const PopoverStyles = {
  Content: cva({
    base: [
      "z-50 min-w-[--trigger-width] rounded-md border bg-popover bg-clip-padding p-4 text-popover-fg shadow-sm",
      "[scrollbar-width:thin] dark:backdrop-blur-2xl dark:backdrop-saturate-200 [&::-webkit-scrollbar]:size-0.5",

      "entering:fade-in entering:animate-in entering:ease-out",
      "entering:placement-left:slide-in-from-right-1",
      "entering:placement-right:slide-in-from-left-1",
      "entering:placement-top:slide-in-from-bottom-1",
      "entering:placement-bottom:slide-in-from-top-1",

      "exiting:fade-out exiting:animate-out exiting:ease-in",
      "exiting:placement-left:slide-out-to-right-1",
      "exiting:placement-right:slide-out-to-left-1",
      "exiting:placement-top:slide-out-to-bottom-1",
      "exiting:placement-bottom:slide-out-to-top-1",
    ],
    variants: {
      isMenu: {
        true: ["p-0.5"],
      },
    },
  }),
  Arrow: cva({
    base: [
      "block fill-popover stroke-border",
      "group-placement-left:-rotate-90 group-placement-bottom:rotate-180 group-placement-right:rotate-90",
    ],
  }),
};

export interface PopoverRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}
export const PopoverRoot = DialogTrigger;

export interface PopoverContentProps
  extends React.ComponentProps<typeof PopoverPrimitive> {}

export function PopoverContent({
  className,
  placement,
  ...props
}: PopoverContentProps) {
  const popoverContext = useSlottedContext(PopoverContext);
  const isMenuTrigger = popoverContext?.trigger === "MenuTrigger";
  const isSubmenuTrigger = popoverContext?.trigger === "SubmenuTrigger";
  const isMenu = isMenuTrigger || isSubmenuTrigger;
  const _placement = placement ?? (isSubmenuTrigger ? "right" : "bottom");

  return (
    <PopoverPrimitive
      {...props}
      placement={_placement}
      className={(values) =>
        PopoverStyles.Content({
          isMenu,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface PopoverArrowProps extends React.ComponentProps<"svg"> {}

export function PopoverArrow({ className, ...props }: PopoverArrowProps) {
  return (
    <OverlayArrow className="group">
      <svg
        aria-hidden="true"
        width={12}
        height={12}
        viewBox="0 0 12 12"
        {...props}
        className={PopoverStyles.Arrow({ className })}
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
  );
}

export const Popover = Object.assign(
  {},
  {
    Root: PopoverRoot,
    Content: PopoverContent,
    Arrow: PopoverArrow,
  }
);

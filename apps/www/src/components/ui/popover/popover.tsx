"use client";

import {
  DialogTrigger,
  OverlayArrow,
  PopoverContext,
  Popover as PopoverPrimitive,
  useSlottedContext,
} from "react-aria-components";
import { PopoverStyles } from "./styles";

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

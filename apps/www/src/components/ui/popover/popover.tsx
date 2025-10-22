"use client";

import {
  DialogTrigger,
  OverlayArrow,
  Popover,
  PopoverContext,
  useSlottedContext,
} from "react-aria-components";
import { PopoverStyles } from "./styles";

export interface PopoverRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}
export const PopoverRoot = DialogTrigger;

export interface PopoverContentProps
  extends React.ComponentProps<typeof Popover> {}

export function PopoverContent({
  className,
  placement,
  ...props
}: PopoverContentProps) {
  const popoverContext = useSlottedContext(PopoverContext);
  const isMenuTrigger = popoverContext?.trigger === "MenuTrigger";
  const isSubmenuTrigger = popoverContext?.trigger === "SubmenuTrigger";
  const isSelectTrigger = popoverContext?.trigger === "Select";
  const isMenu = isMenuTrigger || isSubmenuTrigger || isSelectTrigger;
  const _placement = placement ?? (isSubmenuTrigger ? "right" : "bottom");

  return (
    <Popover
      {...props}
      className={(values) =>
        PopoverStyles.Content({
          className:
            typeof className === "function" ? className(values) : className,
          isMenu,
        })
      }
      placement={_placement}
    />
  );
}

export interface PopoverArrowProps extends React.ComponentProps<"svg"> {}

export function PopoverArrow({ className, ...props }: PopoverArrowProps) {
  return (
    <OverlayArrow className="group">
      <svg
        aria-hidden="true"
        height={12}
        viewBox="0 0 12 12"
        width={12}
        {...props}
        className={PopoverStyles.Arrow({ className })}
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
  );
}

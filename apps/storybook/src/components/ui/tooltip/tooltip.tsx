"use client";

import {
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  TooltipTrigger,
} from "react-aria-components";
import { TooltipStyles } from "./styles";

export interface TooltipRootProps
  extends React.ComponentProps<typeof TooltipTrigger> {}
export const TooltipRoot = TooltipTrigger;

export interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive> {}

export function TooltipContent({
  className,
  offset = 10,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive
      {...props}
      offset={offset}
      className={(values) =>
        TooltipStyles.Content({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface TooltipArrowProps
  extends React.ComponentProps<typeof OverlayArrow> {}

export function TooltipArrow({ className, ...props }: TooltipArrowProps) {
  return (
    <OverlayArrow {...props}>
      <svg
        aria-hidden="true"
        width={12}
        height={12}
        viewBox="0 0 12 12"
        className={TooltipStyles.Arrow({ className })}
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
  );
}

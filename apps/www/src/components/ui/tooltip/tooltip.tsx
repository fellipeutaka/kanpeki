"use client";

import {
  OverlayArrow,
  Tooltip as TooltipPrimitive,
  type TooltipProps as TooltipPrimitiveProps,
  TooltipTrigger,
} from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { TooltipStyles } from "./styles";

export interface TooltipRootProps
  extends React.ComponentProps<typeof TooltipTrigger> {}
export const TooltipRoot = TooltipTrigger;

export interface TooltipContentProps
  extends TooltipPrimitiveProps,
    VariantProps<typeof TooltipStyles> {}

export function TooltipContent({
  className,
  intent = "default",
  offset = 10,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive
      {...props}
      offset={offset}
      className={(values) =>
        TooltipStyles({
          intent,
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
        className="arx group-placement-left:-rotate-90 group-placement-bottom:rotate-180 group-placement-right:rotate-90 forced-colors:fill-[Canvas] forced-colors:stroke-[ButtonBorder]"
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
  );
}

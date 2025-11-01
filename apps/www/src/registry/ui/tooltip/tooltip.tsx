"use client";

import {
  composeRenderProps,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";
import { TooltipStyles } from "./styles";

export interface TooltipRootProps
  extends React.ComponentProps<typeof TooltipTrigger> {
  /**
   * The delay time for the tooltip to show up. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance).
   * @default 0
   */
  delay?: number;

  /**
   * The delay time for the tooltip to close. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Warmup-and-cooldown).
   * @default 300
   */
  closeDelay?: number;
}

export function TooltipRoot({
  delay = 0,
  closeDelay = 300,
  ...props
}: TooltipRootProps) {
  return (
    <TooltipTrigger
      closeDelay={closeDelay}
      data-slot="tooltip-root"
      delay={delay}
      {...props}
    />
  );
}

export interface TooltipContentProps
  extends React.ComponentProps<typeof Tooltip> {
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   * @default 8
   */
  offset?: number;
}

export function TooltipContent({
  className,
  offset = 8,
  ...props
}: TooltipContentProps) {
  return (
    <Tooltip
      className={composeRenderProps(className, (className) =>
        TooltipStyles.Content({ className })
      )}
      data-slot="tooltip-content"
      offset={offset}
      {...props}
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
        className={TooltipStyles.Arrow({ className })}
        height={10}
        viewBox="0 0 10 10"
        width={10}
      >
        <path d="M0 0 L5 5 L10 0" />
      </svg>
    </OverlayArrow>
  );
}

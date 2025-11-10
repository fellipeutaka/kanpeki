"use client";

import {
  Button,
  composeRenderProps,
  DialogTrigger,
  OverlayArrow,
  Popover,
  PopoverContext,
  useSlottedContext,
} from "react-aria-components";
import { PopoverStyles } from "./styles";

export interface PopoverRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function PopoverRoot(props: PopoverRootProps) {
  return <DialogTrigger data-slot="popover" {...props} />;
}

export interface PopoverTriggerProps
  extends React.ComponentProps<typeof Button> {}

export function PopoverTrigger(props: PopoverTriggerProps) {
  return <Button data-slot="popover-trigger" {...props} />;
}

export interface PopoverContentProps
  extends React.ComponentProps<typeof Popover> {
  /**
   * The additional offset applied along the main axis between the element and its
   * anchor element.
   * @default 4
   */
  offset?: number;
}

export function PopoverContent({
  className,
  offset = 4,
  placement,
  ...props
}: PopoverContentProps) {
  const popoverContext = useSlottedContext(PopoverContext);
  const isMenu = popoverContext?.trigger !== "DialogTrigger";
  const isSubmenuTrigger = popoverContext?.trigger === "SubmenuTrigger";
  const _placement = placement ?? (isSubmenuTrigger ? "right" : "bottom start");

  return (
    <Popover
      className={composeRenderProps(className, (className) =>
        PopoverStyles.Content({
          className,
          isMenu,
        })
      )}
      data-slot="popover-content"
      offset={offset}
      placement={_placement}
      {...props}
    />
  );
}

export interface PopoverArrowProps
  extends React.ComponentProps<typeof OverlayArrow> {}

export function PopoverArrow({
  className,
  children,
  ...props
}: PopoverArrowProps) {
  return (
    <OverlayArrow
      className={composeRenderProps(className, (className) =>
        PopoverStyles.Arrow({
          className,
        })
      )}
      data-slot="popover-arrow"
      {...props}
    >
      {composeRenderProps(
        children,
        (children) =>
          children ?? (
            <svg aria-hidden="true" height={12} viewBox="0 0 12 12" width={12}>
              <path d="M0 0 L6 6 L12 0" />
            </svg>
          )
      )}
    </OverlayArrow>
  );
}

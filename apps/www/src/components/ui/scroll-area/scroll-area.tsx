"use client";

import { Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";
import { ScrollAreaStyles } from "./styles";

export interface ScrollAreaRootProps
  extends React.ComponentProps<typeof Root> {}

export function ScrollAreaRoot({ className, ...props }: ScrollAreaRootProps) {
  return <Root {...props} className={ScrollAreaStyles.Root({ className })} />;
}

export interface ScrollAreaViewportProps
  extends React.ComponentProps<typeof Viewport> {}

export function ScrollAreaViewport({
  className,
  ...props
}: ScrollAreaViewportProps) {
  return (
    <Viewport {...props} className={ScrollAreaStyles.Viewport({ className })} />
  );
}

export interface ScrollAreaScrollbarProps
  extends React.ComponentProps<typeof Scrollbar> {
  orientation: "vertical" | "horizontal";
}

export function ScrollAreaScrollbar({
  className,
  orientation,
  ...props
}: ScrollAreaScrollbarProps) {
  return (
    <Scrollbar
      {...props}
      orientation={orientation}
      className={ScrollAreaStyles.Scrollbar({ className, orientation })}
    />
  );
}

export interface ScrollAreaThumbProps
  extends React.ComponentProps<typeof Thumb> {}

export function ScrollAreaThumb({ className, ...props }: ScrollAreaThumbProps) {
  return <Thumb {...props} className={ScrollAreaStyles.Thumb({ className })} />;
}

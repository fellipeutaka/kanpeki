"use client";

import { Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";
import { cva } from "~/lib/cva";

export const ScrollAreaStyles = {
  Root: cva({
    base: ["relative overflow-hidden"],
  }),
  Viewport: cva({
    base: ["size-full rounded-[inherit]"],
  }),
  Scrollbar: cva({
    base: ["flex touch-none select-none transition-colors"],
    variants: {
      orientation: {
        vertical: ["h-full w-2.5 border-l border-l-transparent p-px"],
        horizontal: ["h-2.5 flex-col border-t border-t-transparent p-px"],
      },
    },
  }),
  Thumb: cva({
    base: ["relative flex-1 rounded-full bg-border"],
  }),
};

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

export const ScrollArea = Object.assign(
  {},
  {
    Root: ScrollAreaRoot,
    Viewport: ScrollAreaViewport,
    Scrollbar: ScrollAreaScrollbar,
    Thumb: ScrollAreaThumb,
  }
);

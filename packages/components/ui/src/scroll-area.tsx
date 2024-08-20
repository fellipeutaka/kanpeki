"use client";

import { Root, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";
import { tv } from "tailwind-variants";

export const ScrollAreaStyles = {
  Root: tv({
    base: ["relative overflow-hidden"],
  }),
  Viewport: tv({
    base: ["size-full rounded-[inherit]"],
  }),
  Scrollbar: tv({
    base: ["flex touch-none select-none transition-colors"],
    variants: {
      orientation: {
        vertical: ["h-full w-2.5 border-l border-l-transparent p-px"],
        horizontal: ["h-2.5 flex-col border-t border-t-transparent p-px"],
      },
    },
  }),
  Thumb: tv({
    base: ["relative flex-1 rounded-full bg-border"],
  }),
};

export type ScrollAreaRootProps = React.ComponentProps<typeof Root>;

export function ScrollAreaRoot({ className, ...props }: ScrollAreaRootProps) {
  return <Root {...props} className={ScrollAreaStyles.Root({ className })} />;
}

export type ScrollAreaViewportProps = React.ComponentProps<typeof Viewport>;

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

export type ScrollAreaThumbProps = React.ComponentProps<typeof Thumb>;

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

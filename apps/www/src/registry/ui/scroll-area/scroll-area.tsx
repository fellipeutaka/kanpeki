"use client";

import { ScrollArea } from "@base-ui/react/scroll-area";
import { composeRenderProps } from "react-aria-components";
import { ScrollAreaStyles } from "./styles";

export interface ScrollAreaRootProps
  extends React.ComponentProps<typeof ScrollArea.Root> {}

export function ScrollAreaRoot({ className, ...props }: ScrollAreaRootProps) {
  return (
    <ScrollArea.Root
      {...props}
      className={composeRenderProps(className, (className) =>
        ScrollAreaStyles.Root({ className })
      )}
      data-slot="scroll-area-root"
    />
  );
}

export interface ScrollAreaViewportProps
  extends React.ComponentProps<typeof ScrollArea.Viewport> {
  scrollFade?: boolean;
  scrollbarGutter?: boolean;
}

export function ScrollAreaViewport({
  className,
  scrollFade = false,
  scrollbarGutter = false,
  ...props
}: ScrollAreaViewportProps) {
  return (
    <ScrollArea.Viewport
      {...props}
      className={composeRenderProps(className, (className) =>
        ScrollAreaStyles.Viewport({ className, scrollFade, scrollbarGutter })
      )}
      data-slot="scroll-area-viewport"
    />
  );
}

export interface ScrollAreaScrollbarProps
  extends React.ComponentProps<typeof ScrollArea.Scrollbar> {}

export function ScrollAreaScrollbar({
  className,
  orientation,
  ...props
}: ScrollAreaScrollbarProps) {
  return (
    <ScrollArea.Scrollbar
      {...props}
      className={composeRenderProps(className, (className) =>
        ScrollAreaStyles.Scrollbar({ className, orientation })
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
    />
  );
}

export interface ScrollAreaThumbProps
  extends React.ComponentProps<typeof ScrollArea.Thumb> {}

export function ScrollAreaThumb({ className, ...props }: ScrollAreaThumbProps) {
  return (
    <ScrollArea.Thumb
      {...props}
      className={composeRenderProps(className, (className) =>
        ScrollAreaStyles.Thumb({ className })
      )}
      data-slot="scroll-area-thumb"
    />
  );
}

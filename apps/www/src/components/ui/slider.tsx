"use client";

import { useContext } from "react";
import {
  SliderOutput as SliderOutputPrimitive,
  Slider as SliderPrimitive,
  SliderStateContext,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from "react-aria-components";
import { cva } from "~/lib/cva";

export const SliderStyles = {
  Root: cva({
    base: [
      "flex flex-col gap-2",
      "orientation-vertical:h-56 orientation-vertical:items-center",
      "orientation-horizontal:w-full",
      "disabled:opacity-50",
    ],
  }),
  Header: cva({
    base: ["flex items-center justify-between gap-2"],
  }),
  Output: cva({
    base: ["text-muted-fg text-sm tabular-nums"],
  }),
  Track: cva({
    base: [
      "group/track relative cursor-pointer rounded-full bg-zinc-200 disabled:cursor-default disabled:bg-bg-disabled dark:bg-zinc-800",
      "orientation-horizontal:h-1.5 orientation-horizontal:w-full orientation-vertical:w-1.5 orientation-vertical:flex-1 grow",
    ],
  }),
  Thumb: cva({
    base: [
      "z-50 dragging:cursor-grabbing border border-zinc-200 outline-none focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20",
      "rounded-full bg-white transition-[width,height]",
      "!-translate-x-1/2 !-translate-y-1/2 absolute top-1/2 left-1/2 block",
      "disabled:border disabled:border-bg disabled:bg-bg-disabled",
      "orientation-horizontal:h-2 orientation-vertical:w-2",
      "dragging:size-[1.30rem] size-[1.15rem] dragging:border-primary",
    ],
  }),
  Filler: cva({
    base: [
      "rounded-full bg-primary group-disabled/track:bg-bg-disabled",
      "group-orientation-horizontal/top-0 pointer-events-none absolute group-orientation-vertical/track:bottom-0 group-orientation-horizontal/track:h-full group-orientation-vertical/track:w-full",
    ],
  }),
};

export interface SliderRootProps
  extends React.ComponentProps<typeof SliderPrimitive> {}

export function SliderRoot({ className, ...props }: SliderRootProps) {
  return (
    <SliderPrimitive
      {...props}
      className={(values) =>
        SliderStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface SliderHeaderProps extends React.ComponentProps<"div"> {}

export function SliderHeader({ className, ...props }: SliderHeaderProps) {
  return <div {...props} className={SliderStyles.Header({ className })} />;
}

export interface SliderOutputProps
  extends React.ComponentProps<typeof SliderOutputPrimitive> {}

export function SliderOutput({
  className,
  children,
  ...props
}: SliderOutputProps) {
  return (
    <SliderOutputPrimitive
      {...props}
      className={(values) =>
        SliderStyles.Output({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    >
      {children ??
        (({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(" - "))}
    </SliderOutputPrimitive>
  );
}

export interface SliderTrackProps
  extends React.ComponentProps<typeof SliderTrackPrimitive> {}

export function SliderTrack({ className, ...props }: SliderTrackProps) {
  return (
    <SliderTrackPrimitive
      {...props}
      className={(values) =>
        SliderStyles.Track({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface SliderThumbProps
  extends React.ComponentProps<typeof SliderThumbPrimitive> {}

export function SliderThumb({ className, ...props }: SliderThumbProps) {
  return (
    <SliderThumbPrimitive
      {...props}
      className={(values) =>
        SliderStyles.Thumb({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface SliderFillerProps extends React.ComponentProps<"div"> {}

export function SliderFiller({ className, ...props }: SliderFillerProps) {
  const context = useContext(SliderStateContext);

  if (!context) {
    throw new Error("SliderFiller should be used within a Slider component.");
  }

  const { orientation, getThumbPercent, values } = context;

  return (
    <div
      {...props}
      style={
        values.length === 1
          ? orientation === "horizontal"
            ? { width: `${getThumbPercent(0) * 100}%` }
            : { height: `${getThumbPercent(0) * 100}%` }
          : orientation === "horizontal"
            ? {
                left: `${getThumbPercent(0) * 100}%`,
                width: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`,
              }
            : {
                bottom: `${getThumbPercent(0) * 100}%`,
                height: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`,
              }
      }
      className={SliderStyles.Filler({ className })}
    />
  );
}

export const Slider = Object.assign(
  {},
  {
    Root: SliderRoot,
    Header: SliderHeader,
    Output: SliderOutput,
    Track: SliderTrack,
    Thumb: SliderThumb,
    Filler: SliderFiller,
  }
);

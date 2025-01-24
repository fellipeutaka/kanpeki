"use client";

import { useContext } from "react";
import {
  SliderOutput as SliderOutputPrimitive,
  Slider as SliderPrimitive,
  SliderStateContext,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from "react-aria-components";
import { SliderStyles } from "./styles";

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

"use client";

import { use } from "react";
import {
  composeRenderProps,
  SliderOutput as Output,
  Slider,
  SliderStateContext,
  SliderThumb as Thumb,
  SliderTrack as Track,
} from "react-aria-components";
import { SliderStyles } from "./styles";

export interface SliderRootProps<T extends number | number[]>
  extends React.ComponentProps<typeof Slider<T>> {}

export function SliderRoot<T extends number | number[]>({
  className,
  ...props
}: SliderRootProps<T>) {
  return (
    <Slider
      {...props}
      className={composeRenderProps(className, (className) =>
        SliderStyles.Root({ className })
      )}
      data-slot="slider-root"
    />
  );
}

export interface SliderTrackProps extends React.ComponentProps<typeof Track> {}

export function SliderTrack({ className, ...props }: SliderTrackProps) {
  return (
    <Track
      {...props}
      className={composeRenderProps(className, (className) =>
        SliderStyles.Track({ className })
      )}
      data-slot="slider-track"
    />
  );
}

export interface SliderThumbProps extends React.ComponentProps<typeof Thumb> {}

export function SliderThumb({ className, ...props }: SliderThumbProps) {
  const context = use(SliderStateContext);

  if (!context) {
    throw new Error("SliderThumb should be used within a Slider component.");
  }

  return context.values.map((_value, idx) => (
    <Thumb
      {...props}
      className={composeRenderProps(className, (className) =>
        SliderStyles.Thumb({ className })
      )}
      data-slot="slider-thumb"
      index={idx}
      // biome-ignore lint/suspicious/noArrayIndexKey: Using index as key is acceptable here since SliderThumbs are generated based on the number of values in the slider.
      key={idx}
    />
  ));
}

export interface SliderOutputProps
  extends React.ComponentProps<typeof Output> {}

export function SliderOutput({ className, ...props }: SliderOutputProps) {
  return (
    <Output
      {...props}
      className={composeRenderProps(className, (className) =>
        SliderStyles.Output({ className })
      )}
      data-slot="slider-output"
    />
  );
}

interface GetSliderRangeStyleProps {
  orientation: "horizontal" | "vertical";
  getThumbPercent: (index: number) => number;
  values: number[];
}

function getSliderRangeStyle(
  props: GetSliderRangeStyleProps
): React.CSSProperties {
  const { orientation, getThumbPercent, values } = props;

  if (values.length === 1) {
    return orientation === "horizontal"
      ? { width: `${getThumbPercent(0) * 100}%` }
      : { height: `${getThumbPercent(0) * 100}%` };
  }

  return orientation === "horizontal"
    ? {
        left: `${getThumbPercent(0) * 100}%`,
        width: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`,
      }
    : {
        bottom: `${getThumbPercent(0) * 100}%`,
        height: `${Math.abs(getThumbPercent(0) - getThumbPercent(1)) * 100}%`,
      };
}

export interface SliderRangeProps extends React.ComponentProps<"div"> {}

export function SliderRange({ className, ...props }: SliderRangeProps) {
  const context = use(SliderStateContext);

  if (!context) {
    throw new Error("SliderRange should be used within a Slider component.");
  }

  const { orientation, getThumbPercent, values } = context;

  return (
    <div
      {...props}
      className={SliderStyles.Range({ className })}
      style={getSliderRangeStyle({
        getThumbPercent,
        orientation,
        values,
      })}
    />
  );
}

export interface SliderHeaderProps extends React.ComponentProps<"div"> {}

export function SliderHeader({ className, ...props }: SliderHeaderProps) {
  return (
    <div
      {...props}
      className={SliderStyles.Header({ className })}
      data-slot="slider-header"
    />
  );
}

"use client";

import { Switch as SwitchPrimitive } from "react-aria-components";
import { SwitchStyles } from "./styles";

export interface SwitchRootProps
  extends React.ComponentProps<typeof SwitchPrimitive> {}

export function SwitchRoot({ className, ...props }: SwitchRootProps) {
  return (
    <SwitchPrimitive
      {...props}
      className={(values) =>
        SwitchStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface SwitchTrackProps extends React.ComponentProps<"span"> {}

export function SwitchTrack({ className, ...props }: SwitchTrackProps) {
  return <span {...props} className={SwitchStyles.Track({ className })} />;
}

export interface SwitchThumbProps extends React.ComponentProps<"span"> {}

export function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return <span {...props} className={SwitchStyles.Thumb({ className })} />;
}

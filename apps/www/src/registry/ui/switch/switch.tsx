"use client";

import { composeRenderProps, Switch } from "react-aria-components";
import { SwitchStyles } from "./styles";

export interface SwitchRootProps extends React.ComponentProps<typeof Switch> {}

export function SwitchRoot({ className, ...props }: SwitchRootProps) {
  return (
    <Switch
      {...props}
      className={composeRenderProps(className, (className) =>
        SwitchStyles.Root({
          className,
        })
      )}
      data-slot="switch-root"
    />
  );
}

export interface SwitchTrackProps extends React.ComponentProps<"span"> {}

export function SwitchTrack({ className, ...props }: SwitchTrackProps) {
  return (
    <span
      {...props}
      className={SwitchStyles.Track({ className })}
      data-slot="switch-track"
    />
  );
}

export interface SwitchThumbProps extends React.ComponentProps<"span"> {}

export function SwitchThumb({ className, ...props }: SwitchThumbProps) {
  return (
    <span
      {...props}
      className={SwitchStyles.Thumb({ className })}
      data-slot="switch-thumb"
    />
  );
}

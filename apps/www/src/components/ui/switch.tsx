import { Switch as SwitchPrimitive } from "react-aria-components";
import { cva } from "~/lib/cva";

export const SwitchStyles = {
  Root: cva({
    base: ["group inline-flex touch-none items-center lg:text-sm"],
  }),
  Track: cva({
    base: [
      "group inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input shadow-sm transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      "group-disabled:cursor-not-allowed group-disabled:opacity-50",
      "group-selected:bg-primary",
    ],
  }),
  Thumb: cva({
    base: [
      "pointer-events-none block size-4 translate-x-0 rounded-full bg-bg shadow-lg ring-0 transition-all dark:bg-fg",
      "group-selected:ml-4",
      "group-pressed:w-5",
      "group-selected:group-pressed:ml-3",
    ],
  }),
};

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

export const Switch = Object.assign(
  {},
  {
    Root: SwitchRoot,
    Track: SwitchTrack,
    Thumb: SwitchThumb,
  }
);

"use client";

import { composeRenderProps, DropZone, Text } from "react-aria-components";
import { DropzoneStyles } from "./styles";

export interface DropzoneProviderProps
  extends React.ComponentProps<typeof DropZone> {}

export function DropzoneProvider({
  className,
  ...props
}: DropzoneProviderProps) {
  return (
    <DropZone
      data-slot="dropzone-provider"
      {...props}
      className={composeRenderProps(className, (className) =>
        DropzoneStyles.Provider({ className })
      )}
    />
  );
}

export interface DropzoneRootProps extends React.ComponentProps<"div"> {}

export function DropzoneRoot({ className, ...props }: DropzoneRootProps) {
  return (
    <div
      data-slot="dropzone-root"
      {...props}
      className={DropzoneStyles.Root({ className })}
    />
  );
}

export interface DropzoneLabelProps extends React.ComponentProps<typeof Text> {}

export function DropzoneLabel({ className, ...props }: DropzoneLabelProps) {
  return (
    <Text
      className={DropzoneStyles.Label({ className })}
      data-slot="dropzone-label"
      slot="label"
      {...props}
    />
  );
}

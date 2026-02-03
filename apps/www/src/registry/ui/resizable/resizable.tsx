"use client";

import { GripVerticalIcon } from "lucide-react";

import { Group, Panel, Separator } from "react-resizable-panels";
import { ResizableStyles } from "./styles";

export interface ResizableRootProps
  extends React.ComponentProps<typeof Group> {}

export function ResizableRoot({ className, ...props }: ResizableRootProps) {
  return (
    <Group
      className={ResizableStyles.Root({ className })}
      data-slot="resizable-root"
      {...props}
    />
  );
}

export interface ResizablePanelProps
  extends React.ComponentProps<typeof Panel> {}

export function ResizablePanel(props: ResizablePanelProps) {
  return <Panel data-slot="resizable-panel" {...props} />;
}

export interface ResizableSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function ResizableSeparator({
  className,
  ...props
}: ResizableSeparatorProps) {
  return (
    <Separator
      className={ResizableStyles.Separator({ className })}
      data-slot="resizable-separator"
      {...props}
    />
  );
}

export interface ResizableHandleProps extends React.ComponentProps<"div"> {}

export function ResizableHandle({
  className,
  children,
  ...props
}: ResizableHandleProps) {
  return (
    <div
      className={ResizableStyles.Handle({ className })}
      data-slot="resizable-handle"
      {...props}
    >
      {children ?? <GripVerticalIcon className="size-2.5" />}
    </div>
  );
}

"use client";

import { createContext, use } from "react";
import {
  composeRenderProps,
  ProgressBar,
  type ProgressBarRenderProps,
} from "react-aria-components";
import { ProgressStyles } from "./styles";

const InternalProgressContext = createContext<ProgressBarRenderProps | null>(
  null
);

export interface ProgressRootProps
  extends React.ComponentProps<typeof ProgressBar> {}

export function ProgressRoot({
  className,
  children,
  ...props
}: ProgressRootProps) {
  return (
    <ProgressBar
      className={composeRenderProps(className, (className) =>
        ProgressStyles.Root({ className })
      )}
      data-slot="progress-root"
      {...props}
    >
      {composeRenderProps(children, (children, values) => (
        <InternalProgressContext value={values}>
          {children}
        </InternalProgressContext>
      ))}
    </ProgressBar>
  );
}

export interface ProgressIndicatorProps extends React.ComponentProps<"div"> {}

export function ProgressIndicator({
  className,
  ...props
}: ProgressIndicatorProps) {
  const ctx = use(InternalProgressContext);
  if (!ctx) {
    throw new Error(
      "ProgressIndicator must be used within a Progress component"
    );
  }
  const { percentage = 0 } = ctx;

  return (
    <div
      {...props}
      className={ProgressStyles.Indicator({ className })}
      data-slot="progress-indicator"
      style={{ transform: `translateX(-${100 - percentage}%)` }}
    />
  );
}

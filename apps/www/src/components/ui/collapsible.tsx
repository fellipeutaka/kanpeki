"use client";

import { Content, Root, Trigger } from "@radix-ui/react-collapsible";
import { cva } from "~/lib/cva";

// Add this to your tailwind.config.ts file
// keyframes: {
//   "collapsible-up": {
//     from: {
//       height: "var(--radix-collapsible-content-height)",
//     },
//     to: {
//       height: "var(--collapsible-closed-height, 0)",
//       opacity: "var(--collapsible-opacity-target, 0)",
//     },
//   },
//   "collapsible-down": {
//     from: {
//       height: "var(--collapsible-closed-height, 0)",
//       opacity: "var(--collapsible-opacity-target, 0)",
//     },
//     to: {
//       height: "var(--radix-collapsible-content-height)",
//     },
//   },
// },
// animation: {
//   "collapsible-up": "collapsible-up 150ms ease-out",
//   "collapsible-down": "collapsible-down 150ms ease-out",
// },

export const CollapsibleStyles = {
  Content: cva({
    base: ["overflow-hidden"],
    variants: {
      forceMount: {
        false: [
          "data-[state=closed]:animate-collapsible-up",
          "data-[state=open]:animate-collapsible-down",
        ],
      },
    },
    defaultVariants: {
      forceMount: false,
    },
  }),
};

export interface CollapsibleRootProps
  extends React.ComponentProps<typeof Root> {}
export const CollapsibleRoot = Root;

export interface CollapsibleTriggerProps
  extends React.ComponentProps<typeof Trigger> {}
export const CollapsibleTrigger = Trigger;

export interface CollapsibleContentProps
  extends React.ComponentProps<typeof Content> {}

export function CollapsibleContent({
  className,
  forceMount,
  ...props
}: CollapsibleContentProps) {
  return (
    <Content
      forceMount={forceMount}
      className={CollapsibleStyles.Content({ className, forceMount })}
      {...props}
    />
  );
}

export const Collapsible = Object.assign(
  {},
  {
    Root: CollapsibleRoot,
    Trigger: CollapsibleTrigger,
    Content: CollapsibleContent,
  }
);

"use client";

import { Content, Root, Trigger } from "@radix-ui/react-collapsible";
import { tv } from "tailwind-variants";

export const CollapsibleStyles = {
  Content: tv({
    base: ["overflow-hidden"],
    variants: {
      forceMount: {
        false: [
          "data-[state=closed]:animate-collapsible-up",
          "data-[state=open]:animate-collapsible-down",
        ],
      },
    },
  }),
};

export const CollapsibleRoot = Root;

export const CollapsibleTrigger = Trigger;

export type CollapsibleContentProps = React.ComponentProps<typeof Content>;

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

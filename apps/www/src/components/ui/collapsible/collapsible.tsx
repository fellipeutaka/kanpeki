"use client";

import {
  Button,
  type ButtonProps,
  Disclosure,
  DisclosurePanel,
} from "react-aria-components";
import { CollapsibleStyles } from "./styles";

export interface CollapsibleRootProps
  extends React.ComponentProps<typeof Disclosure> {}
export const CollapsibleRoot = Disclosure;

export interface CollapsibleTriggerProps extends Omit<ButtonProps, "slot"> {}

export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
  return <Button {...props} slot="trigger" />;
}

export interface CollapsibleContentProps
  extends React.ComponentProps<typeof DisclosurePanel> {}

export function CollapsibleContent({
  className,
  ...props
}: CollapsibleContentProps) {
  return (
    <DisclosurePanel
      {...props}
      className={(values) =>
        CollapsibleStyles.Content({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

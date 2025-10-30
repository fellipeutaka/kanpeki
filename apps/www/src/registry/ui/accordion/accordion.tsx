"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  Button,
  composeRenderProps,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";
import { AccordionStyles } from "./styles";

export interface AccordionRootProps
  extends React.ComponentProps<typeof DisclosureGroup> {}

export function AccordionRoot(props: AccordionRootProps) {
  return <DisclosureGroup data-slot="accordion-root" {...props} />;
}

export interface AccordionItemProps
  extends React.ComponentProps<typeof Disclosure> {}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <Disclosure
      className={composeRenderProps(className, (className) =>
        AccordionStyles.Item({ className })
      )}
      data-slot="accordion-item"
      {...props}
    />
  );
}

export interface AccordionTriggerProps
  extends Omit<React.ComponentProps<typeof Button>, "slot"> {}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <Button
      className={composeRenderProps(className, (className) =>
        AccordionStyles.Trigger({ className })
      )}
      data-slot="accordion-trigger"
      slot="trigger"
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <ChevronDownIcon className={AccordionStyles.Icon()} />
        </>
      ))}
    </Button>
  );
}

export interface AccordionContentProps
  extends React.ComponentProps<typeof DisclosurePanel> {}

export function AccordionContent({
  className,
  ...props
}: AccordionContentProps) {
  return (
    <DisclosurePanel
      className={AccordionStyles.Content({
        className,
      })}
      data-slot="accordion-content"
      {...props}
    />
  );
}

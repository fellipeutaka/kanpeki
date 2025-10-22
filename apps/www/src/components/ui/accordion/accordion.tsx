"use client";

import {
  Button,
  type ButtonProps,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";
import { AccordionStyles } from "./styles";

const Icons = {
  ChevronDown: (props) => (
    <svg
      aria-hidden="true"
      height={32}
      viewBox="0 0 24 24"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export interface AccordionRootProps
  extends React.ComponentProps<typeof DisclosureGroup> {}
export const AccordionRoot = DisclosureGroup;

export interface AccordionItemProps
  extends React.ComponentProps<typeof Disclosure> {}

export function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <Disclosure
      {...props}
      className={(values) =>
        AccordionStyles.Item({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface AccordionTriggerProps extends Omit<ButtonProps, "slot"> {}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <Button
      {...props}
      className={(values) =>
        AccordionStyles.Trigger({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
      slot="trigger"
    >
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          <Icons.ChevronDown className={AccordionStyles.TriggerIcon()} />
        </>
      )}
    </Button>
  );
}

export interface AccordionContentProps
  extends React.ComponentProps<typeof DisclosurePanel> {}

export function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <DisclosurePanel
      {...props}
      className={(values) =>
        AccordionStyles.Content({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    >
      <div className="pt-0 pb-4">{children}</div>
    </DisclosurePanel>
  );
}

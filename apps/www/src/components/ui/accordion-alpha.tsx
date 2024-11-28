"use client";

import {
  Button,
  type ButtonProps,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";
import { cva } from "~/lib/cva";

const Icons = {
  ChevronDown: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 9l6 6 6-6"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export const AccordionStyles = {
  Item: cva({
    base: ["group border-b"],
  }),
  Trigger: cva({
    base: [
      "flex w-full flex-1 items-center justify-between py-4 text-left font-medium text-sm outline-none transition-all hover:underline",
    ],
  }),
  TriggerIcon: cva({
    base: [
      "size-4 shrink-0 text-muted-fg transition-transform duration-200 group-data-[expanded=true]:rotate-180",
    ],
  }),
  Content: cva({
    base: [
      "grid grid-rows-[0] overflow-hidden text-sm transition-all duration-500 group-data-[expanded=true]:grid-rows-1",
    ],
  }),
};

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

export const Accordion = Object.assign(
  {},
  {
    Root: AccordionRoot,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
  }
);

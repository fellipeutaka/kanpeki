"use client";

import {
  Button,
  Select as SelectPrimitive,
  SelectValue,
} from "react-aria-components";
import { ListBoxItem, ListBoxPicker } from "../list-box";
import { PopoverContent } from "../popover";
import { TextFieldStyles } from "../textfield/styles";
import { SelectStyles } from "./styles";

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

export interface SelectRootProps<T extends object>
  extends React.ComponentProps<typeof SelectPrimitive<T>> {}

export function SelectRoot<T extends object>({
  className,
  ...props
}: SelectRootProps<T>) {
  return (
    <SelectPrimitive
      {...props}
      className={TextFieldStyles.Provider({ className })}
    />
  );
}

export interface SelectTriggerProps
  extends Omit<React.ComponentProps<typeof Button>, "children"> {}

export function SelectTrigger({ className, ...props }: SelectTriggerProps) {
  return (
    <Button {...props} className={SelectStyles.Trigger({ className })}>
      <SelectValue className="select-none text-base placeholder-shown:text-muted-fg lg:text-sm [&_[slot=description]]:hidden" />
      <Icons.ChevronDown
        aria-hidden="true"
        className="size-4 shrink-0 text-muted-fg duration-200 group-open:rotate-180 group-disabled:opacity-50"
      />
    </Button>
  );
}

export interface SelectPopoverProps
  extends React.ComponentProps<typeof PopoverContent> {}
export const SelectPopover = PopoverContent;

export interface SelectContentProps
  extends React.ComponentProps<typeof ListBoxPicker> {}
export const SelectContent = ListBoxPicker;

export interface SelectItemProps
  extends React.ComponentProps<typeof ListBoxItem> {}
export const SelectItem = ListBoxItem;

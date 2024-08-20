"use client";

import {
  CheckboxItem,
  Content,
  Group,
  Item,
  ItemIndicator,
  Label,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";
import { Icons } from "./icons";

export const DropdownMenuStyles = {
  SubTrigger: tv({
    base: [
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "focus:bg-accent data-[state=open]:bg-accent",
    ],
    variants: {
      inset: {
        true: ["pl-8"],
      },
    },
  }),
  SubContent: tv({
    base: [
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
      "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
    ],
  }),
  Content: tv({
    base: [
      "z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
    ],
  }),
  Item: tv({
    base: [
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    variants: {
      inset: {
        true: ["pl-8"],
      },
    },
  }),
  CheckboxItem: tv({
    base: [
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
  }),
  RadioItem: tv({
    base: [
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none transition-colors",
      "focus:bg-accent focus:text-accent-foreground",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
  }),
  Label: tv({
    base: ["px-2 py-1.5 font-semibold text-sm"],
    variants: {
      inset: {
        true: ["pl-8"],
      },
    },
  }),
  Separator: tv({
    base: ["-mx-1 my-1 h-px bg-muted"],
  }),
  Shortcut: tv({
    base: ["ml-auto text-xs tracking-widest opacity-60"],
  }),
};

export const DropdownMenuRoot = Root;

export const DropdownMenuTrigger = Trigger;

export const DropdownMenuGroup = Group;

export const DropdownMenuPortal = Portal;

export const DropdownMenuSub = Sub;

export const DropdownMenuRadioGroup = RadioGroup;

export type DropdownMenuSubTriggerProps = React.ComponentProps<
  typeof SubTrigger
> & {
  inset?: boolean;
};

export function DropdownMenuSubTrigger({
  ref,
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <SubTrigger
      ref={ref}
      className={DropdownMenuStyles.SubTrigger({ className, inset })}
      {...props}
    >
      {children}
      <Icons.ChevronRight className="ml-auto size-4" />
    </SubTrigger>
  );
}

export type DropdownMenuSubContentProps = React.ComponentProps<
  typeof SubContent
>;

export function DropdownMenuSubContent({
  ref,
  className,
  ...props
}: DropdownMenuSubContentProps) {
  return (
    <SubContent
      ref={ref}
      className={DropdownMenuStyles.SubContent({ className })}
      {...props}
    />
  );
}

export const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={DropdownMenuStyles.Content({ className })}
      {...props}
    />
  </Portal>
));
DropdownMenuContent.displayName = Content.displayName;

export const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Item
    ref={ref}
    className={DropdownMenuStyles.Item({ className, inset })}
    {...props}
  />
));
DropdownMenuItem.displayName = Item.displayName;

export const DropdownMenuCheckboxItem = forwardRef<
  React.ElementRef<typeof CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={DropdownMenuStyles.CheckboxItem({ className })}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <ItemIndicator>
        <Icons.Check className="size-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = CheckboxItem.displayName;

export const DropdownMenuRadioItem = forwardRef<
  React.ElementRef<typeof RadioItem>,
  React.ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...props }, ref) => (
  <RadioItem
    ref={ref}
    className={DropdownMenuStyles.RadioItem({ className })}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ItemIndicator>
        <Icons.Circle className="size-2 fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
DropdownMenuRadioItem.displayName = RadioItem.displayName;

export const DropdownMenuLabel = forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={DropdownMenuStyles.Label({ className, inset })}
    {...props}
  />
));
DropdownMenuLabel.displayName = Label.displayName;

export const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={DropdownMenuStyles.Separator({ className })}
    {...props}
  />
));
DropdownMenuSeparator.displayName = Separator.displayName;

export const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={DropdownMenuStyles.Shortcut({ className })} {...props} />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export const DropdownMenu = Object.assign(
  {},
  {
    Root: DropdownMenuRoot,
    Trigger: DropdownMenuTrigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem,
    CheckboxItem: DropdownMenuCheckboxItem,
    RadioItem: DropdownMenuRadioItem,
    Label: DropdownMenuLabel,
    Separator: DropdownMenuSeparator,
    Shortcut: DropdownMenuShortcut,
    Group: DropdownMenuGroup,
    Portal: DropdownMenuPortal,
    Sub: DropdownMenuSub,
    SubContent: DropdownMenuSubContent,
    SubTrigger: DropdownMenuSubTrigger,
    RadioGroup: DropdownMenuRadioGroup,
  }
);

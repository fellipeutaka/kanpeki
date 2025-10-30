"use client";

import type { VariantProps } from "cva";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import {
  Button,
  composeRenderProps,
  Header,
  MenuItem as Item,
  Menu,
  MenuSection,
  MenuTrigger as Root,
  Separator,
  SubmenuTrigger,
} from "react-aria-components";

import { cn } from "~/registry/lib/cva";
import { MenuStyles } from "./styles";

export interface MenuRootProps extends React.ComponentProps<typeof Root> {}

export function MenuRoot(props: MenuRootProps) {
  return <Root data-slot="menu-root" {...props} />;
}

export interface MenuTriggerProps extends React.ComponentProps<typeof Button> {}

export function MenuTrigger(props: MenuTriggerProps) {
  return <Button data-slot="menu-trigger" {...props} />;
}

export interface MenuContentProps<T extends object>
  extends React.ComponentProps<typeof Menu<T>>,
    VariantProps<typeof MenuStyles.Content> {}

export function MenuContent<T extends object>({
  className,
  variant,
  ...props
}: MenuContentProps<T>) {
  return (
    <Menu
      className={composeRenderProps(className, (className) =>
        MenuStyles.Content({ className, variant })
      )}
      data-slot="menu-content"
      {...props}
    />
  );
}

export interface MenuGroupProps
  extends React.ComponentProps<typeof MenuSection> {}

export function MenuGroup(props: MenuGroupProps) {
  return <MenuSection data-slot="menu-group" {...props} />;
}

export interface MenuItemProps
  extends React.ComponentProps<typeof Item>,
    VariantProps<typeof MenuStyles.Item> {}

export function MenuItem({
  className,
  inset,
  variant,
  children,
  ...props
}: MenuItemProps) {
  return (
    <Item
      className={composeRenderProps(className, (className) =>
        MenuStyles.Item({ className, inset, variant })
      )}
      data-inset={inset}
      data-slot="menu-item"
      {...props}
    >
      {composeRenderProps(children, (children, values) => (
        <>
          <span
            className="flex size-3.5 items-center justify-center empty:hidden"
            data-slot="menu-item-indicator"
          >
            {values.selectionMode === "single" && (
              <CircleIcon
                className="size-2 fill-current text-current opacity-0 transition-opacity group-selected:opacity-100"
                data-slot="indicator"
              />
            )}

            {values.selectionMode === "multiple" && (
              <CheckIcon
                className="size-4 text-current opacity-0 transition-opacity group-selected:opacity-100"
                data-slot="checked-icon"
              />
            )}
          </span>

          {children}
          {values.hasSubmenu && (
            <ChevronRightIcon className="ml-auto size-4" data-slot="chevron" />
          )}
        </>
      ))}
    </Item>
  );
}

export interface MenuLabelProps extends React.ComponentProps<typeof Header> {
  inset?: boolean;
}

export function MenuLabel({ className, inset, ...props }: MenuLabelProps) {
  return (
    <Header
      className={cn(
        "px-2 py-1.5 font-medium text-sm data-[inset]:pl-8",
        className
      )}
      data-inset={inset}
      data-slot="menu-label"
      {...props}
    />
  );
}

export interface MenuSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  return (
    <Separator
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      data-slot="menu-separator"
      {...props}
    />
  );
}

export interface MenuSubProps
  extends React.ComponentProps<typeof SubmenuTrigger> {}

export function MenuSub(props: MenuSubProps) {
  return <SubmenuTrigger data-slot="menu-sub" {...props} />;
}

export interface MenuEmptyProps extends React.ComponentProps<"div"> {}

export function MenuEmpty({ className, ...props }: MenuEmptyProps) {
  return (
    <div
      className={MenuStyles.Empty({ className })}
      data-slot="menu-empty"
      {...props}
    />
  );
}

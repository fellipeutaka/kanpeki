"use client";

import { Autocomplete, Keyboard, useFilter } from "react-aria-components";
import {
  DropdownMenu,
  type DropdownMenuContentProps,
  type DropdownMenuGroupProps,
  type DropdownMenuHeaderProps,
  type DropdownMenuItemProps,
  type DropdownMenuSeparatorProps,
} from "../dropdown-menu";
import { CommandStyles } from "./styles";

export interface CommandRootProps
  extends React.ComponentProps<typeof Autocomplete> {
  filterOptions?: Parameters<typeof useFilter>[0];
}

export function CommandRoot({
  filter,
  filterOptions,
  ...props
}: CommandRootProps) {
  const { contains } = useFilter({ sensitivity: "base", ...filterOptions });

  return <Autocomplete filter={filter ?? contains} {...props} />;
}

export interface CommandListProps<T extends object>
  extends DropdownMenuContentProps<T> {}

export function CommandList<T extends object>(props: CommandListProps<T>) {
  return <DropdownMenu.Content {...props} />;
}

export interface CommandHeaderProps extends DropdownMenuHeaderProps {}

export function CommandHeader({ className, ...props }: CommandHeaderProps) {
  return (
    <DropdownMenu.Header
      {...props}
      className={CommandStyles.Header({ className })}
    />
  );
}

export interface CommandItemProps<T extends object>
  extends DropdownMenuItemProps<T> {}

export function CommandItem<T extends object>(props: CommandItemProps<T>) {
  return <DropdownMenu.Item {...props} data-slot="command-item" />;
}

export interface CommandGroupProps extends DropdownMenuGroupProps {}
export const CommandGroup = DropdownMenu.Group;

export interface CommandEmptyProps extends React.ComponentProps<"div"> {}

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <div
      role="presentation"
      {...props}
      className={CommandStyles.Empty({ className })}
    />
  );
}

export interface CommandSeparatorProps extends DropdownMenuSeparatorProps {}
export const CommandSeparator = DropdownMenu.Separator;

export interface CommandShortcutProps
  extends React.ComponentProps<typeof Keyboard> {}
export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <Keyboard {...props} className={CommandStyles.Shortcut({ className })} />
  );
}

"use client";

import { Command as Cmdk } from "cmdk";
import { tv } from "tailwind-variants";
import { Dialog, type DialogRootProps } from "./dialog";
import { Icons } from "./icons";

export const CommandStyles = {
  Root: tv({
    base: [
      "flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
    ],
  }),
  Dialog: tv({
    base: [
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3",
    ],
  }),
  Input: tv({
    base: [
      "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none",
      "placeholder:text-muted-foreground",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  }),
  List: tv({
    base: ["max-h-[300px] overflow-y-auto overflow-x-hidden"],
  }),
  Empty: tv({
    base: ["py-6 text-center text-sm"],
  }),
  Group: tv({
    base: [
      "overflow-hidden p-1 text-foreground",
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:font-medium",
      "[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs",
    ],
  }),
  Separator: tv({
    base: ["-mx-1 my-1 h-px bg-border"],
  }),
  Item: tv({
    base: [
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
      "aria-selected:bg-accent aria-selected:text-accent-foreground",
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
    ],
  }),
  Shortcut: tv({
    base: ["ml-auto text-muted-foreground text-xs tracking-widest"],
  }),
};

export type CommandRootProps = React.ComponentProps<typeof Cmdk>;

export function CommandRoot({ className, ...props }: CommandRootProps) {
  return <Cmdk {...props} className={CommandStyles.Root({ className })} />;
}

export type CommandDialogProps = DialogRootProps;

export function CommandDialog({ children, ...props }: CommandDialogProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="overflow-hidden p-0">
          <Cmdk className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3">
            {children}
          </Cmdk>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export type CommandInputProps = React.ComponentProps<(typeof Cmdk)["Input"]>;

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div className="flex items-center border-b px-3">
      <Icons.Search className="mr-2 size-4 shrink-0 opacity-50" />
      <Cmdk.Input
        autoFocus
        {...props}
        className={CommandStyles.Input({ className })}
      />
    </div>
  );
}

export type CommandListProps = React.ComponentProps<(typeof Cmdk)["List"]>;

export function CommandList({ className, ...props }: CommandListProps) {
  return <Cmdk.List {...props} className={CommandStyles.List({ className })} />;
}

export type CommandEmptyProps = React.ComponentProps<(typeof Cmdk)["Empty"]>;

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <Cmdk.Empty {...props} className={CommandStyles.Empty({ className })} />
  );
}

export type CommandGroupProps = React.ComponentProps<(typeof Cmdk)["Group"]>;

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <Cmdk.Group {...props} className={CommandStyles.Group({ className })} />
  );
}

export type CommandItemProps = React.ComponentProps<(typeof Cmdk)["Item"]>;

export function CommandItem({ className, ...props }: CommandItemProps) {
  return <Cmdk.Item {...props} className={CommandStyles.Item({ className })} />;
}

export type CommandSeparatorProps = React.ComponentProps<
  (typeof Cmdk)["Separator"]
>;

export function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps) {
  return (
    <Cmdk.Separator
      {...props}
      className={CommandStyles.Separator({ className })}
    />
  );
}

export type CommandShortcutProps = React.ComponentProps<"span">;

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return <span {...props} className={CommandStyles.Shortcut({ className })} />;
}

export const Command = Object.assign(
  {},
  {
    Root: CommandRoot,
    Dialog: CommandDialog,
    Input: CommandInput,
    List: CommandList,
    Empty: CommandEmpty,
    Group: CommandGroup,
    Item: CommandItem,
    Separator: CommandSeparator,
    Shortcut: CommandShortcut,
  },
);

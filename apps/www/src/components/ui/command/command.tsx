"use client";

import { Command as Cmdk } from "cmdk";
import { Input, Keyboard, TextField } from "react-aria-components";
import { Dialog, type DialogContentProps } from "../dialog";
import { CommandStyles } from "./styles";

const Icons = {
  Search: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0m-.691 3.516a4.5 4.5 0 11.707-.707l2.838 2.837a.5.5 0 01-.708.708z"
        clipRule="evenodd"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export interface CommandRootProps extends React.ComponentProps<typeof Cmdk> {}

export function CommandRoot({ className, ...props }: CommandRootProps) {
  return <Cmdk {...props} className={CommandStyles.Root({ className })} />;
}

export interface CommandDialogProps extends DialogContentProps {
  children: React.ReactNode;
}

export function CommandDialog({
  children,
  className,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog.Overlay>
      <Dialog.Modal>
        <Dialog.Content className="overflow-hidden p-0" {...props}>
          <Cmdk className={CommandStyles.Dialog({ className })}>
            {children}
          </Cmdk>
        </Dialog.Content>
      </Dialog.Modal>
    </Dialog.Overlay>
  );
}

export interface CommandInputProps
  extends React.ComponentProps<(typeof Cmdk)["Input"]> {}

export function CommandInput({ className, ...props }: CommandInputProps) {
  return (
    <div className="flex items-center border-b px-3">
      <Icons.Search className="mr-2 size-4 shrink-0 opacity-50" />
      <TextField
        aria-label={props["aria-label"] ?? props.placeholder}
        autoFocus
      >
        <Cmdk.Input asChild>
          <Input
            {...props}
            className={CommandStyles.Input({
              className: [className, "max-sm:hidden"],
            })}
          />
        </Cmdk.Input>
      </TextField>
      <Cmdk.Input
        {...props}
        className={CommandStyles.Input({
          className: [className, "sm:hidden"],
        })}
      />
    </div>
  );
}

export interface CommandListProps
  extends React.ComponentProps<(typeof Cmdk)["List"]> {}

export function CommandList({ className, ...props }: CommandListProps) {
  return <Cmdk.List {...props} className={CommandStyles.List({ className })} />;
}

export interface CommandEmptyProps
  extends React.ComponentProps<(typeof Cmdk)["Empty"]> {}

export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
  return (
    <Cmdk.Empty {...props} className={CommandStyles.Empty({ className })} />
  );
}

export interface CommandGroupProps
  extends React.ComponentProps<(typeof Cmdk)["Group"]> {}

export function CommandGroup({ className, ...props }: CommandGroupProps) {
  return (
    <Cmdk.Group {...props} className={CommandStyles.Group({ className })} />
  );
}

export interface CommandItemProps
  extends React.ComponentProps<(typeof Cmdk)["Item"]> {}

export function CommandItem({ className, ...props }: CommandItemProps) {
  return <Cmdk.Item {...props} className={CommandStyles.Item({ className })} />;
}

export interface CommandSeparatorProps
  extends React.ComponentProps<(typeof Cmdk)["Separator"]> {}

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

export interface CommandShortcutProps
  extends React.ComponentProps<typeof Keyboard> {}

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
  return (
    <Keyboard {...props} className={CommandStyles.Shortcut({ className })} />
  );
}

"use client";

import {
  Group,
  Input,
  TextField as TextFieldPrimitive,
} from "react-aria-components";
import { cva } from "~/lib/cva";

export const TextFieldStyles = {
  Provider: cva({
    base: ["group flex flex-col gap-y-1.5"],
  }),
  Root: cva({
    base: [
      "group flex h-10 items-center gap-2 overflow-hidden rounded-lg border border-input bg-bg px-2.5 text-base transition",
      "lg:text-sm",
      "focus-within:border-ring/85 focus-within:ring-4 focus-within:ring-ring/20",
      "group-invalid:border-danger group-invalid:focus-within:border-danger group-invalid:focus-within:ring-4 group-invalid:focus-within:ring-danger/20",
      "disabled:bg-secondary disabled:opacity-50",
    ],
  }),
  Input: cva({
    base: [
      "size-full min-w-0 select-none bg-transparent text-fg placeholder-muted-fg outline-none",
      "[&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden",
    ],
  }),
  Slot: cva({
    base: ["relative z-10 flex shrink-0 items-center text-muted-fg"],
  }),
};

export interface TextFieldProviderProps
  extends React.ComponentProps<typeof TextFieldPrimitive> {}

export function TextFieldProvider({
  className,
  ...props
}: TextFieldProviderProps) {
  return (
    <TextFieldPrimitive
      {...props}
      className={(values) =>
        TextFieldStyles.Provider({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface TextFieldRootProps
  extends React.ComponentProps<typeof Group> {}

export function TextFieldRoot({ className, ...props }: TextFieldRootProps) {
  return (
    <Group
      {...props}
      className={(values) =>
        TextFieldStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface TextFieldInputProps
  extends React.ComponentProps<typeof Input> {}

export function TextFieldInput({ className, ...props }: TextFieldInputProps) {
  return <Input {...props} className={TextFieldStyles.Input({ className })} />;
}

export interface TextFieldSlotProps extends React.ComponentProps<"div"> {}

export function TextFieldSlot({ className, ...props }: TextFieldSlotProps) {
  return <div {...props} className={TextFieldStyles.Slot({ className })} />;
}

export const TextField = Object.assign(
  {},
  {
    Provider: TextFieldProvider,
    Root: TextFieldRoot,
    Input: TextFieldInput,
    Slot: TextFieldSlot,
  }
);

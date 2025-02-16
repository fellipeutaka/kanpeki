"use client";

import {
  Group,
  Input,
  TextField as TextFieldPrimitive,
} from "react-aria-components";
import { TextFieldStyles } from "./styles";

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

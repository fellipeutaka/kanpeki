"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "cva";
import { composeRenderProps } from "react-aria-components";
import { Button } from "~/registry/ui/button";
import { Input } from "~/registry/ui/input";
import { Textarea } from "~/registry/ui/textarea";
import { InputGroupStyles } from "./styles";

export interface InputGroupRootProps extends useRender.ComponentProps<"div"> {}

export function InputGroupRoot({
  render,
  className,
  ...props
}: InputGroupRootProps) {
  const defaultProps: useRender.ElementProps<"div"> = {
    className: InputGroupStyles.Root({ className }),
    role: "group",
    ["data-slot" as string]: "input-group-root",
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
  });
}

export interface InputGroupAddonProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof InputGroupStyles.Addon> {}

export function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: InputGroupAddonProps) {
  return (
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: This is fine for this use case.
    // biome-ignore lint/a11y/useKeyWithClickEvents: This is fine for this use case.
    <div
      className={InputGroupStyles.Addon({ align, className })}
      data-align={align}
      data-slot="input-group-addon"
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      role="group"
      {...props}
    />
  );
}

export interface InputGroupButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size">,
    VariantProps<typeof InputGroupStyles.Button> {}

export function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      className={composeRenderProps(className, (className) =>
        InputGroupStyles.Button({ size, className })
      )}
      data-size={size}
      type={type}
      variant={variant}
      {...props}
    />
  );
}

export interface InputGroupTextProps extends React.ComponentProps<"span"> {}

export function InputGroupText({ className, ...props }: InputGroupTextProps) {
  return <span className={InputGroupStyles.Text({ className })} {...props} />;
}

export interface InputGroupInputProps
  extends React.ComponentProps<typeof Input> {}

export function InputGroupInput({ className, ...props }: InputGroupInputProps) {
  return (
    <Input
      className={composeRenderProps(className, (className) =>
        InputGroupStyles.Input({ className })
      )}
      data-slot="input-group-control"
      {...props}
    />
  );
}

export interface InputGroupTextareaProps
  extends React.ComponentProps<typeof Textarea> {}

export function InputGroupTextarea({
  className,
  ...props
}: InputGroupTextareaProps) {
  return (
    <Textarea
      className={composeRenderProps(className, (className) =>
        InputGroupStyles.Textarea({ className })
      )}
      data-slot="input-group-control"
      {...props}
    />
  );
}

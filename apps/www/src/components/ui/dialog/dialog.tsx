"use client";

import {
  Button,
  Dialog as DialogPrimitive,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import type { VariantProps } from "~/lib/cva";
import { DialogStyles } from "./styles";

export interface DialogRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}
export const DialogRoot = DialogTrigger;

export interface DialogOverlayProps
  extends React.ComponentProps<typeof ModalOverlay>,
    VariantProps<(typeof DialogStyles)["Overlay"]> {}

export function DialogOverlay({
  className,
  isBlurred,
  isDismissable = true,
  ...props
}: DialogOverlayProps) {
  return (
    <ModalOverlay
      {...props}
      className={DialogStyles.Overlay({ className, isBlurred })}
      isDismissable={isDismissable}
    />
  );
}

export interface DialogModalProps
  extends React.ComponentProps<typeof Modal>,
    Omit<VariantProps<(typeof DialogStyles)["Modal"]>, "isSheet"> {}

export function DialogModal({
  className,
  side = "center",
  ...props
}: DialogModalProps) {
  return (
    <Modal
      {...props}
      className={(values) =>
        DialogStyles.Modal({
          className:
            typeof className === "function" ? className(values) : className,
          side,
        })
      }
      data-side={side}
    />
  );
}

export interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive> {}

export function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <DialogPrimitive
      {...props}
      className={DialogStyles.Content({ className })}
    />
  );
}

export interface DialogHeaderProps extends React.ComponentProps<"header"> {}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <header
      {...props}
      className={DialogStyles.Header({ className })}
      data-slot="dialog-header"
    />
  );
}

export interface DialogFooterProps extends React.ComponentProps<"footer"> {}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <footer {...props} className={DialogStyles.Footer({ className })} />;
}

export interface DialogTitleProps
  extends React.ComponentProps<typeof Heading> {}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <Heading
      level={2}
      {...props}
      className={DialogStyles.Title({ className })}
      data-slot="dialog-title"
    />
  );
}

export interface DialogDescriptionProps
  extends React.ComponentProps<typeof Heading> {}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <Heading
      level={3}
      {...props}
      className={DialogStyles.Description({ className })}
    />
  );
}

export interface DialogCloseProps extends React.ComponentProps<typeof Button> {}

export function DialogClose({
  children,
  className,
  ...props
}: DialogCloseProps) {
  return (
    <Button
      {...props}
      className={DialogStyles.Close({ className })}
      slot="close"
    >
      {children}
    </Button>
  );
}

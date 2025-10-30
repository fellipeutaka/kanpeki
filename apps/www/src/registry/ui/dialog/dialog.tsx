"use client";

import type { VariantProps } from "cva";
import { XIcon } from "lucide-react";
import {
  Button,
  composeRenderProps,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { DialogStyles } from "./styles";

export interface DialogRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function DialogRoot(props: DialogRootProps) {
  return <DialogTrigger data-slot="dialog-root" {...props} />;
}

export interface DialogModalProps
  extends React.ComponentProps<typeof Modal>,
    VariantProps<typeof DialogStyles.Modal> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
}

export function DialogModal({
  className,
  isDismissable = true,
  ...props
}: DialogModalProps) {
  return (
    <Modal
      className={composeRenderProps(className, (className) =>
        DialogStyles.Modal({ className })
      )}
      data-slot="dialog-modal"
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export interface DialogOverlayProps
  extends React.ComponentProps<typeof ModalOverlay>,
    VariantProps<typeof DialogStyles.Overlay> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
}

export function DialogOverlay({
  className,
  isBlurred,
  isDismissable = true,
  ...props
}: DialogOverlayProps) {
  return (
    <ModalOverlay
      className={composeRenderProps(className, (className) =>
        DialogStyles.Overlay({ className, isBlurred })
      )}
      data-slot="dialog-overlay"
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export interface DialogContentProps
  extends React.ComponentProps<typeof Dialog> {}

export function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <Dialog
      className={DialogStyles.Content({ className })}
      data-slot="dialog-content"
      {...props}
    />
  );
}

export interface DialogCloseProps
  extends Omit<React.ComponentProps<typeof Button>, "children" | "slot"> {}

export function DialogClose({ className, ...props }: DialogCloseProps) {
  return (
    <Button
      {...props}
      className={composeRenderProps(className, (className) =>
        DialogStyles.Close({ className })
      )}
      data-slot="dialog-close"
      slot="close"
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </Button>
  );
}

export interface DialogHeaderProps extends React.ComponentProps<"div"> {}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      className={DialogStyles.Header({ className })}
      data-slot="dialog-header"
      {...props}
    />
  );
}

export interface DialogFooterProps extends React.ComponentProps<"div"> {}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div
      className={DialogStyles.Footer({ className })}
      data-slot="dialog-footer"
      {...props}
    />
  );
}

export interface DialogTitleProps
  extends React.ComponentProps<typeof Heading> {}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <Heading
      className={DialogStyles.Title({ className })}
      data-slot="dialog-title"
      slot="title"
      {...props}
    />
  );
}

export interface DialogDescriptionProps extends React.ComponentProps<"p"> {}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <p
      className={DialogStyles.Description({ className })}
      data-slot="dialog-description"
      {...props}
    />
  );
}

"use client";

import {
  Button,
  Dialog as DialogPrimitive,
  type DialogProps,
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

export interface DialogContentProps
  extends Omit<React.ComponentProps<typeof Modal>, "children">,
    Omit<React.ComponentProps<typeof ModalOverlay>, "className">,
    Omit<DialogProps, "children" | "className" | "style">,
    Omit<VariantProps<(typeof DialogStyles)["Overlay"]>, "isSheet">,
    Omit<VariantProps<(typeof DialogStyles)["Content"]>, "isSheet"> {}

export function DialogContent({
  className,
  children,
  role = "dialog",
  isDismissable,
  isBlurred,
  side = "center",
  ...props
}: DialogContentProps) {
  const _isDismissable = isDismissable ?? role !== "alertdialog";
  const isSheet = side !== "center";

  return (
    <ModalOverlay
      {...props}
      className={(values) =>
        DialogStyles.Overlay({
          isBlurred,
          isSheet,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
      isDismissable={_isDismissable}
    >
      <Modal
        className={(values) =>
          DialogStyles.Content({
            side,
            isSheet,
            className:
              typeof className === "function" ? className(values) : className,
          })
        }
        data-side={side}
        isDismissable={_isDismissable}
      >
        {(values) => (
          <DialogPrimitive className="outline-none" role={role}>
            {typeof children === "function" ? children(values) : children}
          </DialogPrimitive>
        )}
      </Modal>
    </ModalOverlay>
  );
}

export interface DialogHeaderProps extends React.ComponentProps<"header"> {}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <header
      {...props}
      data-slot="dialog-header"
      className={DialogStyles.Header({ className })}
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
      data-slot="dialog-title"
      className={DialogStyles.Title({ className })}
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
      slot="close"
      className={DialogStyles.Close({ className })}
    >
      {children}
    </Button>
  );
}

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
import { SheetStyles } from "./styles";

export interface SheetRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function SheetRoot(props: SheetRootProps) {
  return <DialogTrigger data-slot="sheet-root" {...props} />;
}

export interface SheetOverlayProps
  extends React.ComponentProps<typeof ModalOverlay> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
}

export function SheetOverlay({
  className,
  isDismissable = true,
  ...props
}: SheetOverlayProps) {
  return (
    <ModalOverlay
      className={composeRenderProps(className, (className) =>
        SheetStyles.Overlay({ className })
      )}
      data-slot="sheet-overlay"
      isDismissable={isDismissable}
      {...props}
    />
  );
}

export interface SheetContentProps
  extends React.ComponentProps<typeof Dialog> {}

export function SheetContent({ className, ...props }: SheetContentProps) {
  return (
    <Dialog
      className={SheetStyles.Content({ className })}
      data-slot="sheet-content"
      {...props}
    />
  );
}

export interface SheetCloseProps
  extends Omit<React.ComponentProps<typeof Button>, "children" | "slot"> {}

export function SheetClose({ className, ...props }: SheetCloseProps) {
  return (
    <Button
      {...props}
      className={composeRenderProps(className, (className) =>
        SheetStyles.Close({ className })
      )}
      data-slot="sheet-close"
      slot="close"
    >
      <XIcon />
      <span className="sr-only">Close</span>
    </Button>
  );
}

export interface SheetModalProps
  extends React.ComponentProps<typeof Modal>,
    VariantProps<typeof SheetStyles.Modal> {}

export function SheetModal({
  className,
  side = "right",
  ...props
}: SheetModalProps) {
  return (
    <Modal
      className={composeRenderProps(className, (className) =>
        SheetStyles.Modal({ className, side })
      )}
      data-slot="sheet-content"
      {...props}
    />
  );
}

export interface SheetHeaderProps extends React.ComponentProps<"div"> {}

export function SheetHeader({ className, ...props }: SheetHeaderProps) {
  return (
    <div
      className={SheetStyles.Header({ className })}
      data-slot="sheet-header"
      {...props}
    />
  );
}

export interface SheetFooterProps extends React.ComponentProps<"div"> {}

export function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <div
      className={SheetStyles.Footer({ className })}
      data-slot="sheet-footer"
      {...props}
    />
  );
}

export interface SheetTitleProps extends React.ComponentProps<typeof Heading> {}

export function SheetTitle({ className, ...props }: SheetTitleProps) {
  return (
    <Heading
      className={SheetStyles.Title({ className })}
      data-slot="sheet-title"
      slot="title"
      {...props}
    />
  );
}

export interface SheetDescriptionProps extends React.ComponentProps<"p"> {}

export function SheetDescription({
  className,
  ...props
}: SheetDescriptionProps) {
  return (
    <p
      className={SheetStyles.Description({ className })}
      data-slot="sheet-description"
      {...props}
    />
  );
}

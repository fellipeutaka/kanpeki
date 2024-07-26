"use client";

import { type DialogAria, useDialog } from "@react-aria/dialog";
import { type PressProps, PressResponder } from "@react-aria/interactions";
import {
  type AriaModalOverlayProps,
  type ModalOverlayAria,
  Overlay,
  type OverlayProps,
  type OverlayTriggerAria,
  useModalOverlay,
  useOverlayTrigger,
} from "@react-aria/overlays";
import {
  type OverlayTriggerProps,
  type OverlayTriggerState,
  useOverlayTriggerState,
} from "@react-stately/overlays";
import { cloneElement, createContext, useContext, useRef } from "react";
import { tv } from "tailwind-variants";
import { mergeProps } from "~/utils/merge-props";
import { mergeRefs } from "~/utils/merge-refs";
import { useExitAnimation } from "~/utils/use-animation";

export const DialogStyles = {
  Overlay: tv({
    base: [
      "fixed inset-0 z-50 bg-black/80",
      "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    ],
  }),
  Content: tv({
    base: [
      "-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg gap-4 border border-border bg-background p-6 shadow-lg outline-none duration-200",
      "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=closed]:animate-out",
      "sm:rounded-lg",
    ],
  }),
  Close: tv({
    base: [
      "absolute top-4 right-4 size-4 rounded-sm opacity-70 ring-offset-background transition",
      "hover:opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:pointer-events-none",
    ],
  }),
  Header: tv({
    base: ["flex flex-col space-y-1.5 text-center", "sm:text-left"],
  }),
  Footer: tv({
    base: ["flex flex-col-reverse", "sm:flex-row sm:justify-end sm:space-x-2"],
  }),
  Title: tv({
    base: ["font-semibold text-lg leading-none tracking-tight"],
  }),
  Description: tv({
    base: ["text-muted-foreground text-sm"],
  }),
};

export interface DialogRootContext {
  triggerProps: OverlayTriggerAria["triggerProps"];
  overlayTriggerState: OverlayTriggerState;
  overlayProps: OverlayTriggerAria["overlayProps"];
  modalProps: ModalOverlayAria["modalProps"];
  underlayProps: ModalOverlayAria["underlayProps"];
  modalRef: React.RefObject<HTMLDivElement>;
}

export const DialogRootContext = createContext<DialogRootContext | null>(null);

export function useDialogRootContext() {
  const context = useContext(DialogRootContext);
  if (context === null) {
    throw new Error(
      "useDialogRootContext must be used within a DialogProvider",
    );
  }
  return context;
}

export interface DialogContext {
  dialogProps: DialogAria["dialogProps"];
  titleProps: DialogAria["titleProps"];
}

export const DialogContext = createContext<DialogContext | null>(null);

export function useDialogContext() {
  const context = useContext(DialogContext);
  if (context === null) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
}

export interface DialogRootProps
  extends OverlayTriggerProps,
    AriaModalOverlayProps {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
  children: React.ReactNode;
}

export function DialogRoot({
  children,
  isDismissable = true,
  ...props
}: DialogRootProps) {
  const overlayTriggerState = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    overlayTriggerState,
  );

  const modalRef = useRef<HTMLDivElement>(null);

  const { modalProps, underlayProps } = useModalOverlay(
    {
      ...props,
      isDismissable,
    },
    overlayTriggerState,
    modalRef,
  );

  return (
    <DialogRootContext.Provider
      value={{
        triggerProps,
        overlayTriggerState,
        overlayProps,
        modalProps,
        modalRef,
        underlayProps,
      }}
    >
      {children}
    </DialogRootContext.Provider>
  );
}

export type DialogTriggerProps = React.ComponentProps<typeof PressResponder>;

export function DialogTrigger(props: DialogTriggerProps) {
  const { overlayTriggerState, triggerProps } = useDialogRootContext();
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <PressResponder
      {...mergeProps(triggerProps, props)}
      ref={mergeRefs([triggerRef, props.ref])}
      isPressed={overlayTriggerState.isOpen}
    />
  );
}

export interface DialogPortalProps extends OverlayProps {}

export function DialogPortal(props: DialogPortalProps) {
  const { overlayTriggerState, modalRef } = useDialogRootContext();
  const isModalExiting = useExitAnimation(modalRef, overlayTriggerState.isOpen);

  if (!(overlayTriggerState.isOpen || isModalExiting)) {
    return null;
  }

  return <Overlay {...props} />;
}

export interface DialogOverlayProps extends React.ComponentProps<"div"> {}

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  const { underlayProps, overlayTriggerState } = useDialogRootContext();

  return (
    <div
      {...mergeProps(underlayProps, props)}
      className={DialogStyles.Overlay({ className })}
      data-state={overlayTriggerState.isOpen ? "open" : "closed"}
    />
  );
}

interface DialogRenderProps {
  close: () => void;
}

export type DialogContentProps = Omit<
  React.ComponentProps<"div">,
  "children"
> & {
  /**
   * The role of the dialog. This can be a dialog or an alert dialog.
   * @default "dialog"
   * */
  role?: "dialog" | "alertdialog";
  children: React.ReactNode | ((opts: DialogRenderProps) => React.ReactNode);
};

export function DialogContent({ className, ...props }: DialogContentProps) {
  const { overlayProps, modalProps, modalRef, overlayTriggerState } =
    useDialogRootContext();

  const { dialogProps, titleProps } = useDialog(props, modalRef);

  let children = props.children;
  if (typeof children === "function") {
    children = children({
      close: overlayTriggerState.close || (() => null),
    });
  }

  return (
    <div
      {...mergeProps(overlayProps, modalProps, dialogProps, props)}
      ref={modalRef}
      className={DialogStyles.Content({ className })}
      data-state={overlayTriggerState.isOpen ? "open" : "closed"}
    >
      <DialogContext.Provider
        value={{
          dialogProps,
          titleProps,
        }}
      >
        {children}
      </DialogContext.Provider>
    </div>
  );
}

export interface DialogHeaderProps extends React.ComponentProps<"header"> {}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return <header {...props} className={DialogStyles.Header({ className })} />;
}

export interface DialogFooterProps extends React.ComponentProps<"footer"> {}

export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <footer {...props} className={DialogStyles.Footer({ className })} />;
}

export interface DialogTitleProps extends React.ComponentProps<"h2"> {}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  const { titleProps } = useDialogContext();

  return (
    <h2
      {...mergeProps(titleProps, props)}
      className={DialogStyles.Title({ className })}
    />
  );
}

export interface DialogDescriptionProps extends React.ComponentProps<"h3"> {}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return <h3 {...props} className={DialogStyles.Description({ className })} />;
}

export interface DialogCloseProps extends PressProps {
  children: React.ReactElement;
  asChild?: boolean;
}

export function DialogClose({ children, asChild, ...props }: DialogCloseProps) {
  const { overlayTriggerState } = useDialogRootContext();

  if (asChild) {
    return cloneElement(children, {
      ...props,
      onPress: overlayTriggerState.close,
    });
  }

  return (
    <button
      {...props}
      className={DialogStyles.Close()}
      onClick={overlayTriggerState.close}
    >
      {children}
    </button>
  );
}

export const Dialog = Object.assign(
  {},
  {
    Root: DialogRoot,
    Trigger: DialogTrigger,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Header: DialogHeader,
    Footer: DialogFooter,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
  },
);

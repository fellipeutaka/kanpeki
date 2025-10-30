"use client";

import type { VariantProps } from "cva";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Point,
  type TargetAndTransition,
} from "motion/react";
import { use } from "react";
import {
  Button,
  composeRenderProps,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  OverlayTriggerStateContext,
  Text,
} from "react-aria-components";

import { DrawerStyles } from "./styles";

const MotionModal = motion.create(Modal);
const MotionModalOverlay = motion.create(ModalOverlay);

const TRANSITIONS = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1],
};
const VELOCITY_THRESHOLD = 0.4;
const CLOSE_THRESHOLD = 0.25;

type DrawerSide = "top" | "right" | "bottom" | "left";

const initialTransform = {
  bottom: { y: "100%" },
  left: { x: "-100%" },
  right: { x: "100%" },
  top: { y: "-100%" },
} as const satisfies Record<DrawerSide, TargetAndTransition>;

function getIsVertical(side: DrawerSide): boolean {
  return side === "top" || side === "bottom";
}

// Check if drag should close the drawer
function shouldClose(
  side: DrawerSide,
  offset: Point,
  velocity: Point
): boolean {
  const isVertical = getIsVertical(side);
  const dragDistance = isVertical ? Math.abs(offset.y) : Math.abs(offset.x);
  const dragVelocity = isVertical ? Math.abs(velocity.y) : Math.abs(velocity.x);

  // Check if dragging in close direction
  const isClosingDirection =
    (side === "bottom" && offset.y > 0) ||
    (side === "top" && offset.y < 0) ||
    (side === "left" && offset.x < 0) ||
    (side === "right" && offset.x > 0);

  if (!isClosingDirection) {
    return false;
  }

  // Close on high velocity
  if (dragVelocity > VELOCITY_THRESHOLD) {
    return true;
  }

  // Close on distance threshold
  const threshold =
    (isVertical ? window.innerHeight : window.innerWidth) * CLOSE_THRESHOLD;
  return dragDistance >= threshold;
}

type DragOrientation = "x" | "y";

// Get drag configuration for each side
function getDragConfig(side: DrawerSide) {
  const isVertical = getIsVertical(side);
  const drag: DragOrientation = isVertical ? "y" : "x";

  return {
    drag,
    dragConstraints: isVertical
      ? side === "top"
        ? { bottom: 5, top: -300 } // More restrictive for scrollable content
        : { bottom: 300, top: -5 } // Very limited upward movement
      : side === "left"
        ? { left: -300, right: 5 }
        : { left: -5, right: 300 },
    dragElastic: isVertical
      ? side === "top"
        ? { bottom: 0.02, top: 0.15 } // Higher resistance near content
        : { bottom: 0.15, top: 0.02 } // Very high resistance upward
      : side === "left"
        ? { left: 0.15, right: 0.02 }
        : { left: 0.02, right: 0.15 },
  };
}

export interface DrawerRootProps
  extends React.ComponentProps<typeof DialogTrigger> {}

export function DrawerRoot(props: DrawerRootProps) {
  return <DialogTrigger data-slot="drawer-root" {...props} />;
}

export interface DrawerOverlayProps
  extends Omit<React.ComponentProps<typeof MotionModalOverlay>, "children">,
    VariantProps<typeof DrawerStyles.Modal> {
  /**
   * Whether to close the modal when the user interacts outside it.
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Whether the drawer should float with margins.
   * @default false
   */
  isFloat?: boolean;
  /**
   * Whether to show the drag notch indicator.
   * @default true
   */
  notch?: boolean;
  children: React.ComponentProps<typeof Dialog>["children"];
}

export function DrawerOverlay({
  className,
  isDismissable = true,
  side = "bottom",
  isFloat = false,
  notch = true,
  children,
  ...props
}: DrawerOverlayProps) {
  const state = use(OverlayTriggerStateContext);

  if (!state) {
    return null;
  }

  const handleDragEnd = (_: unknown, { offset, velocity }: PanInfo) => {
    if (shouldClose(side, offset, velocity)) {
      state.close();
    }
  };

  const dragConfig = getDragConfig(side);

  return (
    <AnimatePresence>
      {(props?.isOpen || state?.isOpen) && (
        <MotionModalOverlay
          animate={{ opacity: 1 }}
          className={DrawerStyles.Overlay({ className })}
          data-slot="drawer-overlay"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          isDismissable={isDismissable}
          isOpen={props?.isOpen || state?.isOpen}
          onOpenChange={props?.onOpenChange || state?.setOpen}
          transition={TRANSITIONS}
          {...props}
        >
          <MotionModal
            animate={{ x: 0, y: 0 }}
            className={DrawerStyles.Modal({ isFloat, side })}
            data-slot="drawer-modal"
            drag={dragConfig.drag}
            dragConstraints={dragConfig.dragConstraints}
            dragElastic={dragConfig.dragElastic}
            dragMomentum={false}
            dragSnapToOrigin
            exit={initialTransform[side]}
            initial={initialTransform[side]}
            onDragEnd={handleDragEnd}
            transition={{
              damping: 25,
              stiffness: 400,
              type: "spring",
            }}
            whileDrag={{
              cursor: "grabbing",
            }}
          >
            <Dialog
              aria-label="Drawer"
              className={DrawerStyles.Content({ side })}
              data-orientation={getIsVertical(side) ? "vertical" : "horizontal"}
              data-side={side}
              data-slot="drawer-content"
            >
              {composeRenderProps(children, (children) => (
                <>
                  {notch && (side === "bottom" || side === "top") && (
                    <div className={DrawerStyles.Notch()} />
                  )}
                  {children}
                </>
              ))}
            </Dialog>
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  );
}

export interface DrawerHeaderProps extends React.ComponentProps<"div"> {}

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      className={DrawerStyles.Header({ className })}
      data-slot="drawer-header"
      slot="header"
      {...props}
    />
  );
}

export interface DrawerTitleProps
  extends React.ComponentProps<typeof Heading> {}

export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <Heading
      className={DrawerStyles.Title({ className })}
      data-slot="drawer-title"
      slot="title"
      {...props}
    />
  );
}

export interface DrawerDescriptionProps
  extends React.ComponentProps<typeof Text> {}

export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  return (
    <Text
      className={DrawerStyles.Description({ className })}
      data-slot="drawer-description"
      slot="description"
      {...props}
    />
  );
}

export interface DrawerBodyProps extends React.ComponentProps<"div"> {}

export function DrawerBody({ className, ...props }: DrawerBodyProps) {
  return (
    <div
      className={DrawerStyles.Body({ className })}
      data-slot="drawer-body"
      slot="body"
      {...props}
    />
  );
}

export interface DrawerFooterProps extends React.ComponentProps<"div"> {}

export function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div
      className={DrawerStyles.Footer({ className })}
      data-slot="drawer-footer"
      slot="footer"
      {...props}
    />
  );
}

export interface DrawerCloseProps extends React.ComponentProps<typeof Button> {}

export function DrawerClose({ className, ...props }: DrawerCloseProps) {
  return (
    <Button
      className={className}
      data-slot="drawer-close"
      slot="close"
      {...props}
    />
  );
}

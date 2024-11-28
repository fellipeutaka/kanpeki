"use client";

import { NumberField as NumberFieldPrimitive } from "react-aria-components";
import { cva } from "~/lib/cva";
import { ButtonPrimitive, type ButtonProps } from "./button";

const Icons = {
  ChevronUp: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 15l-6-6-6 6"
      />
    </svg>
  ),
  ChevronDown: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 9l6 6 6-6"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export const NumberFieldStyles = {
  Root: cva({
    base: ["group flex flex-col gap-y-1.5"],
  }),
  Controls: cva({
    base: [
      "grid h-10 place-content-center border-s group-focus-within:border-ring/85",
    ],
  }),
  StepperButton: cva({
    base: [
      "cursor-default px-2 text-muted-fg",
      "pressed:bg-primary pressed:text-primary-fg",
      "group-disabled:bg-secondary",
    ],
  }),
};

export interface NumberFieldRootProps
  extends React.ComponentProps<typeof NumberFieldPrimitive> {}

export function NumberFieldRoot({ className, ...props }: NumberFieldRootProps) {
  return (
    <NumberFieldPrimitive
      {...props}
      className={(values) =>
        NumberFieldStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface NumberFieldControlsProps extends React.ComponentProps<"div"> {}

export function NumberFieldControls({
  className,
  children,
  ...props
}: NumberFieldControlsProps) {
  return (
    <div {...props} className={NumberFieldStyles.Controls({ className })}>
      <div className="flex h-full flex-col">{children}</div>
    </div>
  );
}

export interface NumberFieldStepperButtonProps extends ButtonProps {
  slot: "increment" | "decrement";
}

export function NumberFieldStepperButton({
  className,
  ...props
}: NumberFieldStepperButtonProps) {
  return (
    <ButtonPrimitive
      {...props}
      className={(values) =>
        NumberFieldStyles.StepperButton({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    >
      {props.slot === "increment" ? (
        <Icons.ChevronUp className="size-5" />
      ) : (
        <Icons.ChevronDown className="size-5" />
      )}
    </ButtonPrimitive>
  );
}

export const NumberField = Object.assign(
  {},
  {
    Root: NumberFieldRoot,
    Controls: NumberFieldControls,
    StepperButton: NumberFieldStepperButton,
  }
);

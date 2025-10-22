"use client";

import { NumberField as NumberFieldPrimitive } from "react-aria-components";
import { ButtonPrimitive, type ButtonProps } from "../button";
import { NumberFieldStyles } from "./styles";

const Icons = {
  ChevronDown: (props) => (
    <svg
      aria-hidden="true"
      height={32}
      viewBox="0 0 24 24"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
  ChevronUp: (props) => (
    <svg
      aria-hidden="true"
      height={32}
      viewBox="0 0 24 24"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 15l-6-6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

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

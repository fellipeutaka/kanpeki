"use client";

import {
  Checkbox as CheckboxPrimitive,
  type CheckboxProps as CheckboxPrimitiveProps,
} from "react-aria-components";
import { CheckboxStyles } from "./styles";

const Icons = {
  Minus: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 7.5a.5.5 0 01.5-.5h9.5a.5.5 0 010 1h-9.5a.5.5 0 01-.5-.5"
        clipRule="evenodd"
      />
    </svg>
  ),
  Check: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.944.12l-2.75-2.5a.625.625 0 01.841-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181"
        clipRule="evenodd"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export interface CheckboxProviderProps extends CheckboxPrimitiveProps {}

export function CheckboxProvider({
  className,
  ...props
}: CheckboxProviderProps) {
  return (
    <CheckboxPrimitive
      {...props}
      className={(values) =>
        CheckboxStyles.Provider({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface CheckboxRootProps extends React.ComponentProps<"div"> {}

export function CheckboxRoot({ className, ...props }: CheckboxRootProps) {
  return <div {...props} className={CheckboxStyles.Root({ className })} />;
}

export interface CheckboxIndicatorProps extends React.ComponentProps<"svg"> {}

export function CheckboxIndicator({
  className,
  ...props
}: CheckboxIndicatorProps) {
  return (
    <>
      <Icons.Minus
        {...props}
        className={CheckboxStyles.Indicator({
          className: [className, "group-indeterminate:block"],
        })}
      />

      <Icons.Check
        {...props}
        className={CheckboxStyles.Indicator({
          className: [className, "group-data-selected:block"],
        })}
      />
    </>
  );
}

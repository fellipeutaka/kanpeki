"use client";

import { SearchField } from "react-aria-components";
import { Button, type ButtonProps } from "../button";
import { Spinner, type SpinnerProps } from "../spinner/spinner";
import { TextSearchStyles } from "./styles";

const Icons = {
  Search: (props) => (
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
        d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0m-.691 3.516a4.5 4.5 0 11.707-.707l2.838 2.837a.5.5 0 01-.708.708z"
        clipRule="evenodd"
      />
    </svg>
  ),
  X: (props) => (
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
        d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5z"
        clipRule="evenodd"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export interface TextSearchRootProps
  extends React.ComponentProps<typeof SearchField> {}

export function TextSearchRoot({ className, ...props }: TextSearchRootProps) {
  return (
    <SearchField
      {...props}
      aria-label={props["aria-label"] ?? "Search..."}
      className={(values) =>
        TextSearchStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface TextSearchIconProps extends React.ComponentProps<"svg"> {}

export function TextSearchIcon({ className, ...props }: TextSearchIconProps) {
  return (
    <Icons.Search {...props} className={TextSearchStyles.Icon({ className })} />
  );
}

export interface TextSearchSpinnerProps extends SpinnerProps {}

export function TextSearchSpinner({
  className,
  ...props
}: TextSearchSpinnerProps) {
  return (
    <Spinner {...props} className={TextSearchStyles.Icon({ className })} />
  );
}

export interface TextSearchClearButtonProps extends ButtonProps {}

export function TextSearchClearButton({
  className,
  children,
  ...props
}: TextSearchClearButtonProps) {
  return (
    <Button
      size="icon"
      variant="ghost"
      className={(values) =>
        TextSearchStyles.ClearButton({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
      {...props}
    >
      {children ?? <Icons.X className="size-4" />}
    </Button>
  );
}

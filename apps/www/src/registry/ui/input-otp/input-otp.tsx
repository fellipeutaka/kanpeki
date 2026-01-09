"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { useContext } from "react";
import { InputOTPStyles } from "./styles";

export type InputOTPRootProps = React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
};

export function InputOTPRoot({
  className,
  containerClassName,
  ...props
}: InputOTPRootProps) {
  return (
    <OTPInput
      className={InputOTPStyles.Root({ className })}
      containerClassName={InputOTPStyles.Container({
        class: containerClassName,
      })}
      data-slot="input-otp"
      {...props}
    />
  );
}

export interface InputOTPGroupProps extends React.ComponentProps<"div"> {}

export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
  return (
    <div
      className={InputOTPStyles.Group({ className })}
      data-slot="input-otp-group"
      {...props}
    />
  );
}

export interface InputOTPSlotProps extends React.ComponentProps<"div"> {
  index: number;
}

export function InputOTPSlot({
  index,
  className,
  ...props
}: InputOTPSlotProps) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      className={InputOTPStyles.Slot({ className })}
      data-active={isActive}
      data-slot="input-otp-slot"
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
}

export interface InputOTPSeparatorProps extends React.ComponentProps<"div"> {}

export function InputOTPSeparator(props: InputOTPSeparatorProps) {
  return (
    <div
      data-slot="input-otp-separator"
      // biome-ignore lint/a11y/useAriaPropsForRole: This is a decorative separator
      role="separator"
      tabIndex={-1}
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { InputOTP } from "~/registry/ui/input-otp";

export function InputOTPPatternDemo() {
  return (
    <InputOTP.Root maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTP.Group>
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP.Group>
    </InputOTP.Root>
  );
}

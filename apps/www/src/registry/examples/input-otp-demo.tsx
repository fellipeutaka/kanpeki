"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import { useId, useState } from "react";
import { InputOTP } from "~/registry/ui/input-otp";
import { Label } from "~/registry/ui/label/label";

export function InputOTPDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-6 md:flex-row">
      <InputOTPSimple />
      <InputOTPPattern />
      <InputOTPWithSeparator />
      <InputOTPWithSpacing />
    </div>
  );
}

function InputOTPSimple() {
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>Simple</Label>
      <InputOTP.Root id={id} maxLength={6}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP.Root>
    </div>
  );
}

function InputOTPPattern() {
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>Digits Only</Label>
      <InputOTP.Root id={id} maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP.Root>
    </div>
  );
}

function InputOTPWithSeparator() {
  const [value, setValue] = useState("123456");
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>With Separator</Label>
      <InputOTP.Root id={id} maxLength={6} onChange={setValue} value={value}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP.Root>
    </div>
  );
}

function InputOTPWithSpacing() {
  const id = useId();

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>With Spacing</Label>
      <InputOTP.Root id={id} maxLength={6}>
        <InputOTP.Group className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
          <InputOTP.Slot aria-invalid="true" index={0} />
          <InputOTP.Slot aria-invalid="true" index={1} />
          <InputOTP.Slot aria-invalid="true" index={2} />
          <InputOTP.Slot aria-invalid="true" index={3} />
        </InputOTP.Group>
      </InputOTP.Root>
    </div>
  );
}

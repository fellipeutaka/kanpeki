"use client";

import { useState } from "react";
import { InputOTP } from "~/registry/ui/input-otp";

export function InputOTPControlledDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-2">
      <InputOTP.Root
        maxLength={6}
        onChange={(value) => setValue(value)}
        value={value}
      >
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP.Root>
      <p className="text-center text-sm">
        {value === "" ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </p>
    </div>
  );
}

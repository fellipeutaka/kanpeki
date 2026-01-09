import { InputOTP } from "~/registry/ui/input-otp";

export function InputOTPSeparatorDemo() {
  return (
    <InputOTP.Root maxLength={6}>
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
  );
}

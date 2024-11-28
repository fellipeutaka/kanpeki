"use client";

import { useState } from "react";
import { ButtonPrimitive } from "~/components/ui/button";
import { TextField } from "~/components/ui/textfield";

const Icons = {
  EyeOff: (props) => (
    <svg
      aria-hidden="true"
      aria-label="Eye Off"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.88 9.88a3 3 0 104.24 4.24m-3.39-9.04A10.43 10.43 0 0112 5c7 0 10 7 10 7a13.16 13.16 0 01-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 002 12s3 7 10 7a9.74 9.74 0 005.39-1.61M2 2l20 20" />
    </svg>
  ),
  Eye: (props) => (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx={12} cy={12} r={3} />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export default function TextFieldPasswordDemo() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField.Root className="w-full max-w-80">
      <TextField.Input
        type={isVisible ? "text" : "password"}
        placeholder="Password"
      />
      <TextField.Slot>
        <ButtonPrimitive onPress={() => setIsVisible((prev) => !prev)}>
          <Icons.EyeOff
            data-visible={isVisible}
            className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
          />
          <Icons.Eye
            data-visible={isVisible}
            className="size-4 transition-transform data-[visible='false']:scale-0"
          />
        </ButtonPrimitive>
      </TextField.Slot>
    </TextField.Root>
  );
}

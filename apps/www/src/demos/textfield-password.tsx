"use client";

import { useState } from "react";
import { ButtonPrimitive } from "~/components/ui/button";
import { TextField } from "~/components/ui/textfield";

const Icons = {
  Eye: (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx={12} cy={12} r={3} />
    </svg>
  ),
  EyeOff: (props) => (
    <svg
      aria-hidden="true"
      aria-label="Eye Off"
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.88 9.88a3 3 0 104.24 4.24m-3.39-9.04A10.43 10.43 0 0112 5c7 0 10 7 10 7a13.16 13.16 0 01-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 002 12s3 7 10 7a9.74 9.74 0 005.39-1.61M2 2l20 20" />
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
        placeholder="Password"
        type={isVisible ? "text" : "password"}
      />
      <TextField.Slot>
        <ButtonPrimitive onPress={() => setIsVisible((prev) => !prev)}>
          <Icons.EyeOff
            className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
            data-visible={isVisible}
          />
          <Icons.Eye
            className="size-4 transition-transform data-[visible='false']:scale-0"
            data-visible={isVisible}
          />
        </ButtonPrimitive>
      </TextField.Slot>
    </TextField.Root>
  );
}

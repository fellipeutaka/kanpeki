"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Field } from "~/registry/ui/field";
import { InputGroup } from "~/registry/ui/input-group";
import { TextField } from "~/registry/ui/text-field";

export function TextfieldPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Field.Root render={<TextField />}>
      <Field.Label>Password</Field.Label>
      <InputGroup.Root>
        <InputGroup.Input
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
        />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            size="icon-xs"
            variant="ghost"
          >
            {showPassword ? (
              <EyeOffIcon className="size-4" />
            ) : (
              <EyeIcon className="size-4" />
            )}
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </Field.Root>
  );
}

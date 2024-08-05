import { Icons } from "@kanpeki/ui/icons";
import { TextField } from "@kanpeki/ui/text-field";
import { useState } from "react";

export default function TextFieldPasswordDemo() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField.Root className="max-w-80">
      <TextField.Input
        type={isVisible ? "text" : "password"}
        placeholder="Password"
      />
      <TextField.Slot>
        <button type="button" onClick={() => setIsVisible((prev) => !prev)}>
          <Icons.EyeOff
            data-visible={isVisible}
            className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
          />
          <Icons.Eye
            data-visible={isVisible}
            className="size-4 transition-transform data-[visible='false']:scale-0"
          />
        </button>
      </TextField.Slot>
    </TextField.Root>
  );
}

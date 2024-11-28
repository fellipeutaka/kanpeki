"use client";

import { Checkbox } from "~/components/ui/checkbox";

export default function CheckboxDemo() {
  return (
    <Checkbox.Provider>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Accept terms and conditions
    </Checkbox.Provider>
  );
}

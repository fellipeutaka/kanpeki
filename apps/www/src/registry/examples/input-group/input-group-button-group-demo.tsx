"use client";

import { Link2Icon } from "lucide-react";
import { ButtonGroup } from "~/registry/ui/button-group";
import { InputGroup } from "~/registry/ui/input-group";
import { Label } from "~/registry/ui/label";

export function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup.Root>
        <ButtonGroup.Text render={<Label htmlFor="url" />}>
          https://
        </ButtonGroup.Text>
        <InputGroup.Root>
          <InputGroup.Input id="url" />
          <InputGroup.Addon align="inline-end">
            <Link2Icon />
          </InputGroup.Addon>
        </InputGroup.Root>
        <ButtonGroup.Text>.com</ButtonGroup.Text>
      </ButtonGroup.Root>
    </div>
  );
}

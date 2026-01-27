"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { Input } from "~/registry/ui/input";
import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";
import { Select } from "~/registry/ui/select";

const CURRENCIES = [
  {
    id: "$",
    label: "US Dollar",
  },
  {
    id: "€",
    label: "Euro",
  },
  {
    id: "£",
    label: "British Pound",
  },
];

export function ButtonGroupSelectDemo() {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Root>
        <Select.Root aria-label="Currency" defaultValue="$">
          <Select.Trigger className="font-mono">
            <Select.Value>{(value) => value.state.value}</Select.Value>
          </Select.Trigger>
          <Popover.Content className="min-w-24">
            <Listbox.Root items={CURRENCIES}>
              {(currency) => (
                <Listbox.Item id={currency.id}>
                  {currency.id}{" "}
                  <span className="text-muted-foreground">
                    {currency.label}
                  </span>
                </Listbox.Item>
              )}
            </Listbox.Root>
          </Popover.Content>
        </Select.Root>
        <Input pattern="[0-9]*" placeholder="10.00" />
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon />
        </Button>
      </ButtonGroup.Root>
    </ButtonGroup.Root>
  );
}

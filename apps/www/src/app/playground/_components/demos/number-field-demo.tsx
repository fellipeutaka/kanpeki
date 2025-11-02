"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Button, Group, Input } from "react-aria-components";
import { Label } from "~/registry/ui/label";
import { NumberField } from "~/registry/ui/number-field";

export function NumberFieldDemo() {
  return (
    <div className="grid gap-4">
      <NumberField>
        <Input placeholder="Basic" />
      </NumberField>

      <PlusMinusButton />

      <WithChevrons />
    </div>
  );
}

function PlusMinusButton() {
  return (
    <NumberField>
      <Label>Number input with plus/minus buttons</Label>
      <Group className="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-input text-sm shadow-xs outline-none transition-[color,box-shadow] data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:ring-[3px] data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:border-destructive data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40">
        <Button
          className="-ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          slot="decrement"
        >
          <MinusIcon aria-hidden="true" size={16} />
        </Button>
        <Input className="w-full grow bg-background px-3 py-2 text-center text-foreground tabular-nums" />
        <Button
          className="-me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          slot="increment"
        >
          <PlusIcon aria-hidden="true" size={16} />
        </Button>
      </Group>
    </NumberField>
  );
}

function WithChevrons() {
  return (
    <NumberField
      defaultValue={99}
      formatOptions={{
        style: "currency",
        currency: "EUR",
        currencySign: "accounting",
      }}
    >
      <Label className="font-medium text-foreground text-sm">
        Number input with chevrons
      </Label>
      <Group className="doutline-none relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-md border border-input text-sm shadow-xs transition-[color,box-shadow] data-focus-within:border-ring data-disabled:opacity-50 data-focus-within:ring-[3px] data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:border-destructive data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40">
        <Input className="flex-1 bg-background px-3 py-2 text-foreground tabular-nums" />
        <div className="flex h-[calc(100%+2px)] flex-col">
          <Button
            className="-me-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            slot="increment"
          >
            <ChevronUpIcon aria-hidden="true" size={12} />
          </Button>
          <Button
            className="-me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border border-input bg-background text-muted-foreground/80 text-sm transition-[color,box-shadow] hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            slot="decrement"
          >
            <ChevronDownIcon aria-hidden="true" size={12} />
          </Button>
        </div>
      </Group>
    </NumberField>
  );
}

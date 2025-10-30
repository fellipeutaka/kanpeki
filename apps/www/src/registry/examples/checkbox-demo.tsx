"use client";

import { Checkbox } from "~/registry/ui/checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Checkbox.Provider>
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        Accept terms and conditions
      </Checkbox.Provider>

      <Checkbox.Provider defaultSelected>
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        <div className="grid gap-2">
          Accept terms and conditions
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox., you agree to the terms and conditions.
          </p>
        </div>
      </Checkbox.Provider>

      <Checkbox.Provider isDisabled>
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        Enable notifications
      </Checkbox.Provider>

      <Checkbox.Provider
        className="items-start rounded-lg border selected:border-blue-600 selected:bg-blue-50 p-3 hover:bg-accent/50 dark:selected:border-blue-900 dark:selected:bg-blue-950"
        defaultSelected
      >
        <Checkbox.Root className="group-selected:border-blue-600 group-selected:bg-blue-600 group-selected:text-white dark:group-selected:border-blue-700 dark:group-selected:bg-blue-700">
          <Checkbox.Indicator />
        </Checkbox.Root>
        <div className="grid gap-1.5 font-normal">
          <p className="font-medium text-sm leading-none">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Checkbox.Provider>
    </div>
  );
}

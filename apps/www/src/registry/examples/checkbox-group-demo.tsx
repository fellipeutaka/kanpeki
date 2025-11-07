import { Checkbox } from "~/registry/ui/checkbox";

export function CheckboxGroupDemo() {
  return (
    <Checkbox.Provider className="items-start rounded-lg border selected:border-blue-600 selected:bg-blue-50 p-3 hover:bg-accent/50 dark:selected:border-blue-900 dark:selected:bg-blue-950">
      <Checkbox.Root className="group-selected:border-blue-600 group-selected:bg-blue-600 group-selected:text-white dark:group-selected:border-blue-700 dark:group-selected:bg-blue-700">
        <Checkbox.Indicator />
      </Checkbox.Root>
      <div className="grid gap-1.5 font-normal">
        <p className="font-medium text-sm leading-none">Enable notifications</p>
        <p className="text-muted-foreground text-sm">
          You can enable or disable notifications at any time.
        </p>
      </div>
    </Checkbox.Provider>
  );
}

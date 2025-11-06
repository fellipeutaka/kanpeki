import { Switch } from "~/registry/ui/switch";

export function SwitchGroupDemo() {
  return (
    <Switch.Root className="gap-6 rounded-lg border selected:border-blue-600 p-4 font-medium text-sm leading-none transition-colors">
      <div className="flex flex-col gap-1">
        <div className="font-medium">Share across devices</div>
        <div className="font-normal text-muted-foreground text-sm">
          Focus is shared across devices, and turns off when you leave the app.
        </div>
      </div>

      <Switch.Track className="group-selected:bg-blue-500 dark:group-selected:bg-blue-600">
        <Switch.Thumb />
      </Switch.Track>
    </Switch.Root>
  );
}

import { Spinner } from "~/registry/ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <Spinner />
      <Spinner className="size-5" />
      <Spinner className="size-6" />
      <Spinner className="size-6 **:data-[slot=spinner-bar]:bg-destructive" />
    </div>
  );
}

import { Spinner } from "~/registry/ui/spinner";

export function SpinnerSizeDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  );
}

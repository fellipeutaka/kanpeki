import { Button } from "~/registry/ui/button";
import { Spinner } from "~/registry/ui/spinner";

export function SpinnerDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button isPending size="sm">
        <Spinner />
        Loading...
      </Button>
      <Button isPending size="sm" variant="outline">
        <Spinner />
        Please wait
      </Button>
      <Button isPending size="sm" variant="secondary">
        <Spinner />
        Processing
      </Button>
    </div>
  );
}

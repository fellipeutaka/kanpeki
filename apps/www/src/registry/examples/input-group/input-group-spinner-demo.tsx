import { LoaderIcon } from "lucide-react";
import { InputGroup } from "~/registry/ui/input-group";
import { Spinner } from "~/registry/ui/spinner";

export function InputGroupSpinnerDemo() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup.Root data-disabled>
        <InputGroup.Input disabled placeholder="Searching..." />
        <InputGroup.Addon align="inline-end">
          <Spinner />
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root data-disabled>
        <InputGroup.Input disabled placeholder="Processing..." />
        <InputGroup.Addon>
          <Spinner />
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root data-disabled>
        <InputGroup.Input disabled placeholder="Saving changes..." />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>Saving...</InputGroup.Text>
          <Spinner />
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root data-disabled>
        <InputGroup.Input disabled placeholder="Refreshing data..." />
        <InputGroup.Addon>
          <LoaderIcon className="animate-spin" />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text className="text-muted-foreground">
            Please wait...
          </InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  );
}

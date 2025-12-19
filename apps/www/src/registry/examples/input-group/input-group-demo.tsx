import { SearchIcon } from "lucide-react";
import { InputGroup } from "~/registry/ui/input-group";

export function InputGroupDemo() {
  return (
    <InputGroup.Root>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button>Search</InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup.Root>
  );
}

import { SearchIcon } from "lucide-react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { Input } from "~/registry/ui/input";

export function ButtonGroupInputDemo() {
  return (
    <ButtonGroup.Root>
      <Input placeholder="Search..." />
      <Button aria-label="Search" variant="outline">
        <SearchIcon />
      </Button>
    </ButtonGroup.Root>
  );
}

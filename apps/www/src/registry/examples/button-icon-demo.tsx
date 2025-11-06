import { SearchIcon } from "lucide-react";

import { Button } from "~/registry/ui/button/button";

export function ButtonIconDemo() {
  return (
    <Button aria-label="Search" size="icon">
      <SearchIcon />
    </Button>
  );
}

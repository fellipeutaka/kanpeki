import { Button } from "@kanpeki/ui/button";
import { Icons } from "@kanpeki/ui/icons";

export default function ButtonWithIconDemo() {
  return (
    <Button>
      Get Started
      <Icons.ChevronRight className="ml-2 size-4" />
    </Button>
  );
}

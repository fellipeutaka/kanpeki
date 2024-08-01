import { Button } from "@kanpeki/ui/button";
import { Icons } from "@kanpeki/ui/icons";

export default function ButtonDemo() {
  return (
    <Button variant="outline" size="icon">
      <Icons.ChevronRight className="size-4" />
    </Button>
  );
}

import { SlashIcon } from "lucide-react";
import { Breadcrumb } from "~/registry/ui/breadcrumb";
import { Link } from "~/registry/ui/link";

export function BreadcrumbCustomSeparatorDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <SlashIcon className="size-4" />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Link href="/docs/components">Components</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <SlashIcon className="size-4" />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Link>Breadcrumb</Link>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}

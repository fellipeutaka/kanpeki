import { Breadcrumb } from "~/registry/ui/breadcrumb";
import { Link } from "~/registry/ui/link";

export function BreadcrumbCollapsedDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Ellipsis className="size-4" />
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Link href="/docs/components">Components</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Link>Breadcrumb</Link>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}

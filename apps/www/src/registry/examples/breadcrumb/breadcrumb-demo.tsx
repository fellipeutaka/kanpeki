import { Breadcrumb } from "~/registry/ui/breadcrumb";
import { Button } from "~/registry/ui/button/button";
import { Link } from "~/registry/ui/link/link";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Link href="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Menu.Root>
          <Button size="icon" variant="unstyled">
            <Breadcrumb.Ellipsis />
          </Button>

          <Popover.Content>
            <Menu.Content>
              <Menu.Item>Documentation</Menu.Item>
              <Menu.Item>Themes</Menu.Item>
              <Menu.Item>GitHub</Menu.Item>
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
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

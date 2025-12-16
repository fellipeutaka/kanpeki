import { Breadcrumb } from "~/registry/ui/breadcrumb";
import { RACButton } from "~/registry/ui/button";
import { Link } from "~/registry/ui/link";
import { LinkStyles } from "~/registry/ui/link/styles";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function BreadcrumbDropdownDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Link href="/docs">Docs</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Menu.Root>
          <RACButton className={LinkStyles({ variant: "default" })}>
            Components
          </RACButton>

          <Popover.Content>
            <Popover.Arrow />

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
        <Link>Breadcrumb</Link>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}

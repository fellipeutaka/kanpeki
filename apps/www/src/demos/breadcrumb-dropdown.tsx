import { Breadcrumb } from "~/components/ui/breadcrumb";
import { ButtonPrimitive } from "~/components/ui/button";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { LinkStyles } from "~/components/ui/link/styles";
import { Popover } from "~/components/ui/popover";

export default function BreadcrumbDropdownDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <DropdownMenu.Root>
          <ButtonPrimitive className={LinkStyles({ variant: "default" })}>
            Components
          </ButtonPrimitive>

          <Popover.Content>
            <Popover.Arrow />

            <DropdownMenu.Content>
              <DropdownMenu.Item>Documentation</DropdownMenu.Item>
              <DropdownMenu.Item>Themes</DropdownMenu.Item>
              <DropdownMenu.Item>GitHub</DropdownMenu.Item>
            </DropdownMenu.Content>
          </Popover.Content>
        </DropdownMenu.Root>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}

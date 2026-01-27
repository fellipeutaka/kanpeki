import {
  ArchiveIcon,
  ArrowLeftIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  Trash2Icon,
} from "lucide-react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function ButtonGroupDemo() {
  return (
    <ButtonGroup.Root>
      <ButtonGroup.Root className="hidden sm:flex">
        <Button aria-label="Go Back" size="icon" variant="outline">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <Button variant="outline">Snooze</Button>
        <Menu.Root>
          <Button aria-label="More Options" size="icon" variant="outline">
            <MoreHorizontalIcon />
          </Button>

          <Popover.Content className="w-40" placement="bottom end">
            <Menu.Content>
              <Menu.Group>
                <Menu.Item>
                  <MailCheckIcon />
                  Mark as Read
                </Menu.Item>
                <Menu.Item>
                  <ArchiveIcon />
                  Archive
                </Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.Group>
                <Menu.Item variant="destructive">
                  <Trash2Icon />
                  Trash
                </Menu.Item>
              </Menu.Group>
            </Menu.Content>
          </Popover.Content>
        </Menu.Root>
      </ButtonGroup.Root>
    </ButtonGroup.Root>
  );
}

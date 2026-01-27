import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function ButtonGroupDropdownDemo() {
  return (
    <ButtonGroup.Root>
      <Button variant="outline">Follow</Button>
      <Menu.Root>
        <Button className="pl-2!" variant="outline">
          <ChevronDownIcon />
        </Button>
        <Popover.Content className="w-44" placement="bottom end">
          <Menu.Content>
            <Menu.Group>
              <Menu.Item>
                <VolumeOffIcon />
                Mute Conversation
              </Menu.Item>
              <Menu.Item>
                <CheckIcon />
                Mark as Read
              </Menu.Item>
              <Menu.Item>
                <AlertTriangleIcon />
                Report Conversation
              </Menu.Item>
              <Menu.Item>
                <UserRoundXIcon />
                Block User
              </Menu.Item>
              <Menu.Item>
                <ShareIcon />
                Share Conversation
              </Menu.Item>
              <Menu.Item>
                <CopyIcon />
                Copy Conversation
              </Menu.Item>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Group>
              <Menu.Item variant="destructive">
                <TrashIcon />
                Delete Conversation
              </Menu.Item>
            </Menu.Group>
          </Menu.Content>
        </Popover.Content>
      </Menu.Root>
    </ButtonGroup.Root>
  );
}

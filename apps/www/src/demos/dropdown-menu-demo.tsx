import { Button } from "~/components/ui/button";
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { Popover } from "~/components/ui/popover";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu.Root>
      <Button variant="outline">Open</Button>

      <Popover.Content>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Inbox</DropdownMenu.Item>
          <DropdownMenu.Item>Sent</DropdownMenu.Item>
          <DropdownMenu.Item>New Message</DropdownMenu.Item>
        </DropdownMenu.Content>
      </Popover.Content>
    </DropdownMenu.Root>
  );
}

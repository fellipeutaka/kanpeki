import { Button } from "~/registry/ui/button/button";
import { Keyboard } from "~/registry/ui/keyboard";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

export function MenuDemo() {
  return (
    <Menu.Root>
      <Button variant="outline">Open</Button>

      <Popover.Content placement="bottom start">
        <Menu.Content className="w-56">
          <Menu.Label>My Account</Menu.Label>
          <Menu.Group>
            <Menu.Item textValue="Profile">
              Profile
              <Keyboard variant="menu">⇧⌘P</Keyboard>
            </Menu.Item>
            <Menu.Item textValue="Billing">
              Billing
              <Keyboard variant="menu">⌘B</Keyboard>
            </Menu.Item>
            <Menu.Item textValue="Settings">
              Settings
              <Keyboard variant="menu">⌘S</Keyboard>
            </Menu.Item>
            <Menu.Item textValue="Keyboard shortcuts">
              Keyboard shortcuts
              <Keyboard variant="menu">⌘K</Keyboard>
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Group>
            <Menu.Item textValue="Team">Team</Menu.Item>
            <Menu.Sub>
              <Menu.Item textValue="Invite users">Invite users</Menu.Item>
              <Popover.Content>
                <Menu.Content>
                  <Menu.Item textValue="Email">Email</Menu.Item>
                  <Menu.Item textValue="Message">Message</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item textValue="More">More...</Menu.Item>
                </Menu.Content>
              </Popover.Content>
            </Menu.Sub>
            <Menu.Item textValue="New Team">
              New Team
              <Keyboard variant="menu">⌘+T</Keyboard>
            </Menu.Item>
          </Menu.Group>
          <Menu.Separator />
          <Menu.Item>GitHub</Menu.Item>
          <Menu.Item>Support</Menu.Item>
          <Menu.Item isDisabled>API</Menu.Item>
          <Menu.Separator />
          <Menu.Item textValue="Log out" variant="destructive">
            Log out
            <Keyboard variant="menu">⇧⌘Q</Keyboard>
          </Menu.Item>
        </Menu.Content>
      </Popover.Content>
    </Menu.Root>
  );
}

import { Button } from "~/registry/ui/button/button";
import { Card } from "~/registry/ui/card";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";
import { Tabs } from "~/registry/ui/tabs";
import { Textfield } from "~/registry/ui/textfield";

export function TabsDemo() {
  return (
    <Tabs.Root className="w-full max-w-[400px]" defaultSelectedKey="account">
      <Tabs.List className="grid w-full grid-cols-2">
        <Tabs.Trigger id="account">Account</Tabs.Trigger>
        <Tabs.Trigger id="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you&apos;re
              done.
            </Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-6">
            <Textfield defaultValue="Pedro Duarte">
              <Label>Name</Label>
              <Input />
            </Textfield>
            <Textfield defaultValue="@peduarte">
              <Label>Username</Label>
              <Input />
            </Textfield>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content id="password">
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </Card.Description>
          </Card.Header>
          <Card.Content className="grid gap-6">
            <Textfield>
              <Label>Current password</Label>
              <Input type="password" />
            </Textfield>
            <Textfield>
              <Label>New password</Label>
              <Input type="password" />
            </Textfield>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  );
}

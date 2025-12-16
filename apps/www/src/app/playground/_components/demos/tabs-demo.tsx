import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "~/registry/ui/button/button";
import { Card } from "~/registry/ui/card";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";
import { Tabs } from "~/registry/ui/tabs";
import { TextField } from "~/registry/ui/text-field";

export function TabsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Tabs.Root className="max-w-[400px]" defaultSelectedKey="account">
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
              <TextField defaultValue="Pedro Duarte">
                <Label>Name</Label>
                <Input />
              </TextField>
              <TextField defaultValue="@peduarte">
                <Label>Username</Label>
                <Input />
              </TextField>
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
              <TextField>
                <Label>Current password</Label>
                <Input type="password" />
              </TextField>
              <TextField>
                <Label>New password</Label>
                <Input type="password" />
              </TextField>
            </Card.Content>
            <Card.Footer>
              <Button>Save password</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>
      </Tabs.Root>

      <Tabs.Root defaultSelectedKey="home">
        <Tabs.List>
          <Tabs.Trigger id="home">Home</Tabs.Trigger>
          <Tabs.Trigger id="settings">Settings</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Tabs.Root defaultSelectedKey="home">
        <Tabs.List>
          <Tabs.Trigger id="home">Home</Tabs.Trigger>
          <Tabs.Trigger id="settings" isDisabled>
            Disabled
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>

      <Tabs.Root defaultSelectedKey="preview">
        <Tabs.List>
          <Tabs.Trigger id="preview">
            <AppWindowIcon />
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger id="code">
            <CodeIcon />
            Code
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </div>
  );
}

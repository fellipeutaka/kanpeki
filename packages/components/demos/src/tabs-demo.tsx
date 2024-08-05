import { Button } from "@kanpeki/ui/button";
import { Card } from "@kanpeki/ui/card";
import { Label } from "@kanpeki/ui/label";
import { Tabs } from "@kanpeki/ui/tabs";
import { TextField } from "@kanpeki/ui/text-field";

export default function TabsDemo() {
  return (
    <Tabs.Root defaultValue="account" className="max-w-96">
      <Tabs.List className="grid w-full grid-cols-2">
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <TextField.Root>
                <TextField.Input id="name" defaultValue="Fellipe Utaka" />
              </TextField.Root>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <TextField.Root>
                <TextField.Input id="username" defaultValue="@fellipeutaka" />
              </TextField.Root>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save changes</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="password">
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <TextField.Root>
                <TextField.Input id="current" type="password" />
              </TextField.Root>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <TextField.Root>
                <TextField.Input id="new" type="password" />
              </TextField.Root>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  );
}

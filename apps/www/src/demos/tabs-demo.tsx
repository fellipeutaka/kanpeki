import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Tabs } from "~/components/ui/tabs";
import { TextField } from "~/components/ui/textfield";

export default function TabsDemo() {
  return (
    <Tabs.Root defaultSelectedKey="account" className="max-w-96">
      <Tabs.List>
        <Tabs.Trigger id="account">Account</Tabs.Trigger>
        <Tabs.Trigger id="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="account">
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <TextField.Provider defaultValue="Fellipe Utaka">
              <Label>Name</Label>
              <TextField.Root>
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>
            <TextField.Provider defaultValue="@fellipeutaka">
              <Label>Username</Label>
              <TextField.Root>
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>
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
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content className="space-y-2">
            <TextField.Provider type="password">
              <Label>Current password</Label>
              <TextField.Root>
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>

            <TextField.Provider type="password">
              <Label>New password</Label>
              <TextField.Root>
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>
          </Card.Content>
          <Card.Footer>
            <Button>Save password</Button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Content>
    </Tabs.Root>
  );
}

import { Button } from "@kanpeki/ui/button";
import { Card } from "@kanpeki/ui/card";
import { Icons } from "@kanpeki/ui/icons";
import { Switch } from "@kanpeki/ui/switch";

const notifications = [
  {
    id: "1",
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    id: "2",
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    id: "3",
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

export default function CardDemo() {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Description>
          You have {notifications.length} unread messages.
        </Card.Description>
      </Card.Header>
      <Card.Content className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Icons.Bell className="size-6" />
          <div className="flex-1 space-y-1">
            <p className="font-medium text-sm leading-none">
              Push Notifications
            </p>
            <p className="text-muted-foreground text-sm">
              Send notifications to device.
            </p>
          </div>
          <Switch.Root>
            <Switch.Thumb />
          </Switch.Root>
        </div>
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-violet-500" />
              <div className="space-y-1">
                <p className="font-medium text-sm leading-none">
                  {notification.title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">
          <Icons.Check className="mr-2 size-4" /> Mark all as read
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

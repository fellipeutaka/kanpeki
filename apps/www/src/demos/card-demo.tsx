import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";

const notifications = [
  {
    description: "1 hour ago",
    id: "1",
    title: "Your call has been confirmed.",
  },
  {
    description: "1 hour ago",
    id: "2",
    title: "You have a new message!",
  },
  {
    description: "2 hours ago",
    id: "3",
    title: "Your subscription is expiring soon!",
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
        <div className="flex items-center gap-4 rounded-md border p-4">
          <svg
            aria-hidden="true"
            className="size-6"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9m4.3 13a1.94 1.94 0 003.4 0" />
          </svg>
          <div className="flex-1 space-y-1">
            <p className="font-medium text-sm leading-none">
              Push Notifications
            </p>
            <p className="text-muted-fg text-sm">
              Send notifications to device.
            </p>
          </div>
          <Switch.Root>
            <Switch.Track>
              <Switch.Thumb />
            </Switch.Track>
          </Switch.Root>
        </div>
        <div>
          {notifications.map((notification) => (
            <div
              className="mb-4 grid grid-cols-[1.5rem_1fr] items-start pb-4 last:mb-0 last:pb-0"
              key={notification.id}
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-violet-500" />
              <div className="space-y-1">
                <p className="font-medium text-sm leading-none">
                  {notification.title}
                </p>
                <p className="text-muted-fg text-sm">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">
          <svg
            aria-hidden="true"
            className="mr-2 size-4"
            fill="none"
            height={24}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Mark all as read
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

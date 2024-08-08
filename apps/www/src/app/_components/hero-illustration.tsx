"use client";

import { Avatar } from "@kanpeki/ui/avatar";
import { Button } from "@kanpeki/ui/button";
import { Card } from "@kanpeki/ui/card";
import { Icons } from "@kanpeki/ui/icons";
import { Switch } from "@kanpeki/ui/switch";

const avatars = [
  {
    src: "https://github.com/fellipeutaka.png",
    alt: "@fellipeutaka",
    fallback: "FU",
  },
  {
    src: "https://github.com/devongovett.png",
    alt: "@devongovett",
    fallback: "DG",
  },
  {
    src: "https://github.com/benoitgrelard.png",
    alt: "@benoitgrelard",
    fallback: "BG",
  },
  {
    src: "https://github.com/leerob.png",
    alt: "@leerob",
    fallback: "LR",
  },
] as const satisfies {
  src: string;
  alt: string;
  fallback: string;
}[];

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
] as const satisfies {
  id: string;
  title: string;
  description: string;
}[];

export function HeroIllustration() {
  return (
    <div className="space-y-4">
      <div className="-space-x-2 flex">
        {avatars.map((avatar) => (
          <Avatar.Root key={avatar.alt}>
            <Avatar.Image src={avatar.src} alt={avatar.alt} />
            <Avatar.Fallback>{avatar.fallback}</Avatar.Fallback>
            <Avatar.Placeholder>
              <Icons.User className="size-6" />
            </Avatar.Placeholder>
          </Avatar.Root>
        ))}
        <Avatar.Root>
          <Avatar.Placeholder className="animate-none text-muted-foreground">
            +3
          </Avatar.Placeholder>
        </Avatar.Root>
      </div>

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
    </div>
  );
}

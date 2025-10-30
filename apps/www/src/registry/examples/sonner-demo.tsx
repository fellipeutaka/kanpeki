"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/registry/ui/button/button";

// biome-ignore lint/suspicious/noTemplateCurlyInString: This is used for code snippet display
const promiseCode = "`${data.name} toast has been added`";

const allTypes = [
  {
    action: () => toast("Event has been created"),
    name: "Default",
    snippet: `toast('Event has been created')`,
  },
  {
    action: () =>
      toast("Event has been created", {
        description: "Monday, January 3rd at 6:00pm",
      }),
    name: "Description",
    snippet: `toast.message('Event has been created', {
  description: 'Monday, January 3rd at 6:00pm',
})`,
  },
  {
    action: () => toast.success("Event has been created"),
    name: "Success",
    snippet: `toast.success('Event has been created')`,
  },
  {
    action: () => toast.info("Be at the area 10 minutes before the event time"),
    name: "Info",
    snippet: `toast.info('Be at the area 10 minutes before the event time')`,
  },
  {
    action: () => toast.warning("Event start time cannot be earlier than 8am"),
    name: "Warning",
    snippet: `toast.warning('Event start time cannot be earlier than 8am')`,
  },
  {
    action: () => toast.error("Event has not been created"),
    name: "Error",
    snippet: `toast.error('Event has not been created')`,
  },
  {
    action: () =>
      toast.message("Event has been created", {
        action: {
          label: "Undo",
          onClick: () => console.info("Undo"),
        },
      }),
    name: "Action",
  },
  {
    action: () =>
      toast.message("Event has been created", {
        cancel: {
          label: "Cancel",
          onClick: () => console.info("Cancel"),
        },
      }),
    name: "Cancel",
  },
  {
    action: () =>
      toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve({ name: "Sonner" });
            }, 2000);
          }),
        {
          error: "Error",
          loading: "Loading...",
          success: (data) => `${data.name} toast has been added`,
        }
      ),
    name: "Promise",
    snippet: `const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

toast.promise(promise, {
  loading: 'Loading...',
  success: (data) => {
    return ${promiseCode};
  },
  error: 'Error',
});`,
  },
];

export function SonnerDemo() {
  const [activeType, setActiveType] = useState(allTypes[0]);

  return (
    <div className="flex flex-wrap gap-4">
      <Button onPress={() => toast("My first toast")} variant="outline">
        Give me a toast
      </Button>
      <Button
        onPress={() =>
          toast("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => console.info("Undo"),
            },
            description: "Sunday, December 03, 2023 at 9:00 AM",
          })
        }
        variant="outline"
      >
        Show Toast
      </Button>
      {allTypes.map((type) => (
        <Button
          data-active={activeType.name === type.name}
          key={type.name}
          onPress={() => {
            type.action();
            setActiveType(type);
          }}
          variant="ghost"
        >
          {type.name}
        </Button>
      ))}
    </div>
  );
}

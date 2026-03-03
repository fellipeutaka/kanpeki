"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { Switch } from "~/registry/ui/switch";
import { inView } from ".";

const notifSettings = [
  {
    id: "push",
    label: "Push notifications",
    sublabel: "Alerts on your device",
    defaultOn: true,
  },
  {
    id: "email",
    label: "Email digest",
    sublabel: "Weekly summary",
    defaultOn: true,
  },
  {
    id: "desktop",
    label: "Desktop sounds",
    sublabel: "Audio cues on activity",
    defaultOn: false,
  },
] as const;

export function NotificationsCard() {
  const [state, setState] = useState<Record<string, boolean>>(
    Object.fromEntries(notifSettings.map((s) => [s.id, s.defaultOn]))
  );

  return (
    <motion.div
      className="flex flex-col gap-5 rounded-xl border bg-card p-6"
      variants={inView}
    >
      <div>
        <p className="font-semibold text-sm">Notifications</p>
        <p className="text-muted-foreground text-xs">
          Manage how you're alerted
        </p>
      </div>

      <ul className="flex flex-col divide-y">
        {notifSettings.map((s) => (
          <li
            className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
            key={s.id}
          >
            <div>
              <p className="font-medium text-sm">{s.label}</p>
              <p className="text-muted-foreground text-xs">{s.sublabel}</p>
            </div>
            <Switch.Root
              isSelected={state[s.id]}
              onChange={(v) => setState((prev) => ({ ...prev, [s.id]: v }))}
            >
              <Switch.Track>
                <Switch.Thumb />
              </Switch.Track>
            </Switch.Root>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

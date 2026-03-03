import * as motion from "motion/react-client";
import { Avatar } from "~/registry/ui/avatar";
import { Badge } from "~/registry/ui/badge";
import { Button } from "~/registry/ui/button";
import { inView } from ".";

const members = [
  { initials: "SC", name: "Sarah Chen", role: "Design Lead", online: true },
  {
    initials: "MR",
    name: "Marcus Rivera",
    role: "Frontend Eng.",
    online: true,
  },
  {
    initials: "AK",
    name: "Aisha Kamara",
    role: "Product Manager",
    online: false,
  },
] as const;

export function TeamMembersCard() {
  return (
    <motion.div
      className="flex flex-col gap-5 rounded-xl border bg-card p-6"
      variants={inView}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-sm">Team</p>
          <p className="text-muted-foreground text-xs">3 members</p>
        </div>
        <Button size="sm" variant="outline">
          Invite
        </Button>
      </div>

      <ul className="flex flex-col gap-3">
        {members.map((m) => (
          <li className="flex items-center gap-3" key={m.name}>
            <div className="relative">
              <Avatar.Root className="size-8">
                <Avatar.Fallback className="text-xs">
                  {m.initials}
                </Avatar.Fallback>
              </Avatar.Root>
              <span
                aria-hidden="true"
                className={`absolute right-0 bottom-0 size-2 rounded-full ring-2 ring-card ${m.online ? "bg-green-500" : "bg-muted-foreground/40"}`}
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-sm">{m.name}</p>
              <p className="truncate text-muted-foreground text-xs">{m.role}</p>
            </div>
            <Badge
              className="shrink-0 text-[10px]"
              variant={m.online ? "default" : "secondary"}
            >
              {m.online ? "Online" : "Away"}
            </Badge>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

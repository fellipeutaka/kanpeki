import { Command } from "@kanpeki/ui/command";

export default function CommandDemo() {
  return (
    <Command.Root className="max-w-md rounded-lg border shadow-md">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item>
            <svg
              role="img"
              aria-label="Calendar"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="mr-2 size-4"
            >
              <path d="M8 2v4M16 2v4" />
              <rect width={18} height={18} x={3} y={4} rx={2} />
              <path d="M3 10h18" />
            </svg>
            <span>Calendar</span>
          </Command.Item>
          <Command.Item>
            <svg
              role="img"
              aria-label="Smile"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="mr-2 size-4"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <path d="M9 9L9.01 9" />
              <path d="M15 9L15.01 9" />
            </svg>
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item>
            <svg
              role="img"
              aria-label="Rocket"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="mr-2 size-4"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            <span>Launch</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item>
            <svg
              role="img"
              aria-label="User"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="mr-2 size-4"
            >
              <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            <span>Profile</span>
            <Command.Shortcut>⌘P</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <svg
              role="img"
              aria-label="Mail"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="mr-2 size-4"
            >
              <rect width={20} height={16} x={2} y={4} rx={2} />
              <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
            <span>Mail</span>
            <Command.Shortcut>⌘B</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <svg
              role="img"
              aria-label="Settings"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="mr-2 size-4"
            >
              <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            <span>Settings</span>
            <Command.Shortcut>⌘S</Command.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Root>
  );
}

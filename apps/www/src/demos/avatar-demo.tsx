"use client";

import { Avatar } from "~/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="https://github.com/fellipeutaka.png"
        alt="@fellipeutaka"
      />
      <Avatar.Fallback>FU</Avatar.Fallback>
      <Avatar.Placeholder>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-6"
        >
          <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
          <circle cx={12} cy={7} r={4} />
        </svg>
      </Avatar.Placeholder>
    </Avatar.Root>
  );
}

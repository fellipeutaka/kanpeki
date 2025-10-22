import { Avatar } from "~/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar.Root>
      <Avatar.Image
        alt="@fellipeutaka"
        src="https://github.com/fellipeutaka.png"
      />
      <Avatar.Fallback>FU</Avatar.Fallback>
      <Avatar.Placeholder>
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
          <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
          <circle cx={12} cy={7} r={4} />
        </svg>
      </Avatar.Placeholder>
    </Avatar.Root>
  );
}

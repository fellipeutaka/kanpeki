import { Toggle } from "~/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <svg
        fill="none"
        height={24}
        role="presentation"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        width={24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 12a4 4 0 000-8H6v8M15 20a4 4 0 000-8H6v8z" />
      </svg>
    </Toggle>
  );
}

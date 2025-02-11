import { Toggle } from "~/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <svg
        role="presentation"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 12a4 4 0 000-8H6v8M15 20a4 4 0 000-8H6v8z" />
      </svg>
    </Toggle>
  );
}

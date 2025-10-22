import { Toggle } from "~/components/ui/toggle";

export default function ToggleWithTextDemo() {
  return (
    <Toggle aria-label="Toggle italic" variant="outline">
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
        <path d="M19 4L10 4" />
        <path d="M14 20L5 20" />
        <path d="M15 4L9 20" />
      </svg>
      Italic
    </Toggle>
  );
}

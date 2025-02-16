import { Toggle } from "~/components/ui/toggle";

export default function ToggleWithTextDemo() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
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
        <path d="M19 4L10 4" />
        <path d="M14 20L5 20" />
        <path d="M15 4L9 20" />
      </svg>
      Italic
    </Toggle>
  );
}

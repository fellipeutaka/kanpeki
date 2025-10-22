import { TextField } from "~/components/ui/textfield";

const Icons = {
  User: (props) => (
    <svg
      aria-label="User"
      fill="none"
      height={24}
      role="img"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" />
      <circle cx={12} cy={7} r={4} />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export default function TextFieldWithIconDemo() {
  return (
    <TextField.Root className="w-full max-w-80">
      <TextField.Slot>
        <Icons.User className="size-4" />
      </TextField.Slot>
      <TextField.Input placeholder="Username" />
    </TextField.Root>
  );
}

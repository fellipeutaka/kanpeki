import { ButtonStyles } from "~/components/ui/button";
import { Collapsible } from "~/components/ui/collapsible";

export type IconProps = React.ComponentProps<"svg">;
export type Icon = (props: IconProps) => React.JSX.Element;

export const Icons = {
  ChevronsUpDown: (props) => (
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
      {...props}
    >
      <path d="M7 15l5 5 5-5M7 9l5-5 5 5" />
    </svg>
  ),
} as const satisfies Record<string, Icon>;

export default function CollapsibleDemo() {
  return (
    <Collapsible.Root className="w-full max-w-80 space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="font-semibold text-sm">
          @peduarte starred 3 repositories
        </h4>
        <Collapsible.Trigger
          className={ButtonStyles({ size: "sm", variant: "ghost" })}
        >
          <Icons.ChevronsUpDown className="size-4" />
          <span className="sr-only">Toggle</span>
        </Collapsible.Trigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @radix-ui/primitives
      </div>
      <Collapsible.Content className="space-y-2 aria-hidden:opacity-0">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @stitches/react
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}

import { Breadcrumb } from "~/components/ui/breadcrumb";

const Icons = {
  Slash: (props) => (
    <svg
      aria-hidden="true"
      height={32}
      viewBox="0 0 24 24"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 2L2 22"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export default function BreadcrumbCustomSeparatorDemo() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <Icons.Slash className="size-4" />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator>
        <Icons.Slash className="size-4" />
      </Breadcrumb.Separator>
      <Breadcrumb.Item>
        <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}

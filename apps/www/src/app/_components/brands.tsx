import { Icons } from "@kanpeki/ui/icons";

export function Brands() {
  return (
    <section className="flex items-center justify-center gap-12">
      <Icons.React className="size-10" />
      <Icons.NextJS className="size-10" />
      <Icons.TypeScript className="size-10" />
      <Icons.TailwindCSS className="size-10" />
      <Icons.RadixUI className="size-10" />
      <Icons.Adobe className="size-10 text-red-600" />
    </section>
  );
}

import { LinkButton } from "~/components/ui/link-button";
import { Separator } from "~/components/ui/separator";

export default function Page() {
  return (
    <main className="grid place-content-center gap-6 border-b">
      <div className="flex items-center gap-6">
        <h1 className="font-medium text-2xl">404</h1>
        <Separator orientation="vertical" />
        <h2 className="text-sm">This page could not be found.</h2>
      </div>
      <LinkButton href="/" variant="secondary">
        Go back to the home page
      </LinkButton>
    </main>
  );
}

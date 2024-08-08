import { Icons } from "@kanpeki/ui/icons";
import { LinkButton } from "@kanpeki/ui/link-button";
import { siteConfig } from "~/config/site";
import { HeroIllustration } from "./hero-illustration";

export function HeroSection() {
  return (
    <section className="w-full items-start justify-between md:flex md:max-w-7xl">
      <div className="space-y-6 pt-4">
        <LinkButton
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          variant="secondary"
          className="group"
        >
          <Icons.Sparkles className="mr-2 size-4 text-primary" />
          Star us on GitHub
          <Icons.ChevronRight className="ml-2 size-4 transition group-hover:translate-x-0.5" />
        </LinkButton>
        <h1 className="max-w-xl text-balance font-bold font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Elevate Your Design to{" "}
          <span className="bg-gradient-to-br from-primary to-[hsl(24,93%,58%)] bg-clip-text text-transparent">
            Perfection
          </span>
        </h1>
        <p className="text-md text-muted-foreground md:text-lg lg:text-xl">
          Accessible, flexible, mobile friendly, modern UI components.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <LinkButton href="/docs/introduction" size="lg">
            Get Started
          </LinkButton>
          <LinkButton
            href={siteConfig.links.github}
            variant="outline"
            size="lg"
          >
            <Icons.GitHub className="mr-2 size-5" />
            GitHub
          </LinkButton>
        </div>
        <div className="flex flex-wrap gap-8 pt-6">
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <Icons.React className="size-10" />
          </a>
          <a
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.TypeScript className="size-10" />
          </a>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.TailwindCSS className="size-10" />
          </a>
          <a
            href="https://www.radix-ui.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.RadixUI className="size-10" />
          </a>
          <a
            href="https://react-spectrum.adobe.com/react-aria/hooks.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.Adobe className="size-10 text-red-600" />
          </a>
        </div>
      </div>
      <div className="hidden px-10 lg:block xl:px-20">
        <HeroIllustration />
      </div>
    </section>
  );
}

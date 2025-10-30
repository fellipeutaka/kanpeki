import { ChevronRightIcon, SparklesIcon } from "lucide-react";
import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { LinkButton } from "~/registry/ui/link-button";
import { HeroIllustration } from "./hero-illustration";

export function HeroSection() {
  return (
    <section className="w-full items-start justify-between md:flex">
      <div className="space-y-6 pt-4">
        <LinkButton
          className="group"
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          size="sm"
          target="_blank"
          variant="secondary"
        >
          <SparklesIcon className="size-4 text-primary" />
          Star us on GitHub
          <ChevronRightIcon className="size-4 transition group-hover:translate-x-0.5" />
        </LinkButton>
        <h1 className="max-w-xl text-balance font-bold font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Elevate Your Design to{" "}
          <span className="bg-linear-to-br from-primary to-[hsl(24,93%,58%)] bg-clip-text text-transparent">
            Perfection
          </span>
        </h1>
        <p className="text-md text-muted-foreground md:text-lg lg:text-xl">
          Accessible, flexible, mobile friendly, modern UI components.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <LinkButton href="/docs" size="lg">
            Get Started
          </LinkButton>
          <LinkButton
            href={siteConfig.links.github}
            size="lg"
            variant="outline"
          >
            <Icons.GitHub className="mr-2 size-5" />
            GitHub
          </LinkButton>
        </div>
        <div className="flex flex-wrap gap-8 pt-6">
          <a href="https://react.dev" rel="noopener noreferrer" target="_blank">
            <Icons.React className="size-10" />
          </a>
          <a
            href="https://www.typescriptlang.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.TypeScript className="size-10" />
          </a>
          <a
            href="https://tailwindcss.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.TailwindCSS className="size-10" />
          </a>
          <a
            href="https://react-spectrum.adobe.com/react-aria/hooks.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.Adobe className="size-10 text-red-600" />
          </a>
          <a
            href="https://www.radix-ui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.RadixUI className="size-10" />
          </a>
          <a
            aria-label="Motion"
            href="https://motion.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.Motion className="size-10" />
          </a>
        </div>
      </div>
      <div className="hidden px-10 lg:block xl:px-20">
        <HeroIllustration />
      </div>
    </section>
  );
}

import { ChevronRightIcon, SparklesIcon } from "lucide-react";
import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { BadgeStyles } from "~/registry/ui/badge";
import { Link } from "~/registry/ui/link";
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
            <Icons.GitHub className="size-5" />
            GitHub
          </LinkButton>
        </div>

        <div className="flex flex-wrap gap-2 pt-6 *:px-4 *:py-2">
          <Link
            className={BadgeStyles({
              variant: "outline",
            })}
            href="https://react.dev"
            rel="noopener noreferrer"
            target="_blank"
            variant="unstyled"
          >
            <Icons.React className="size-5" />
            React
          </Link>
          <Link
            className={BadgeStyles({
              variant: "outline",
            })}
            href="https://www.typescriptlang.org"
            rel="noopener noreferrer"
            target="_blank"
            variant="unstyled"
          >
            <Icons.TypeScript className="size-5" />
            TypeScript
          </Link>
          <Link
            className={BadgeStyles({
              variant: "outline",
            })}
            href="https://tailwindcss.com"
            rel="noopener noreferrer"
            target="_blank"
            variant="unstyled"
          >
            <Icons.TailwindCSS className="size-5" />
            Tailwind CSS
          </Link>
          <Link
            className={BadgeStyles({
              variant: "outline",
            })}
            href="https://react-aria.adobe.com"
            rel="noopener noreferrer"
            target="_blank"
            variant="unstyled"
          >
            <Icons.Adobe className="size-5 text-red-600" />
            React Aria
          </Link>
          <Link
            className={BadgeStyles({
              variant: "outline",
            })}
            href="https://www.radix-ui.com"
            rel="noopener noreferrer"
            target="_blank"
            variant="unstyled"
          >
            <Icons.BaseUI className="size-5" />
            Base UI
          </Link>
          <Link
            className={BadgeStyles({
              variant: "outline",
            })}
            href="https://motion.dev"
            rel="noopener noreferrer"
            target="_blank"
            variant="unstyled"
          >
            <Icons.Motion className="size-5" />
            Motion
          </Link>
        </div>
      </div>

      <div className="hidden px-10 lg:block xl:px-20">
        <HeroIllustration />
      </div>
    </section>
  );
}

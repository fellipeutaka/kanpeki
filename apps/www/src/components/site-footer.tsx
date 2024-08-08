import { Badge } from "@kanpeki/ui/badge";
import { Icons } from "@kanpeki/ui/icons";
import { LinkButton } from "@kanpeki/ui/link-button";
import { Separator } from "@kanpeki/ui/separator";
import { type NavItem, docsConfig } from "~/config/docs";
import { siteConfig } from "~/config/site";

const footerLinks = [
  {
    title: "Useful Links",
    links: docsConfig.mainNav,
  },
  {
    title: "Support",
    links: [
      {
        title: "Open an issue",
        href: "https://github.com/fellipeutaka/kanpeki/issues/new",
      },
      {
        title: "Request a feature",
        href: "https://github.com/fellipeutaka/kanpeki/discussions/new?category=ideas",
      },
      {
        title: "Request an element",
        href: "https://github.com/fellipeutaka/kanpeki/discussions/new?category=requests",
      },
    ],
  },
] as const satisfies {
  title: string;
  links: NavItem[];
}[];

export function SiteFooter() {
  return (
    <footer className="container py-6 md:px-8">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex max-w-sm flex-col items-start">
          <a
            href="/"
            className="flex items-center gap-2 rounded outline-none ring-0 ring-border-focus focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Icons.Logo className="size-6" />
            <span className="font-bold leading-normal tracking-tighter">
              {siteConfig.name}
            </span>
            <Badge variant="secondary">Beta</Badge>
          </a>
          <p className="mt-2 text-md text-muted-foreground">
            Accessible, mobile friendly, modern UI components.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <LinkButton
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              aria-label="Twitter"
            >
              <Icons.Twitter className="size-4" />
            </LinkButton>
            <LinkButton
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon"
              aria-label="GitHub"
            >
              <Icons.GitHub className="size-5" />
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 sm:gap-16">
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-2">
              <p className="font-bold">{group.title}</p>
              <div className="flex flex-col gap-2">
                {group.links.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-muted-foreground text-sm underline decoration-transparent transition duration-200 hover:decoration-current"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mt-12 mb-4" />

      <p className="text-balance text-center text-muted-foreground text-sm leading-loose md:text-left">
        Built by{" "}
        <a
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Fellipe Utaka
        </a>
        . The source code is available on{" "}
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}

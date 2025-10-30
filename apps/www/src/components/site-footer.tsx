import { Icons } from "~/components/icons";
import { docsConfig, type NavItem } from "~/config/docs";
import { siteConfig } from "~/config/site";
import { Badge } from "~/registry/ui/badge";
import { Link } from "~/registry/ui/link/link";
import { LinkButton } from "~/registry/ui/link-button";
import { Separator } from "~/registry/ui/separator";

const footerLinks: {
  title: string;
  links: NavItem[];
}[] = [
  {
    links: docsConfig.mainNav,
    title: "Useful Links",
  },
  {
    links: [
      {
        href: "https://github.com/fellipeutaka/kanpeki/issues/new",
        title: "Open an issue",
      },
      {
        href: "https://github.com/fellipeutaka/kanpeki/discussions/new?category=ideas",
        title: "Request a feature",
      },
      {
        href: "https://github.com/fellipeutaka/kanpeki/discussions/new?category=requests",
        title: "Request an element",
      },
    ],
    title: "Support",
  },
];

export function SiteFooter() {
  return (
    <footer className="container py-6 md:px-8">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex max-w-sm flex-col items-start">
          <a
            className="flex items-center gap-2 rounded outline-hidden ring-0 ring-border-focus focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="/"
          >
            <Icons.Logo className="size-6" />
            <span className="font-bold leading-normal tracking-tighter">
              {siteConfig.name}
            </span>
            <Badge variant="secondary">Alpha</Badge>
          </a>
          <p className="mt-2 text-md text-muted-foreground">
            Accessible, mobile friendly, modern UI components.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <LinkButton
              aria-label="Twitter"
              href={siteConfig.links.twitter}
              rel="noopener noreferrer"
              size="icon"
              target="_blank"
              variant="ghost"
            >
              <Icons.Twitter className="size-4" />
            </LinkButton>
            <LinkButton
              aria-label="GitHub"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              size="icon"
              target="_blank"
              variant="ghost"
            >
              <Icons.GitHub className="size-5" />
            </LinkButton>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 sm:gap-16">
          {footerLinks.map((group) => (
            <div className="space-y-2" key={group.title}>
              <p className="font-bold">{group.title}</p>
              <div className="flex flex-col gap-2">
                {group.links.map((item) => (
                  <Link
                    className={
                      "text-muted-foreground text-sm underline decoration-transparent transition duration-200 not-[data-[disabled=true]]:hover:decoration-current"
                    }
                    href={item.href}
                    isDisabled={item.disabled}
                    key={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator className="mt-12 mb-4" />

      <p className="text-balance text-center text-muted-foreground text-sm leading-loose md:text-left">
        Built by{" "}
        <Link
          href={siteConfig.links.twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          Fellipe Utaka
        </Link>
        . The source code is available on{" "}
        <Link
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
}

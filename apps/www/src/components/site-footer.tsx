import { type NavItem, docsConfig } from "~/config/docs";
import { siteConfig } from "~/config/site";
import { Badge } from "./ui/badge";
import { LinkButton } from "./ui/button";
import { Icons } from "./ui/icons";
import { Link } from "./ui/link/link";
import { Separator } from "./ui/separator";

const footerLinks: {
  title: string;
  links: NavItem[];
}[] = [
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
];

export function SiteFooter() {
  return (
    <footer className="container py-6 md:px-8">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex max-w-sm flex-col items-start">
          <a
            href="/"
            className="flex items-center gap-2 rounded outline-hidden ring-0 ring-border-focus focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Icons.Logo className="size-6" />
            <span className="font-bold leading-normal tracking-tighter">
              {siteConfig.name}
            </span>
            <Badge variant="secondary">Alpha</Badge>
          </a>
          <p className="mt-2 text-md text-muted-fg">
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
                  <Link
                    key={item.href}
                    href={item.href}
                    isDisabled={item.disabled}
                    variant="default"
                    className={
                      item.disabled ? "text-sm" : "text-sm hover:underline"
                    }
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

      <p className="text-balance text-center text-muted-fg text-sm leading-loose md:text-left">
        Built by{" "}
        <Link
          variant="underline"
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fellipe Utaka
        </Link>
        . The source code is available on{" "}
        <Link
          variant="underline"
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
}

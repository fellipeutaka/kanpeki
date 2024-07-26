import { siteConfig } from "~/config/site";
import { CommandMenu } from "./command-menu";
import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { Icons } from "./ui/icons";
import { LinkButton } from "./ui/link-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <LinkButton
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="icon"
              aria-label="GitHub"
            >
              <Icons.GitHub className="size-4" />
            </LinkButton>

            <LinkButton
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="icon"
              aria-label="Twitter"
            >
              <Icons.Twitter className="size-3" />
            </LinkButton>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

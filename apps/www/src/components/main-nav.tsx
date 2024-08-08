"use client";

import { Badge } from "@kanpeki/ui/badge";
import { Icons } from "@kanpeki/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavItem, docsConfig } from "~/config/docs";
import { siteConfig } from "~/config/site";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.Logo className="size-6" />
        <span className="hidden font-bold lg:block">{siteConfig.name}</span>
        <Badge variant="secondary">Beta</Badge>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {docsConfig.mainNav.map((item) => (
          <MainNavLink key={item.href} item={item} pathname={pathname} />
        ))}
      </nav>
    </div>
  );
}

interface MainNavLinkProps {
  item: NavItem;
  pathname: string;
}

function MainNavLink({ item, pathname }: MainNavLinkProps) {
  if (item.disabled) {
    return (
      <span
        aria-disabled
        className="cursor-not-allowed text-foreground/60 opacity-50"
      >
        {item.title}
      </span>
    );
  }

  return (
    <Link
      href={item.href}
      data-active={pathname.startsWith(item.href)}
      className="text-foreground/60 transition hover:text-foreground/80 data-[active=true]:text-foreground"
    >
      {item.title}
    </Link>
  );
}

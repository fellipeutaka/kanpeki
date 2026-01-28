"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "~/components/icons";
import type { NavItem } from "~/config/docs";
import { siteConfig } from "~/config/site";
import { Badge } from "~/registry/ui/badge";

interface MainNavProps {
  mainNav: NavItem[];
}

export function MainNav({ mainNav }: MainNavProps) {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
        <Icons.Logo className="size-6" />
        <span className="hidden font-bold lg:block">{siteConfig.name}</span>
        <Badge variant="secondary">Beta</Badge>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {mainNav.map((item) => (
          <MainNavLink item={item} key={item.href} pathname={pathname} />
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
      className="text-foreground/60 transition hover:text-foreground/80 data-[active=true]:text-foreground"
      data-active={pathname.startsWith(item.href)}
      href={item.href}
    >
      {item.title}
    </Link>
  );
}

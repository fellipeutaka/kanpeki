"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "~/config/docs";
import { siteConfig } from "~/config/site";
import { Icons } from "./ui/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.Logo className="size-6" />
        <span className="hidden font-bold lg:block">{siteConfig.name}</span>
      </Link>
      <nav id="main-nav" className="flex items-center gap-4 text-sm lg:gap-6">
        {mainNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            data-active={pathname.startsWith(link.href)}
            className="text-foreground/60 transition hover:text-foreground/80 data-[active=true]:text-foreground"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
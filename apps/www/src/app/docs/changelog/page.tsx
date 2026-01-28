import { CalendarDaysIcon, RssIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { mdxComponents } from "~/components/mdx/mdx-components";
import { siteConfig } from "~/config/site";
import { type ChangelogPage, getChangelogPages } from "~/lib/changelog";
import { LinkButton } from "~/registry/ui/link-button";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Latest updates and announcements.",
  openGraph: {
    title: "Changelog",
    description: "Latest updates and announcements.",
    type: "article",
    url: `${siteConfig.url}/docs/changelog`,
  },
};

function formatDate(date: Date | null) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default async function Page() {
  const pages = getChangelogPages();
  const latestPages = pages.slice(0, 5);
  const olderPages = pages.slice(5);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h1 className="scroll-m-20 font-bold text-4xl tracking-tight">
              Changelog
            </h1>
            <LinkButton
              href="/rss.xml"
              rel="noopener noreferrer"
              size="sm"
              target="_blank"
              variant="secondary"
            >
              <RssIcon className="size-4" />
              RSS
            </LinkButton>
          </div>
          <p className="text-lg text-muted-foreground">
            Latest updates and announcements.
          </p>
        </div>
        <div className="mdx flex w-full max-w-full flex-col pt-8 pb-12">
          {latestPages.map((page) => (
            <ChangelogEntry key={page.url} page={page} />
          ))}
          {olderPages.length > 0 && (
            <div className="mb-24 scroll-mt-24" id="more-updates">
              <h2 className="mt-12 scroll-m-20 border-b pb-2 font-semibold text-2xl tracking-tight">
                More Updates
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {olderPages.map((page) => (
                  <li className="flex items-center gap-3" key={page.url}>
                    <span className="text-muted-foreground text-sm">
                      {formatDate(page.date)}
                    </span>
                    <Link
                      className="font-medium hover:underline"
                      href={page.url}
                    >
                      {page.data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 space-y-4 pt-4">
          <p className="font-medium text-sm">On This Page</p>
          <nav className="flex flex-col gap-2">
            {latestPages.map((page) => (
              <Link
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href={page.url}
                key={page.url}
              >
                {page.data.title}
              </Link>
            ))}
            {olderPages.length > 0 && (
              <a
                className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                href="#more-updates"
              >
                More Updates
              </a>
            )}
          </nav>
        </div>
      </div>
    </main>
  );
}

interface ChangelogEntryProps {
  page: ChangelogPage;
}

async function ChangelogEntry({ page }: ChangelogEntryProps) {
  const { body: MDXContent } = await page.data.load();

  return (
    <article className="mb-12 border-b pb-12">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-semibold text-xl tracking-tight">
          {page.data.title}
        </h2>
        {page.date && (
          <time
            className="flex items-center gap-1 text-muted-foreground text-sm"
            dateTime={page.date.toISOString()}
          >
            <CalendarDaysIcon aria-hidden="true" className="size-4" />
            {page.date.toLocaleDateString()}
          </time>
        )}
      </div>
      <div className="mt-6 *:first:mt-0">
        <MDXContent components={mdxComponents} />
      </div>
    </article>
  );
}

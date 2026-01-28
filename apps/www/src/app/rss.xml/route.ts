import { siteConfig } from "~/config/site";
import { getChangelogPages } from "~/lib/changelog";

export const revalidate = false;

export function GET() {
  const pages = getChangelogPages();

  const items = pages
    .map((page) => {
      const date = page.date?.toUTCString() ?? new Date().toUTCString();
      const link = `${siteConfig.url}/docs/${page.slugs.join("/")}`;

      return `    <item>
      <title><![CDATA[${page.data.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description><![CDATA[${page.data.description}]]></description>
      <pubDate>${date}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} Changelog</title>
    <link>${siteConfig.url}</link>
    <description>${siteConfig.description}</description>
    <language>en-us</language>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

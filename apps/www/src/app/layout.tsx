import "~/styles/globals.css";
import "~/styles/mdx.css";

import { cx } from "cva";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { fonts } from "~/config/fonts";
import { siteConfig } from "~/config/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
  authors: [
    {
      name: "Fellipe Utaka",
      url: "https://fellipeutaka.vercel.app",
    },
  ],
  creator: "Fellipe Utaka",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: siteConfig.ogImage,
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: "website",
    url: siteConfig.url,
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fellipeutaka",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    title: siteConfig.name,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: "white", media: "(prefers-color-scheme: light)" },
    { color: "black", media: "(prefers-color-scheme: dark)" },
  ],
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html className={cx(fonts)} lang="en" suppressHydrationWarning>
      <body>
        <div className="isolate grid min-h-dvh grid-rows-[auto_1fr_auto] font-sans">
          <Providers>
            <SiteHeader />
            {children}
            <SiteFooter />
          </Providers>
        </div>
      </body>
    </html>
  );
}

export const siteConfig = {
  name: "Kanpeki",
  url: "https://kanpeki.vercel.app",
  ogImage: "https://kanpeki.vercel.app/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    twitter: "https://twitter.com/fellipeutaka",
    github: "https://github.com/fellipeutaka/kanpeki",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    github: "https://github.com/fellipeutaka/kanpeki",
    twitter: "https://twitter.com/fellipeutaka",
  },
  name: "Kanpeki",
  ogImage: "https://kanpeki.vercel.app/og.jpg",
  url: "https://kanpeki.vercel.app",
} as const;

export type SiteConfig = typeof siteConfig;

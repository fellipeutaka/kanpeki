export const siteConfig = {
  description:
    "A set of perfect-designed components built on top of React Aria and Motion.",
  links: {
    github: "https://github.com/fellipeutaka/kanpeki",
    twitter: "https://twitter.com/fellipeutaka",
    storybook: "https://kanpeki-storybook.vercel.app",
  },
  name: "Kanpeki",
  ogImage: "https://kanpeki.vercel.app/og.jpg",
  url: "https://kanpeki.vercel.app",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "React Aria",
    "Radix UI",
    "TypeScript",
    "Component Library",
    "Open Source",
    "Accessible",
    "Customizable",
  ] as string[],
} as const;

export type SiteConfig = typeof siteConfig;

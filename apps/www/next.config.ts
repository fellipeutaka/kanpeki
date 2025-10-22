import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      destination: "https://github.com/fellipeutaka/kanpeki",
      permanent: false,
      source: "/github",
    },
    {
      destination: "/docs/introduction",
      permanent: false,
      source: "/docs",
    },
    {
      destination: "/docs/components/accordion",
      permanent: false,
      source: "/docs/components",
    },
    {
      destination: "https://kanpeki-storybook.vercel.app",
      permanent: false,
      source: "/storybook",
    },
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(config);

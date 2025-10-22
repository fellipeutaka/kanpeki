import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const config: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // biome-ignore lint/suspicious/useAwait: This needs to be an async function
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/fellipeutaka/kanpeki",
        permanent: false,
      },
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: false,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: false,
      },
      {
        source: "/storybook",
        destination: "https://kanpeki-storybook.vercel.app",
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);

import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";
import { siteConfig } from "~/config/site";

const withMDX = createMDX();

const config: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  reactStrictMode: true,
  redirects: async () => [
    {
      destination: siteConfig.links.github,
      permanent: true,
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
      destination: siteConfig.links.storybook,
      permanent: false,
      source: "/storybook",
    },
  ],
  rewrites: async () => {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/docs/:path*",
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withMDX(config);

// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    mdx(),
  ],
  output: "static",
  adapter: vercel(),
  redirects: {
    "/github": "https://github.com/fellipeutaka/kanpeki",
    "/docs": "/docs/introduction",
  },
});

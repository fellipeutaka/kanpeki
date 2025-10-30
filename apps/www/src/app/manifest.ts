import type { MetadataRoute } from "next";
import { siteConfig } from "~/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#fff",
    description: siteConfig.description,
    display: "standalone",
    icons: [
      {
        sizes: "any",
        src: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    name: siteConfig.name,
    short_name: siteConfig.name,
    start_url: "/",
    theme_color: "#fff",
  };
}

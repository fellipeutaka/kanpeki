import type { Options } from "rehype-pretty-code";
import { vercelDarkTheme } from "~/styles/vercel-dark";

export const rehypePrettyCodeOptions = {
  theme: {
    light: "github-light-default",
    dark: vercelDarkTheme,
  },
  keepBackground: false,
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
} satisfies Options;

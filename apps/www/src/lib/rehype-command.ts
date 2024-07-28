import { visit } from "unist-util-visit";

export interface Commands {
  npm: string;
  yarn: string;
  pnpm: string;
  bun: string;
}

// biome-ignore lint/suspicious/noExplicitAny: any is used to satisfy the RehypePlugin type
export const rehypeRawCommand = () => (tree: any) => {
  visit(tree, (node) => {
    if (node.type !== "element" || node?.tagName !== "pre") {
      return;
    }

    // npm install.
    if (node.properties?.rawString?.startsWith("npm install")) {
      const npmCommand = node.properties.rawString;
      node.properties.npmCommand = npmCommand;
      node.properties.yarnCommand = npmCommand.replace(
        "npm install",
        "yarn add",
      );
      node.properties.pnpmCommand = npmCommand.replace(
        "npm install",
        "pnpm add",
      );
      node.properties.bunCommand = npmCommand.replace("npm install", "bun add");
    }

    // npx create.
    if (node.properties?.rawString?.startsWith("npx create-")) {
      const npmCommand = node.properties.rawString;
      node.properties.npmCommand = npmCommand;
      node.properties.yarnCommand = npmCommand.replace(
        "npx create-",
        "yarn create ",
      );
      node.properties.pnpmCommand = npmCommand.replace(
        "npx create-",
        "pnpm create ",
      );
      node.properties.bunCommand = npmCommand.replace(
        "npx create-",
        "bun create",
      );
    }

    // npx.
    if (
      node.properties?.rawString?.startsWith("npx") &&
      !node.properties?.rawString?.startsWith("npx create-")
    ) {
      const npmCommand = node.properties.rawString;
      node.properties.npmCommand = npmCommand;
      node.properties.yarnCommand = npmCommand;
      node.properties.pnpmCommand = npmCommand.replace("npx", "pnpm dlx");
      node.properties.bunCommand = npmCommand.replace("npx", "bunx");
    }
  });
};

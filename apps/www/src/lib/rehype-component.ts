import fs from "node:fs";
import path from "node:path";
import { visit } from "unist-util-visit";

function getNodeAttributeByName(node: any, name: string) {
  return node.attributes?.find((attribute: any) => attribute.name === name);
}

// biome-ignore lint/suspicious/noExplicitAny: any is used to satisfy the RehypePlugin type
export const rehypeComponent = () => (tree: any) => {
  visit(tree, (node) => {
    if (node.name === "ComponentPreview") {
      const name = getNodeAttributeByName(node, "name")?.value as string;

      if (!name) {
        return null;
      }

      try {
        // Read the source file.
        const filePath = path.resolve(
          `../../packages/components/demos/src/${name}.tsx`,
        );
        let source = fs.readFileSync(filePath, "utf8");

        // Replace imports.
        // TODO: Use @swc/core and a visitor to replace this.
        // For now a simple regex should do.
        source = source.replaceAll("@kanpeki", "~/components");
        source = source.replaceAll("export default", "export");

        node.children?.push({
          type: "element",
          tagName: "pre",
          properties: {
            className: ["px-3"],
          },
          children: [
            {
              type: "text",
              value: source,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    }
  });
};

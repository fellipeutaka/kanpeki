import fs from "node:fs";
import path from "node:path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import type { UnistNode, UnistTree } from "~/@types/unist";

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export const rehypeComponent = () => (tree: UnistTree) => {
  visit(tree, (node: UnistNode) => {
    if (node.name === "ComponentPreview") {
      const name = getNodeAttributeByName(node, "name")?.value;

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

        node.children?.push(
          u("element", {
            tagName: "pre",
            properties: {
              __src__: filePath,
            },
            children: [
              u("element", {
                tagName: "code",
                properties: {
                  className: ["language-tsx"],
                },
                children: [
                  {
                    type: "text",
                    value: source,
                  },
                ],
              }),
            ],
          }),
        );
      } catch (error) {
        console.error(error);
      }
    }
  });
};

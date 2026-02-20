import type { TableOfContents as Toc } from "fumadocs-core/toc";
import { AnchorProvider } from "fumadocs-core/toc";
import { DocsTocTree } from "./docs-toc-tree";

interface TableOfContentsProps {
  children: React.ReactNode;
  toc: Toc;
}

export function TableOfContents({ toc, children }: TableOfContentsProps) {
  return (
    <div className="sticky top-16 -mt-10 space-y-4 pt-4">
      <p className="font-medium text-sm">On This Page</p>

      <AnchorProvider toc={toc}>
        <DocsTocTree tree={toc} />
      </AnchorProvider>

      {children}
    </div>
  );
}

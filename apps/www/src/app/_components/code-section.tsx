import { Suspense } from "react";
import { CodeBlock } from "~/components/mdx/code-block";
import { CodeSectionAnimated } from "./code-section-animated";
import { CodeSectionBlocks } from "./code-section-blocks";

function CodeBlockSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <CodeBlock.Root className="h-16 animate-pulse bg-secondary" />
      <CodeBlock.Root className="h-52 animate-pulse bg-secondary" />
    </div>
  );
}

export function CodeSection() {
  return (
    <CodeSectionAnimated
      codeBlocks={
        <Suspense fallback={<CodeBlockSkeleton />}>
          <CodeSectionBlocks />
        </Suspense>
      }
    />
  );
}

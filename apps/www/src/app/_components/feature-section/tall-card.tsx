import { PuzzleIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { CardStyles } from "~/registry/ui/card";
import { CompositionCodeBlock } from "../composition-code-block";
import { inView } from ".";

export function TallCard() {
  return (
    <motion.div
      className={CardStyles.Root({
        className: "gap-4 p-8",
      })}
      variants={inView}
    >
      <div className="flex size-9 items-center justify-center rounded-lg border bg-secondary text-foreground">
        <PuzzleIcon aria-hidden="true" className="size-5 text-red-500" />
      </div>
      <h3 className="font-semibold text-lg">Composition Pattern</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Compound components expose named sub-parts. Compose the layout you need,
        override only what matters.
      </p>
      <CompositionCodeBlock />
    </motion.div>
  );
}

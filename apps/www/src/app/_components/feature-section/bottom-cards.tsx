import { CopyIcon, RocketIcon, ZapIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { CardStyles } from "~/registry/ui/card";
import { inView } from ".";

export function BottomCards() {
  return (
    <>
      <motion.div
        className={CardStyles.Root({
          className: "gap-3 p-8",
        })}
        variants={inView}
      >
        <div className="flex size-9 items-center justify-center rounded-lg border bg-secondary text-foreground">
          <RocketIcon aria-hidden="true" className="size-5 text-orange-500" />
        </div>
        <h3 className="font-semibold text-base">Minimal Bundle</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          No monolithic package. Each component is standalone — install exactly
          what your project needs.
        </p>
      </motion.div>

      <motion.div
        className={CardStyles.Root({
          className: "gap-3 p-8",
        })}
        variants={inView}
      >
        <div className="flex size-9 items-center justify-center rounded-lg border bg-secondary text-foreground">
          <ZapIcon aria-hidden="true" className="size-5 text-green-500" />
        </div>
        <h3 className="font-semibold text-base">No Runtime Styles</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Tailwind utility classes only — zero CSS-in-JS, zero style injection,
          full purge/treeshaking support.
        </p>
      </motion.div>

      <motion.div
        className={CardStyles.Root({
          className: "gap-3 p-8 lg:col-span-1",
        })}
        variants={inView}
      >
        <div className="flex size-9 items-center justify-center rounded-lg border bg-secondary text-foreground">
          <CopyIcon aria-hidden="true" className="size-5 text-blue-500" />
        </div>
        <h3 className="font-semibold text-base">Familiar API</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Same shadcn/ui prop shapes and CVA patterns. Your muscle memory
          transfers instantly.
        </p>
      </motion.div>
    </>
  );
}

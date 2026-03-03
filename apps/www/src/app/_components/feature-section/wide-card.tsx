import { AccessibilityIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { CardStyles } from "~/registry/ui/card";
import { Keyboard } from "~/registry/ui/keyboard";
import { inView } from ".";

export function WideCard() {
  return (
    <motion.div
      className={CardStyles.Root({
        className: "relative col-span-full gap-4 p-8 lg:col-span-2",
      })}
      variants={inView}
    >
      <DecorativeGrid />

      <div className="relative flex flex-col gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg border bg-secondary text-foreground">
          <AccessibilityIcon
            aria-hidden="true"
            className="size-5 text-violet-500"
          />
        </div>
        <h3 className="font-semibold text-lg">React Aria under the hood</h3>
        <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
          Adobe's React Aria handles all the hard a11y work — focus traps, ARIA
          live regions, pointer event normalization — so you ship compliant UIs
          without reading 400 pages of spec.
        </p>
      </div>
      {/* Mini keyboard shortcut strip */}
      <div className="relative mt-2 flex flex-wrap gap-2">
        {["Tab", "Shift+Tab", "Space", "Enter", "Escape", "Arrow keys"].map(
          (key) => (
            <Keyboard
              className="h-7 px-2 text-muted-foreground text-xs"
              key={key}
            >
              {key}
            </Keyboard>
          )
        )}
      </div>
    </motion.div>
  );
}

function DecorativeGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-size-[32px_32px] opacity-40"
    />
  );
}

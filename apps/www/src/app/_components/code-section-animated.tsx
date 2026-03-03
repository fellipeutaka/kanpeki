import { CheckIcon } from "lucide-react";
import * as motion from "motion/react-client";

const inView = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

const checkPoints = [
  "Works with the official shadcn CLI",
  "Outputs into your existing component folder",
  "TypeScript first — definitions included",
  "Customize freely after adding",
] as const;

interface CodeSectionAnimatedProps {
  codeBlocks: React.ReactNode;
}

export function CodeSectionAnimated({ codeBlocks }: CodeSectionAnimatedProps) {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
      {/* Left: copy, explain */}
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        variants={inView}
        viewport={{ once: true, margin: "-80px" }}
        whileInView="visible"
      >
        <p className="font-semibold text-muted-foreground text-xs uppercase tracking-widest">
          Getting Started
        </p>
        <h2 className="text-balance font-bold text-3xl tracking-tight sm:text-4xl">
          One command. Your code.
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Use the shadcn CLI to add any Kanpeki component directly into your
          project. The source lands in your codebase — no package to install, no
          version to pin.
        </p>
        <ul className="space-y-3 text-muted-foreground text-sm">
          {checkPoints.map((point) => (
            <li className="flex items-center gap-2" key={point}>
              <CheckIcon
                aria-hidden="true"
                className="size-4 shrink-0 text-primary"
              />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right: server-rendered highlighted code blocks passed as children */}
      <motion.div
        className="flex flex-col gap-4"
        initial="hidden"
        variants={{
          ...inView,
          visible: {
            ...inView.visible,
            transition: { ...inView.visible.transition, delay: 0.12 },
          },
        }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView="visible"
      >
        {codeBlocks}
      </motion.div>
    </section>
  );
}

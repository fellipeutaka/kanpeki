import * as motion from "motion/react-client";
import { siteConfig } from "~/config/site";
import { BentoGrid } from "./bento-grid";

export const inView = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

export const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function FeatureSection() {
  return (
    <section className="space-y-20">
      <motion.div
        className="flex flex-col items-center gap-4 text-center"
        initial="hidden"
        variants={inView}
        viewport={{ once: true, margin: "-80px" }}
        whileInView="visible"
      >
        <p className="font-semibold text-muted-foreground text-xs uppercase tracking-widest">
          Why {siteConfig.name}?
        </p>
        <h2 className="max-w-2xl text-balance font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          The component library that doesn't get in your way
        </h2>
        <p className="max-w-xl text-balance text-muted-foreground md:text-lg">
          {siteConfig.name} brings the convenience of shadcn/ui to the
          accessibility of React Aria — same copy-paste DX, world-class a11y.
        </p>
      </motion.div>

      {/* Bento grid */}
      <BentoGrid />
    </section>
  );
}

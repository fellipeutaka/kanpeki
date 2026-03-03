import { ChevronRightIcon, SparklesIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { LinkButton } from "~/registry/ui/link-button";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 py-16 text-center md:pt-20 lg:pt-24">
      <AnnouncementBadge />

      <Headline />
    </section>
  );
}

function AnnouncementBadge() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <LinkButton
        className="group h-8 rounded-full text-xs"
        href="/docs/changelog/2026-02-dropzone"
        rel="noopener noreferrer"
        target="_blank"
        variant="outline"
      >
        <SparklesIcon className="size-4 text-primary" />
        <span className="text-foreground">Dropzone Component</span>
        <ChevronRightIcon
          aria-hidden="true"
          className="size-3 transition-transform group-hover:translate-x-0.5"
        />
      </LinkButton>
    </motion.div>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

function Headline() {
  return (
    <motion.div
      animate="visible"
      className="flex flex-col items-center gap-4"
      initial="hidden"
      variants={container}
    >
      <motion.h1
        className="max-w-3xl text-balance font-bold font-display text-5xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        variants={item}
      >
        Build accessible UIs,{" "}
        <span className="bg-linear-to-br from-primary via-primary to-[oklch(0.72_0.18_50)] bg-clip-text text-transparent">
          without compromise.
        </span>
      </motion.h1>

      <motion.p
        className="max-w-2xl text-balance text-lg text-muted-foreground"
        variants={item}
      >
        Beautifully designed, accessible, and composable components built on
        React Aria. Copy, paste, and own the code — no package to install, no
        lock-in.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3"
        variants={item}
      >
        <LinkButton href="/docs" size="lg">
          Get Started
        </LinkButton>
        <LinkButton
          href={siteConfig.links.github}
          rel="noopener noreferrer"
          size="lg"
          target="_blank"
          variant="outline"
        >
          <Icons.GitHub aria-hidden="true" className="size-4" />
          GitHub
        </LinkButton>
      </motion.div>
    </motion.div>
  );
}

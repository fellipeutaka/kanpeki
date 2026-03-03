import * as motion from "motion/react-client";
import { MessagesCard } from "./messages-card";
import { NotificationsCard } from "./notifications-card";
import { TeamMembersCard } from "./team-members-card";
import { UploadsCard } from "./uploads-card";

export const inView = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function ShowcaseSection() {
  return (
    <section className="space-y-6">
      <motion.div
        className="flex flex-col items-center gap-2 text-center"
        initial="hidden"
        variants={inView}
        viewport={{ once: true, margin: "-60px" }}
        whileInView="visible"
      >
        <p className="font-semibold text-muted-foreground text-xs uppercase tracking-widest">
          Live components
        </p>
        <h2 className="text-balance font-bold text-2xl tracking-tight sm:text-3xl">
          Try them right here
        </h2>
      </motion.div>

      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        initial="hidden"
        variants={stagger}
        viewport={{ once: true, margin: "-40px" }}
        whileInView="visible"
      >
        <TeamMembersCard />
        <NotificationsCard />
        <UploadsCard />
        <MessagesCard />
      </motion.div>
    </section>
  );
}

import * as motion from "motion/react-client";
import { staggerGrid } from ".";
import { BottomCards } from "./bottom-cards";
import { TallCard } from "./tall-card";
import { WideCard } from "./wide-card";

export function BentoGrid() {
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      variants={staggerGrid}
      viewport={{ once: true, margin: "-60px" }}
      whileInView="visible"
    >
      <WideCard />
      <TallCard />
      <BottomCards />
    </motion.div>
  );
}

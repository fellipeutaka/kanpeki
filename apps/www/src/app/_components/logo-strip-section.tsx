import * as motion from "motion/react-client";
import { Icons } from "~/components/icons";
import { Link } from "~/registry/ui/link";

const technologies = [
  {
    name: "React",
    href: "https://react.dev",
    icon: <Icons.React aria-hidden="true" className="size-6" />,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: <Icons.TypeScript aria-hidden="true" className="size-6" />,
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    icon: <Icons.TailwindCSS aria-hidden="true" className="size-6" />,
  },
  {
    name: "React Aria",
    href: "https://react-aria.adobe.com",
    icon: <Icons.Adobe aria-hidden="true" className="size-6 text-red-500" />,
  },
  {
    name: "Base UI",
    href: "https://base-ui.com",
    icon: <Icons.BaseUI aria-hidden="true" className="size-5" />,
  },
  {
    name: "Motion",
    href: "https://motion.dev",
    icon: <Icons.Motion aria-hidden="true" className="size-6" />,
  },
] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

export function LogoStripSection() {
  return (
    <section className="space-y-6 border-y py-14">
      <motion.p
        className="text-center font-semibold text-muted-foreground text-xs uppercase tracking-widest"
        initial="hidden"
        variants={item}
        viewport={{ once: true, margin: "-40px" }}
        whileInView="visible"
      >
        Powered by the best open-source tools
      </motion.p>

      <motion.ul
        className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        initial="hidden"
        variants={stagger}
        viewport={{ once: true, margin: "-40px" }}
        whileInView="visible"
      >
        {technologies.map(({ name, href, icon }) => (
          <motion.li key={name} variants={item}>
            <Link
              aria-label={name}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
              variant="unstyled"
            >
              {icon}
              <span className="font-medium text-sm">{name}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

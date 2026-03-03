import { StarIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { Suspense } from "react";
import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { ButtonGroup } from "~/registry/ui/button-group";
import { LinkButton } from "~/registry/ui/link-button";

export function OpenSourceSection() {
  return (
    <motion.section
      className="relative overflow-hidden rounded-2xl border px-8 py-20"
      initial={{ opacity: 0, y: 28 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-60px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <SubtleDotGrid />

      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-balance font-bold text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Open source, and proud of it.
        </h2>
        <p className="max-w-md text-balance text-base opacity-70">
          Every line of Kanpeki lives on GitHub. Read it, fork it, improve it —
          or just star it to show support.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <ButtonGroup.Root aria-label="Star Kanpeki on GitHub">
            <LinkButton
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
              variant="outline"
            >
              <Icons.GitHub aria-hidden="true" className="size-4" />
              Star on GitHub
            </LinkButton>
            <ButtonGroup.Separator />
            <LinkButton
              className="group"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
              variant="outline"
            >
              <StarIcon
                aria-hidden="true"
                className="size-3.5 fill-transparent stroke-primary transition duration-300 group-hover:fill-primary"
              />
              <Suspense fallback={<span className="opacity-50">…</span>}>
                <StarsAmount />
              </Suspense>
            </LinkButton>
          </ButtonGroup.Root>

          <LinkButton
            className="font-medium invert dark:invert-0"
            href="/docs"
            variant="outline"
          >
            Browse the Docs
          </LinkButton>
        </div>
      </div>
    </motion.section>
  );
}

function SubtleDotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px] opacity-20"
    />
  );
}

async function getGitHubStars() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${siteConfig.links.github.replace("https://github.com/", "")}`,
      { next: { revalidate: 60 } }
    );
    if (!response.ok) {
      return null;
    }
    const json = await response.json();
    return Number.parseInt(json.stargazers_count, 10).toLocaleString();
  } catch {
    return null;
  }
}

async function StarsAmount() {
  return <>{(await getGitHubStars()) ?? "—"}</>;
}

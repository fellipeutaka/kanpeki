import { Icons } from "@kanpeki/ui/icons";
import { Suspense } from "react";
import { siteConfig } from "~/config/site";

export function OpenSourceSection() {
  return (
    <section className="space-y-4 text-center">
      <h2 className="mx-auto max-w-2xl font-bold text-3xl tracking-tighter lg:text-5xl">
        Proudly{" "}
        <span className="bg-gradient-to-br from-primary to-[hsl(24,93%,58%)] bg-clip-text text-transparent">
          open-source
        </span>
      </h2>
      <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
        Our source code is available on GitHub - feel free to read, review, or
        contribute to it however you want!
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={siteConfig.links.github}
        className="mx-auto flex w-max select-none transition-opacity hover:opacity-80"
      >
        <div className="flex items-center gap-2 rounded-md border border-muted bg-muted px-4">
          <Icons.GitHub className="size-6" />
          <span className="truncate">Star us on GitHub</span>
        </div>

        <div className="flex items-center">
          <div className="size-4 border-muted border-y-8 border-y-transparent border-r-8" />
          <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
            <Suspense fallback={"--"}>
              <StarsAmount />
            </Suspense>
          </div>
        </div>
      </a>
    </section>
  );
}

async function getGitHubStars() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${siteConfig.links.github.replace(
        "https://github.com/",
        ""
      )}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (!response?.ok) {
      return null;
    }

    const json = await response.json();

    return Number.parseInt(json.stargazers_count).toLocaleString();
  } catch {
    return null;
  }
}

async function StarsAmount() {
  return (await getGitHubStars()) ?? 99999;
}

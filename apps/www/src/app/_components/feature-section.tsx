import { Card } from "@kanpeki/ui/card";
import { Icons } from "@kanpeki/ui/icons";
import { siteConfig } from "~/config/site";

const features = [
  {
    title: "Fully Customizable",
    description:
      "Easily customize the appearance and behavior of our components to match your brand and design.",
    icon: <Icons.Palette className="size-6 text-amber-500" />,
  },
  {
    title: "Accessible",
    description:
      "Our components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus management.",
    icon: <Icons.Accessibility className="size-6 text-violet-500" />,
  },
  {
    title: "No runtime styles",
    description:
      "Kanpeki is based on Tailwind CSS, it means that there are no runtime styles, and no unnecessary classes in your bundle.",
    icon: <Icons.Zap className="size-6 text-green-500" />,
  },
  {
    title: "Minimal bundle size",
    description:
      "Install only the components and hooks you need, and keep your bundle size to a minimum.",
    icon: <Icons.Rocket className="size-6 text-orange-500" />,
  },
  {
    title: "TypeScript based",
    description:
      "Build type safe applications. Kanpeki is TypeScript first, and provides type definitions out of the box.",
    icon: (
      <svg
        role="img"
        aria-label="TypeScript"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="size-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path d="M15 17.5c.32.32.754.5 1.207.5h.543c.69 0 1.25-.56 1.25-1.25v-.25a1.5 1.5 0 00-1.5-1.5 1.5 1.5 0 01-1.5-1.5v-.25c0-.69.56-1.25 1.25-1.25h.543c.453 0 .887.18 1.207.5M9 12h4m-2 0v6" />
        <path d="M21 19V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2" />
      </svg>
    ),
  },
  {
    title: "Composition Pattern",
    description:
      "Kanpeki is built using the composition pattern, which means that you can easily extend and compose components.",
    icon: <Icons.Puzzle className="size-6 text-red-500" />,
  },
  {
    title: "Open Source",
    description:
      "Kanpeki is open source, allowing you to contribute and help shape the future of the library.",
    icon: (
      <svg
        role="img"
        aria-label="GitHub"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6"
      >
        <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    title: "Extensive Community",
    description:
      "Join a growing community of developers who use and contribute to Kanpeki.",
    icon: <Icons.Users className="size-6 text-fuchsia-500" />,
  },
] as const satisfies {
  title: string;
  description: string;
  icon: React.JSX.Element;
}[];

export function FeatureSection() {
  return (
    <section className="space-y-16">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-bold text-3xl tracking-tighter sm:text-5xl">
          Why Choose {siteConfig.name}?
        </h2>
        <p className="max-w-3xl text-balance text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {siteConfig.name} offers a wide range of high-quality, customizable
          React components that will help you build stunning web applications
          with ease.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card.Root key={feature.title}>
            <Card.Header className="flex-row items-center gap-2">
              <div className="grid place-content-center rounded-full bg-secondary/80 p-2">
                {feature.icon}
              </div>

              <Card.Title>{feature.title}</Card.Title>
            </Card.Header>
            <Card.Content>
              <Card.Description>{feature.description}</Card.Description>
            </Card.Content>
          </Card.Root>
        ))}
      </div>
    </section>
  );
}

import { BugIcon, LightbulbIcon, PencilIcon } from "lucide-react";
import { Link } from "~/registry/ui/link/link";
import { getGitHubIssueUrl, getGithubFileUrl } from "~/utils/github";

interface ContributeProps {
  url: string;
  path: string;
}

export function Contribute({ url, path }: ContributeProps) {
  const contributeLinks = [
    {
      href: getGitHubIssueUrl({
        labels: ["bug", "documentation"],
        owner: "fellipeutaka",
        repo: "kanpeki",
        template: "bug_report.md",
        title: `[bug]: ${url}`,
      }),
      icon: BugIcon,
      text: "Report an issue",
    },
    {
      href: getGitHubIssueUrl({
        labels: ["enhancement"],
        owner: "fellipeutaka",
        repo: "kanpeki",
        template: "feature_request.md",
        title: `[feat]: ${url}`,
      }),
      icon: LightbulbIcon,
      text: "Request a feature",
    },
    {
      href: getGithubFileUrl(path),
      icon: PencilIcon,
      text: "Edit this page",
    },
  ];

  return (
    <div className="space-y-4">
      <p className="font-medium">Contribute</p>
      <ul className="space-y-2">
        {contributeLinks.map((link) => (
          <li key={link.href}>
            <Link
              className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <link.icon className="size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

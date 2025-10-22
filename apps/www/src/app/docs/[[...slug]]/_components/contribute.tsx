import { Icons } from "~/components/ui/icons";
import { Link } from "~/components/ui/link/link";
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
      icon: Icons.Bug,
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
      icon: Icons.Lightbulb,
      text: "Request a feature",
    },
    {
      href: getGithubFileUrl(path),
      icon: Icons.Pencil,
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
              className="inline-flex items-center text-muted-fg text-sm hover:text-fg"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <link.icon className="mr-2 size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Icons } from "~/components/ui/icons";
import { Link } from "~/components/ui/link/link";
import { getGitHubIssueUrl, getGithubFileUrl } from "~/utils/github";
import type { Doc } from "~/utils/mdx";

interface ContributeProps {
  doc: Doc;
}

export function Contribute({ doc }: ContributeProps) {
  const contributeLinks = [
    {
      text: "Report an issue",
      icon: Icons.Bug,
      href: getGitHubIssueUrl({
        owner: "fellipeutaka",
        repo: "kanpeki",
        title: `[bug]: ${doc.slugAsParams}`,
        labels: ["bug", "documentation"],
        template: "bug_report.md",
      }),
    },
    {
      text: "Request a feature",
      icon: Icons.Lightbulb,
      href: getGitHubIssueUrl({
        owner: "fellipeutaka",
        repo: "kanpeki",
        title: `[feat]: ${doc.slugAsParams}`,
        labels: ["enhancement"],
        template: "feature_request.md",
      }),
    },
    {
      text: "Edit this page",
      icon: Icons.Pencil,
      href: getGithubFileUrl(doc.slug),
    },
  ];

  return (
    <div className="space-y-4">
      <p className="font-medium">Contribute</p>
      <ul className="space-y-2">
        {contributeLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-fg text-sm hover:text-fg"
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

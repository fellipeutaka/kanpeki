import {
  CheckIcon,
  FileTextIcon,
  ImageIcon,
  PackageIcon,
  UploadIcon,
} from "lucide-react";
import * as motion from "motion/react-client";
import { Button } from "~/registry/ui/button";
import { Progress } from "~/registry/ui/progress";
import { inView } from ".";

const files = [
  {
    name: "design-system.fig",
    size: "4.2 MB",
    progress: 100,
    icon: <ImageIcon aria-hidden="true" className="size-4 text-violet-500" />,
  },
  {
    name: "quarterly-report.pdf",
    size: "1.8 MB",
    progress: 72,
    icon: <FileTextIcon aria-hidden="true" className="size-4 text-blue-500" />,
  },
  {
    name: "components-v2.zip",
    size: "12 MB",
    progress: 38,
    icon: <PackageIcon aria-hidden="true" className="size-4 text-orange-500" />,
  },
] as const;

export function UploadsCard() {
  return (
    <motion.div
      className="flex flex-col gap-5 rounded-xl border bg-card p-6"
      variants={inView}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-sm">Uploads</p>
          <p className="text-muted-foreground text-xs">
            3 files · 2 in progress
          </p>
        </div>
        <Button aria-label="Upload file" size="icon-sm" variant="outline">
          <UploadIcon aria-hidden="true" className="size-3.5" />
        </Button>
      </div>

      <ul className="flex flex-col gap-4">
        {files.map((f) => (
          <li className="flex flex-col gap-1.5" key={f.name}>
            <div className="flex items-center gap-2">
              {f.icon}
              <span className="min-w-0 flex-1 truncate font-medium text-sm">
                {f.name}
              </span>
              {f.progress === 100 ? (
                <CheckIcon
                  aria-hidden="true"
                  className="size-4 shrink-0 text-green-500"
                />
              ) : (
                <span className="shrink-0 text-muted-foreground text-xs tabular-nums">
                  {f.progress}%
                </span>
              )}
            </div>
            <Progress.Root
              aria-label={`Uploading ${f.name}`}
              value={f.progress}
            >
              <Progress.Indicator />
            </Progress.Root>
            <p className="text-muted-foreground text-xs">{f.size}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

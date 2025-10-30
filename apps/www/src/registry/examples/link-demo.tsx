import { ArrowRightIcon, Loader2Icon, SendIcon } from "lucide-react";
import { ButtonStyles } from "~/registry/ui/button";
import { Link } from "~/registry/ui/link/link";

export function LinkDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Link href="https://github.com/fellipeutaka">Link</Link>
        <Link href="https://github.com/fellipeutaka" variant="foreground">
          Foreground
        </Link>
        <Link href="https://github.com/fellipeutaka" variant="primary">
          Primary
        </Link>
        <Link href="https://github.com/fellipeutaka" variant="unstyled">
          Unstyled
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Link href="https://github.com/fellipeutaka" underline="always">
          Underline (Always)
        </Link>
        <Link href="https://github.com/fellipeutaka" underline="hover">
          Underline (Hover)
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Link
          className={ButtonStyles()}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          Link Button
        </Link>
        <Link
          className={ButtonStyles({ variant: "outline" })}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          Link Button Outline
        </Link>
        <Link
          className={ButtonStyles({ variant: "ghost" })}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          Link Button Ghost
        </Link>
        <Link
          className={ButtonStyles({ variant: "destructive" })}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          Link Button Destructive
        </Link>
        <Link
          className={ButtonStyles({ variant: "secondary" })}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          Link Button Secondary
        </Link>
        <Link
          className={ButtonStyles({ variant: "link" })}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          Link Button Link
        </Link>
        <Link
          className={ButtonStyles({ variant: "outline" })}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          <SendIcon /> Send
        </Link>
        <Link
          className={ButtonStyles({ variant: "outline" })}
          href="https://github.com/fellipeutaka"
          variant="unstyled"
        >
          Learn More <ArrowRightIcon />
        </Link>
        <Link
          className={ButtonStyles({ variant: "outline" })}
          href="https://github.com/fellipeutaka"
          isDisabled
          variant="unstyled"
        >
          <Loader2Icon className="animate-spin" />
          Please wait
        </Link>
      </div>
    </div>
  );
}

import { CheckIcon, InfoIcon, XIcon } from "lucide-react";
import type { IconProps } from "~/components/icons";
import { Icons } from "~/components/icons";

export interface AlertIconProps extends IconProps {
  variant?: "warning" | "info" | "error" | "success";
}

export function AlertIcon({ variant = "info", ...props }: AlertIconProps) {
  switch (variant) {
    case "warning":
      return <Icons.TriangleAlert {...props} />;
    case "error":
      return <XIcon {...props} />;
    case "success":
      return <CheckIcon {...props} />;
    default:
      return <InfoIcon {...props} />;
  }
}

import { type ClassValue, clsx } from "clsx";
import { cn as _cn } from "tailwind-variants";

export function cn(...inputs: ClassValue[]) {
  return _cn(clsx(inputs))({ twMerge: true });
}

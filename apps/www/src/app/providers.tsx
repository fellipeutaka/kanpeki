"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import { Toaster } from "~/components/ui/toast";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RouterProvider navigate={router.push}>
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </RouterProvider>
    </ThemeProvider>
  );
}

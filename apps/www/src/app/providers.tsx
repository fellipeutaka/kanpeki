"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { RouterProvider } from "react-aria-components";
import { getQueryClient } from "~/lib/tanstack-query";
import { Toaster } from "~/registry/ui/toast";

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
  const queryClient = getQueryClient();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <RouterProvider navigate={router.push}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </RouterProvider>
    </ThemeProvider>
  );
}

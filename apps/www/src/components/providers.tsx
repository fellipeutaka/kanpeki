"use client";

import { Toaster } from "@kanpeki/ui/toast";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster />
      <Analytics />
    </ThemeProvider>
  );
}

import { Geist, Geist_Mono } from "next/font/google";

const sans = Geist({
  variable: "--font-family-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-family-mono",
  subsets: ["latin"],
});

export const fonts = {
  sans,
  mono,
};

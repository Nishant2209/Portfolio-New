import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import "react-vertical-timeline-component/style.min.css";
import TransitionComponent from "@/components/ui/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant's Portfolio",
  description: "Modern & Minimal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/nks-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionComponent>{children}</TransitionComponent>
        </ThemeProvider>
      </body>
    </html>
  );
}

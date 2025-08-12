import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import TransitionComponent from "@/components/ui/TransitionEffect";
import ClientChatbot from "@/components/ClientChatbot";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nishant's Portfolio",
  description: "Modern & Minimal Portfolio",
  manifest: "/manifest.json",
  icons: {
    icon: "/nks-logo.png",
    apple: "/nks-logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000319",
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
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TransitionComponent>{children}</TransitionComponent>
          <ClientChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}

import React from "react";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const exo2 = Exo_2({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Let's Prompt Me",
  description:
    "Prompt Me is a tool to help you get started with your prompt writing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
      </head>
      <body className={exo2.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

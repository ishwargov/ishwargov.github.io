import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Ishwar Govind's Home page",
  description: "",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}

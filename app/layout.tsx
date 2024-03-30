import type { Metadata } from "next";
import { Hanken_Grotesk as HankenGrotesk } from "next/font/google";
import "./globals.css";
import React from "react";

const hankenGrotesk = HankenGrotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloudprism",
  description: "Cloudprism website",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Hanken_Grotesk as HankenGrotesk } from "next/font/google";
import "./globals.css";
import React from "react";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const hankenGrotesk = HankenGrotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IT Consulting & Solutions for Business - CloudPrism Solutions.",
  description:
    "Explore tailored IT consultation & solutions at CloudPrism. Transform your business with expert guidance & innovative technology strategies",
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
      <body className={hankenGrotesk.className}>
        <GoogleAnalytics />
        <noscript>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NC7PNMT9"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </noscript>
        {children}
      </body>
    </html>
  );
}

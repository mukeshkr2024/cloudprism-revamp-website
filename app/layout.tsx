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
    "Explore tailored IT consulting & solutions at CloudPrism. Transform your business with expert guidance & innovative technology strategies",
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
            <script>
              {`
              !function () {
                var reb2b = window.reb2b = window.reb2b || [];
                if (reb2b.invoked) return;
                reb2b.invoked = true;
                reb2b.methods = ["identify", "collect"];
                reb2b.factory = function (method) {
                  return function () {
                    var args = Array.prototype.slice.call(arguments);
                    args.unshift(method);
                    reb2b.push(args);
                    return reb2b;
                  };
                };
                for (var i = 0; i < reb2b.methods.length; i++) {
                  var key = reb2b.methods[i];
                  reb2b[key] = reb2b.factory(key);
                }
                reb2b.load = function (key) {
                  var script = document.createElement("script");
                  script.type = "text/javascript";
                  script.async = true;
                  script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
                  var first = document.getElementsByTagName("script")[0];
                  first.parentNode.insertBefore(script, first);
                };
                reb2b.SNIPPET_VERSION = "1.0.1";
                reb2b.load("GOYPYHV3LZOX");
              }();
            `}
            </script>
          </noscript>
        </noscript>
        {children}
      </body>
    </html>
  );
}

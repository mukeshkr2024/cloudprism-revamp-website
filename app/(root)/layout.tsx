import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/navbar";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollBarProgress>
      <div className="background_primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </ScrollBarProgress>
  );
}

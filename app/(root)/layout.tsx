import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navbar/navbar";
import FormPopupProvider from "@/context/provider";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormPopupProvider>
      <div className="background_primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </FormPopupProvider>
  );
}

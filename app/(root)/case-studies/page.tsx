import RecentWorks from "@/components/case-studies/recent-work";
import CaseStudiesFormPopup from "@/components/forms/case-studies-form";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { salesForcePartners } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Explore Success Stories: CloudPrism Solutions.",
  description:
    " Case studies showcasing our success in Salesforce solutions & software development: CloudPrism Solutions.",
  alternates: {
    canonical: "https://cloudprism.in/case-studies",
  },
  openGraph: {
    title: "Explore Success Stories: CloudPrism Solutions.",
    description:
      " Case studies showcasing our success in Salesforce solutions & software development: CloudPrism Solutions.",
    url: `https://cloudprism.in/case-studies`,
    siteName: "Cloudprism",
    locale: "en_US",
    type: "website",
    images: "https://cloudprism.in/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: " Explore Success Stories: CloudPrism Solutions.",
    description:
      " Case studies showcasing our success in Salesforce solutions & software development: CloudPrism Solutions.",
  },
};

export default function CaseStudies() {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <CaseStudiesFormPopup />
        <section
          className="flex h-[70vh] w-full flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/case-studies-bg.png')",
          }}
        >
          <div className=" flex flex-col gap-y-4 px-6 text-white lg:px-20">
            <span className="text-sm sm:text-base lg:text-xl ">
              Case Studies
            </span>
            <h2 className="h2_semibold leading-[40px] sm:leading-[50px] lg:leading-[65px]">
              Learn Real-World <br /> Success Stories{" "}
            </h2>
            <h1 className="max-w-2xl text-sm sm:text-base md:text-xl">
              Dive into real-world success stories: Explore our compelling case
              studies
            </h1>
          </div>
        </section>

        {/* Recent works  */}
        <RecentWorks />

        {/* slider  */}
        <section className="mt-14 flex flex-col gap-y-6 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
          <InfiniteMovingCards
            items={salesForcePartners}
            direction="left"
            speed="normal"
            pauseOnHover={false}
          />
          <InfiniteMovingCards
            items={salesForcePartners}
            direction="right"
            speed="normal"
            pauseOnHover={false}
          />
        </section>

        {/* Connect to us  */}
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
}

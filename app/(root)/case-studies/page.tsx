import RecentWorks from "@/components/case-studies/recent-work";
import ConnectToUs from "@/components/shared/connect-to-us";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { salesForcePartners } from "@/constants";
import React from "react";

export default function CaseStudies() {
  return (
    <div className="w-full">
      <section
        className="flex h-screen  w-full flex-col justify-center "
        style={{
          backgroundImage: "url('/assets/images/case-studies-bg.svg')",
        }}
      >
        <div className="mb-10 flex flex-col gap-y-8  px-24">
          <p className="text-xl text-white">Case Studies</p>
          <h2 className="h2_semibold max-w-lg leading-[65.66px]">
            Our Customer Success Story
          </h2>
          <p className="max-w-2xl text-xl font-normal text-white">
            Discover exciting stories from our bloggers: From cloud, AI and data
            to the metaverse, this is the place where new ideas come alive.
          </p>
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
        />
        <InfiniteMovingCards
          items={salesForcePartners}
          direction="right"
          speed="normal"
        />
      </section>

      {/* Connect to us  */}
      <ConnectToUs />
    </div>
  );
}

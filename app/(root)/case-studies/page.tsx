import RecentWorks from "@/components/case-studies/recent-work";
import CaseStudiesFormPopup from "@/components/forms/case-studies-form";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { salesForcePartners } from "@/constants";
import React from "react";

export default function CaseStudies() {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <CaseStudiesFormPopup />
        <section
          className="flex h-[70vh] w-full flex-col justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/case-studies-bg.svg')",
          }}
        >
          <div className=" flex flex-col gap-y-4 px-6 text-white lg:px-20">
            <p className="text-sm sm:text-base lg:text-xl ">Case Studies</p>
            <h2 className="h2_semibold leading-[40px] sm:leading-[50px] lg:leading-[65px]">
              Learn Real-World <br /> Success Stories{" "}
            </h2>
            <p className="max-w-2xl text-sm sm:text-base md:text-xl">
              Dive into real-world success stories: Explore our compelling case
              studies
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
    </ScrollBarProgress>
  );
}

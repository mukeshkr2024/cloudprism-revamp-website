import BuisnesGrowthCard from "@/components/card/buisness-growth-card";
import FullStackServices from "@/components/services/full-stack/full-stack-services";
import CustomButton from "@/components/shared/custom-button";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { fullStackbuisnessData, fullstackBuisnessPoints } from "@/constants";
import Link from "next/link";
import React from "react";

function FullStackPage() {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <section
          className="flex h-[600px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:h-[800px] "
          style={{
            backgroundImage: "url('/assets/images/full-stack-bg.svg')",
          }}
        >
          <div className="mb-16 flex max-w-7xl flex-col items-center justify-center gap-y-6">
            <h1 className="h1_bold xl:!text-[90px]">
              Level Up Your Digital. <br /> with our Software Solutions
            </h1>

            <p className="px-6 text-center text-base text-[#C0C0C0] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
              Build your digital journey with our seamless full-stack solutions
              - from frontend finesse to backend brilliance, weve got you
              covered!
            </p>

            <CustomButton className="rounded-3xl px-5 py-1.5">
              <Link href="/contact-us">
                <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Let&apos;s grow together
                </p>
              </Link>
            </CustomButton>
          </div>
        </section>

        {/* Services */}
        <FullStackServices />

        <div className="mx-auto mb-20 mt-16 max-w-sm px-2 sm:max-w-md md:max-w-lg lg:max-w-7xl ">
          <BuisnesGrowthCard
            buisnessData={fullStackbuisnessData}
            buisnessPoints={fullstackBuisnessPoints}
          />
        </div>
      </div>
    </ScrollBarProgress>
  );
}

export default FullStackPage;

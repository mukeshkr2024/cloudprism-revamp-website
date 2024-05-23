"use client";

import CustomButton from "@/components/shared/custom-button";
import Link from "next/link";
import React from "react";

export default function SaleforceMainSection() {
  return (
    <section
      className="relative mx-auto flex h-[600px] w-full max-w-[95rem] flex-col bg-contain bg-bottom bg-no-repeat md:h-[800px]"
      style={{
        backgroundImage: "url('/assets/images/salesforce-bg.png')",
      }}
    >
      <div className="absolute top-[160px] z-10 w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-y-6 lg:mt-8 xl:mt-10">
          <h4 className="h1_bold lg:!leading-[98.46px] xl:!text-7xl">
            Simplify Your Operations,
            <br /> Breathe Easier with Salesforce.
          </h4>
          <h1 className="px-6 text-center text-base text-[#C0C0C0] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Stay Ahead of the Curve with Our Innovative Salesforce Consultation
            and Implementation Strategies
          </h1>

          <CustomButton className="rounded-3xl px-5 py-1.5">
            <Link href="/contact-us">
              <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Let&apos;s grow together
              </p>
            </Link>
          </CustomButton>
        </div>
      </div>
      {/* <div className="absolute bottom-0 ">
        <Image
          src="/assets/images/salesforce-bg.svg"
          alt="Salesforce Consultation and Implementation Partner"
          width={900}
          height={400}
          className="w-full" // TODO:  add png
        />
      </div> */}
    </section>
  );
}

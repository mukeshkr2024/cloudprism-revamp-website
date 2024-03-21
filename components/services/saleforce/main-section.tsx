"use client";

import CustomButton from "@/components/shared/custom-button";
import Image from "next/image";
// import Spline from "@splinetool/react-spline";
import Link from "next/link";
import React from "react";

export default function SaleforceMainSection() {
  return (
    <section className="relative flex h-[80vh] w-full flex-col md:h-screen">
      <div className="absolute top-[160px] z-50 w-full">
        <div className="flex w-full flex-col items-center justify-center gap-y-6">
          <h1 className="h1_bold lg:!leading-[98.46px] xl:!text-7xl">
            Simplify Your Operations,
            <br /> Breathe Easier with Salesforce.
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
      <div className="absolute bottom-0 right-0">
        <Image
          src="/assets/images/salesforce-bg.svg"
          alt="Salesforce page"
          width={900}
          height={400}
          className="w-full"
        />
      </div>
    </section>
  );
}

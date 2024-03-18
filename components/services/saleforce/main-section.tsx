"use client";

import CustomButton from "@/components/shared/custom-button";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import React from "react";

export default function SaleforceMainSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center border">
      <div className=" flex  flex-col gap-6 text-white ">
        <div className="flex max-w-5xl flex-col items-center justify-center gap-y-4 lg:mx-6">
          <h1 className="h1_bold lg:!leading-[98.46px] xl:!text-7xl">
            Simplify Your Operations, Breathe Easier with Salesforce.
          </h1>

          <CustomButton className="rounded-3xl px-5 py-1.5">
            <Link href="/contact-us">
              <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Let&apos;s grow together
              </p>
            </Link>{" "}
          </CustomButton>
        </div>

        <div className="w-full ">
          <Spline scene="https://prod.spline.design/d8ZBFBocqNNEUCcx/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}

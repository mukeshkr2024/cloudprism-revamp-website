"use client";

import CustomButton from "@/components/shared/custom-button";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import React from "react";

const SalesforcePage = () => {
  return (
    <div className="background_primary w-full overflow-hidden">
      <div className="w-full">
        {/* main section  */}
        <section className="relative flex h-screen w-full items-center justify-center">
          <div className="size-full">
            <Spline
              scene="
https://prod.spline.design/d8ZBFBocqNNEUCcx/scene.splinecode"
            />
          </div>

          <div className="absolute flex max-w-4xl flex-col items-center justify-center gap-6  text-white">
            <h1 className="h1_bold">
              Simplify Your Operations,
              <br /> Breathe Easier with Salesforce.{" "}
            </h1>
            <p className="px-6 text-center text-base text-[#C0C0C0] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
              with the Salesforce Consulting Partner and{" "}
              <br className="hidden md:block lg:hidden" /> Salesforce{" "}
              <br className="hidden lg:block" />
              Implementation.
            </p>

            <CustomButton className="rounded-3xl px-5 py-1.5">
              <Link href="/">
                <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Let&apos;s grow together
                </p>
              </Link>
            </CustomButton>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SalesforcePage;

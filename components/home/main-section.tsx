/* eslint-disable no-unused-vars */
"use client";

import React from "react";
import CustomButton from "../shared/custom-button";
import dynamic from "next/dynamic";
import Link from "next/link";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

function MainSection() {
  return (
    <div className="relative flex h-screen max-h-[1000px] w-full items-center justify-center ">
      <div className="size-full">
        {/* <Spline scene="https://prod.spline.design/xboa1Cf0xqy0IBde/scene.splinecode" /> */}
        {/* <Spline scene="https://prod.spline.design/2vZlQQ5DGv5WqORt/scene.splinecode" /> */}
        <Spline scene="https://prod.spline.design/wP5JM0Ppw0yvu-2A/scene.splinecode" />
      </div>

      <div className="absolute flex max-w-4xl flex-col items-center justify-center gap-6  text-white">
        <h1 className="h1_bold">
          Create Value That <br /> Empowers
        </h1>
        <p className="px-6 text-center text-base text-[#C0C0C0] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
          Maximizing the Power of Complete IT Consultation and Solutions for
          Your Success
        </p>

        <CustomButton className="rounded-3xl px-5 py-1.5">
          <Link href="/contact-us">
            <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Let&apos;s grow together
            </p>
          </Link>
        </CustomButton>
      </div>
    </div>
  );
}

export default React.memo(MainSection);

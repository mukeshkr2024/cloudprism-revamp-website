"use client";

import React from "react";
import CustomButton from "../shared/custom-button";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

function MainSection() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="size-full">
        <Spline scene="https://prod.spline.design/xboa1Cf0xqy0IBde/scene.splinecode" />
      </div>

      <div className="absolute flex max-w-4xl flex-col items-center justify-center gap-6  text-white">
        <h1 className="text-center text-8xl font-bold">
          Create Value That Empowers
        </h1>
        <p className="text-center text-3xl text-[#C0C0C0]">
          with the Salesforce Consulting Partner and Salesforce Implementation.
        </p>
        <CustomButton text="Let's grow together" className="" href="" />
      </div>
    </div>
  );
}

export default React.memo(MainSection);

"use client";

import { historyData } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function HistorySection() {
  const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const data = historyData[index];

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? historyData.length - 1 : prevIndex - 1
    );
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === historyData?.length - 1 ? 0 : prevIndex + 1
    );
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <section className="mx-auto max-w-7xl ">
      <h3 className="h2_semibold pt-8 text-center sm:pt-10 md:pt-12 lg:pt-16">
        History
      </h3>
      <div
        className="mt-8 flex w-full flex-col gap-y-8   px-4 sm:mt-12 sm:gap-y-10 sm:px-12 md:mt-16 md:gap-y-12 md:px-20
     lg:px-0 "
      >
        <div className="flex size-full items-center justify-between ">
          <h4 key={animationKey} className="h2_semibold year-animation  ">
            {data.year}
          </h4>
          <div className="flex gap-x-2 sm:gap-x-4">
            <div
              className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-[35px] border-2 border-[#191919C4] shadow-md sm:w-24 md:h-14 md:w-[120px]"
              style={{
                background:
                  "linear-gradient(149.64deg, rgba(255, 255, 255, 0.2) 21.24%, rgba(255, 255, 255, 0.2) 105.43%), linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
                transition: "background-color 0.3s",
              }}
              onClick={handlePrev}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(149.64deg, rgba(255, 255, 255, 0.3) 21.24%, rgba(255, 255, 255, 0.3) 105.43%), linear-gradient(149.64deg, rgba(25, 25, 25, 0.90) 21.24%, rgba(14, 14, 14, 0.90) 105.43%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(149.64deg, rgba(255, 255, 255, 0.2) 21.24%, rgba(255, 255, 255, 0.2) 105.43%), linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)";
              }}
            >
              <ChevronLeft className="text-[#d4cbcb] hover:font-bold hover:text-[#e3d9d9]" />
            </div>

            <div
              className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-[35px] border-2 border-[#191919C4] shadow-md sm:w-24 md:h-14 md:w-[120px]"
              style={{
                background:
                  "linear-gradient(149.64deg, rgba(255, 255, 255, 0.2) 21.24%, rgba(255, 255, 255, 0.2) 105.43%), linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
                transition: "background-color 0.3s",
              }}
              onClick={handleNext}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(149.64deg, rgba(255, 255, 255, 0.3) 21.24%, rgba(255, 255, 255, 0.3) 105.43%), linear-gradient(149.64deg, rgba(25, 25, 25, 0.90) 21.24%, rgba(14, 14, 14, 0.90) 105.43%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(149.64deg, rgba(255, 255, 255, 0.2) 21.24%, rgba(255, 255, 255, 0.2) 105.43%), linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)";
              }}
            >
              <ChevronRight className="text-[#d4cbcb] hover:font-bold hover:text-[#e3d9d9]" />
            </div>
          </div>
        </div>
        <p
          key={animationKey}
          className="year-animation text-sm font-light text-white sm:text-lg md:text-xl"
        >
          {data?.description}
        </p>
      </div>
    </section>
  );
}

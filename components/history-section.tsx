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
    <section className="mx-auto flex max-w-7xl flex-col gap-y-16  lg:min-h-[400px]">
      <h1 className="h2_semibold pt-16 text-center">History</h1>
      <div className="flex w-full flex-col gap-y-12">
        <div className="flex justify-between">
          <h1
            key={animationKey}
            className="h2_semibold year-animation pt-16 text-center"
          >
            {data?.year}
          </h1>
          <div className="flex gap-x-4">
            <div
              className="flex h-[50px] w-[125px] cursor-pointer items-center justify-center rounded-[35px]"
              style={{
                background:
                  "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
              }}
              onClick={handlePrev}
            >
              <ChevronLeft className="text-[#5C5B5B]" />
            </div>
            <div
              className="flex h-[50px] w-[125px] cursor-pointer items-center justify-center rounded-[35px]"
              style={{
                background:
                  "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
              }}
              onClick={handleNext}
            >
              <ChevronRight className="text-[#5C5B5B]" />
            </div>
          </div>
        </div>
        <p className="text-xl font-light text-white">{data?.description}</p>
      </div>
    </section>
  );
}

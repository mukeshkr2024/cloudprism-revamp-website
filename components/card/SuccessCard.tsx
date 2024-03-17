/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface SuccessCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

export const SuccessCard = ({
  imgUrl,
  title,
  description,
}: SuccessCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[282px] w-[175px] overflow-hidden rounded-[15px] bg-cover bg-no-repeat p-6 sm:h-[320px] sm:w-[200px] md:h-[420px] md:w-[260px]"
      style={{
        backgroundImage: `url(${imgUrl})`,
        boxShadow: isHovered
          ? "0px 3px 7px 0px #42FF9E1F, 0px 13px 13px 0px #42FF9E1C, 0px 30px 18px 0px #42FF9E0F, 0px 53px 21px 0px #42FF9E05, 0px 83px 23px 0px #42FF9E00"
          : "none",
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-[15px] transition-opacity duration-500"
          style={{
            backdropFilter: "blur(20px)",
            opacity: 0.85,
          }}
        />
      )}
      <div className="relative">
        <p className="z-10 text-xs text-[#E5E5E5] md:text-sm">
          RESEARCH REPORT
        </p>
        <h3 className="z-10 mt-10 text-base font-medium text-[#EDEDED] md:text-xl">
          {title}
        </h3>
      </div>
      <div
        className={`absolute bottom-0 right-0 h-2/3 w-full bg-opacity-90 px-6 transition-all duration-500 ${isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <p className="mt-10 pt-8 text-sm text-[#A4A4A4]  md:line-clamp-5">
          {description}
        </p>
      </div>

      <div
        className={`absolute bottom-7 left-0 w-full bg-opacity-90 px-5 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="flex w-full items-center justify-end bg-cover bg-no-repeat text-xl font-semibold text-[#02FFB3]">
          Expand
          <ChevronRight className="size-6" />
        </div>
      </div>
    </div>
  );
};

/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// TODO:  to add image left slide

interface SuccessCardProps {
  imgUrl: string;
  title: string;
  description: string;
  slug: string;
}

export const SuccessCard = ({
  imgUrl,
  title,
  slug,
  description,
}: SuccessCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="relative hidden h-[282px] w-[175px] overflow-hidden rounded-[15px] bg-cover bg-center bg-no-repeat p-6 sm:h-[320px] sm:w-[200px] md:flex md:h-[420px] md:w-[260px]"
        style={{
          boxShadow: isHovered
            ? "0px 3px 7px 0px #42FF9E1F, 0px 13px 13px 0px #42FF9E1C, 0px 30px 18px 0px #42FF9E0F, 0px 53px 21px 0px #42FF9E05, 0px 83px 23px 0px #42FF9E00"
            : "none",
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div
          className="absolute inset-0 rounded-[15px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imgUrl})`,
            filter: isHovered ? "blur(25px)" : "none",
            transition: "filter 0.5s ease-in-out",
          }}
        />
        <div className="relative">
          <span className="z-10 text-xs text-[#E5E5E5] md:text-sm">
            RESEARCH REPORT
          </span>
          <h3 className="z-10 mt-10 line-clamp-4 text-base font-medium text-[#EDEDED] md:text-xl">
            {title}
          </h3>
        </div>
        <div
          className={`absolute bottom-0 right-0 h-2/3 w-full bg-opacity-90 px-6 transition-all duration-500 ${isHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <h4 className="mt-10 line-clamp-2 pt-8 text-sm text-[#A4A4A4] md:line-clamp-5">
            {description}
          </h4>
        </div>

        <div
          className={`absolute bottom-0 right-0 mt-4 hidden -translate-x-1/2 md:flex ${
            isHovered
              ? "duration-[100ms] bottom-[-50px] right-[-40px] opacity-100 transition-all"
              : "bottom-0 opacity-0"
          }`}
        >
          <Image
            src="/assets/icons/arrow-up.svg"
            alt="IT Consultancy & Solutions"
            width={110}
            height={110}
          />
        </div>

        <div
          className={`absolute bottom-7 left-0 w-full bg-opacity-90 px-5 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <div className="flex w-full items-center justify-end bg-cover bg-no-repeat text-xl font-semibold text-[#02FFB3]">
            <Link href={slug} className="flex items-center justify-center">
              Expand
              <ChevronRight className="size-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex h-[300px] w-[175px] flex-col justify-between overflow-hidden rounded-[15px] border border-[#2E2E2EC9] bg-cover  bg-center bg-no-repeat p-4 md:hidden">
        <div
          className="absolute inset-0 rounded-[15px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${imgUrl})`,
            filter: "blur(25px)",
            transition: "filter 0.5s ease-in-out",
          }}
        />
        <div className="z-10 w-full">
          <div>
            <span className="text-xs text-[#E5E5E5]"> RESEARCH REPORT</span>
            <h4 className="mt-4 line-clamp-2 text-base font-medium text-[#EDEDED]">
              {title}
            </h4>
            <p className="mt-5 line-clamp-6 text-xs  text-[#A4A4A4]">
              {description}
            </p>
          </div>

          <div className="relative flex w-full justify-end">
            <div>
              <Link
                href={slug}
                className="absolute bottom-0 flex items-center justify-center pl-2 text-lg font-semibold text-[#02FFB3]"
              >
                Expand
                <ChevronRight className="size-6" />
              </Link>
              <Image
                src="/assets/icons/arrow-up.svg"
                alt="IT Consultancy & Solutions"
                width={90}
                height={90}
                className="mb-[-50px]"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

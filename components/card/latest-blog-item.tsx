"use client";
import React, { useState } from "react";
import Link from "next/link";
import CustomButton from "../shared/custom-button";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  slug: string;
};

export const LatestBlogItem = ({ title, slug, description, image }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex max-w-sm  flex-col  gap-2.5 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-4 text-white transition-all duration-500 hover:backdrop-blur-xl sm:p-6 md:p-12  lg:max-w-xl"
      // style={{
      //   backgroundImage: `url(${imgUrL})`,
      // }}
    >
      <div
        className="absolute inset-0 rounded-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          filter: isHovered ? "blur(20px)" : "none",
          transition: "filter 0.5s ease-in-out",
        }}
      />
      <div className="z-10 pb-2 md:pb-10">
        <h3 className="sm:text-base">Latest Blog</h3>
        <h2
          className={`mt-4 line-clamp-2 text-lg font-bold lg:mt-8 lg:text-xl xl:text-2xl ${
            isHovered
              ? "md:scale-105 md:transition-all md:duration-500"
              : "transition-all duration-500"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-2 line-clamp-2 text-sm md:mt-4 lg:text-[15px]  ${
            isHovered
              ? "md:scale-105 md:transition-all md:duration-500"
              : "transition-all duration-500"
          }`}
        >
          {description}
        </p>

        <div
          className={`absolute bottom-0 right-0 mt-4 hidden -translate-x-1/2 md:flex ${
            isHovered
              ? "duration-[100ms] bottom-[-20px] right-[-40px] opacity-100 transition-all"
              : "bottom-0 opacity-0"
          }`}
        >
          <Image
            src="/assets/icons/arrow-up.svg"
            alt="Arrow up"
            width={150}
            height={167}
          />
        </div>

        <div
          className={`absolute bottom-0 right-0 mt-4 hidden -translate-x-1/2 md:flex ${
            isHovered
              ? "duration-[100ms] bottom-[40px] opacity-100 transition-all"
              : "bottom-0 opacity-0"
          }`}
        >
          <CustomButton className="rounded-3xl px-3 py-1.5">
            <Link href={slug}>
              <p className="text-sm  font-semibold text-black lg:text-[16px]">
                Read More
              </p>
            </Link>
          </CustomButton>
        </div>
        <CustomButton className="mt-3 rounded-3xl px-3 py-1.5 md:hidden">
          <Link href={slug}>
            <p className="text-sm  font-semibold text-black lg:text-[16px]">
              Read More
            </p>
          </Link>
        </CustomButton>
      </div>
    </div>
  );
};

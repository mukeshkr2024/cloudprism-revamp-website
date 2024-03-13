"use client";
import React, { useState } from "react";
import Link from "next/link";

type Props = {
  slug: string;
  bgUrl: string;
  title: string;
  intro: string;
};

export const LatestBlogItem = ({ slug, bgUrl, title, intro }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={`/blog/${slug}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex  max-w-sm flex-col gap-2.5 rounded-lg bg-no-repeat p-4 text-white transition-all duration-300 hover:backdrop-blur-xl sm:p-6 md:p-12 lg:max-w-xl "
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-lg transition-opacity duration-500"
          style={{
            backdropFilter: "blur(15px)",
            zIndex: -1,
            opacity: 0.85,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
      <div className="pb-2 md:pb-10">
        <h3 className="sm:text-base">Latest Blog</h3>
        <h2
          className={`mt-4 text-lg font-bold lg:mt-8 lg:text-xl xl:text-2xl ${
            isHovered
              ? "md:scale-105 md:transition-all md:duration-500"
              : "transition-all duration-500"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-4 text-sm lg:text-base xl:text-lg ${
            isHovered
              ? "md:scale-105 md:transition-all md:duration-500"
              : "transition-all duration-500"
          }`}
        >
          {intro}
        </p>
        <p
          className={`absolute bottom-0 left-24 mt-4 hidden -translate-x-1/2 text-xl font-semibold underline md:flex ${
            isHovered
              ? "duration-[600ms] bottom-[40px] opacity-100 transition-all"
              : "bottom-0 opacity-0"
          }`}
        >
          Read More
        </p>
        <p className="mt-2.5 cursor-pointer font-semibold hover:underline md:hidden">
          Read More
        </p>
      </div>
    </Link>
  );
};

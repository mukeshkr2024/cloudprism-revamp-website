"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ServiceProps {
  imgUrl: string;
  title: string;
  description: string;
  svgUrl: string;
  href: string;
}

export default function ServiceCard({
  description,
  imgUrl,
  title,
  svgUrl,
  href,
}: ServiceProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full rounded-[19px] border border-[#2E2E2E] px-6 py-8 shadow-md transition-colors duration-300 ease-in-out sm:px-8 sm:py-12 md:px-10 md:pb-12 md:hover:border-[#02FFB3] lg:px-12 lg:pb-12  xl:px-14 xl:pb-16 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.56) 21.24%, rgba(14, 14, 14, 0.56) 105.43%)",
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="h-24 w-32 rounded-[19px]">
          <div className="absolute left-0 top-0  ">
            <Image
              alt="IT Consultancy & Solutions"
              src={svgUrl}
              width={194}
              height={53}
              className={cn(isHovered ? "opacity-100" : "opacity-70")}
            />
          </div>
          <Image
            src={imgUrl}
            alt={"IT Consultancy & Solutions"}
            width={50}
            height={50}
          />
        </div>
        {href ? (
          <Link href={href}>
            <h4 className="text-[19px] font-bold text-white md:text-2xl">
              {title}
            </h4>
          </Link>
        ) : (
          <h4 className="text-[19px] font-bold text-white md:text-2xl">
            {title}
          </h4>
        )}

        <p className="text-[14px] text-[#adacac] md:text-lg">{description}</p>
      </div>
    </div>
  );
}

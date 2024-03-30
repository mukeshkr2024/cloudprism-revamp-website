"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";

interface ServiceProps {
  imgUrl: string;
  title: string;
  description: string;
  svgUrl: string;
}

export default function ServiceCard({
  description,
  imgUrl,
  title,
  svgUrl,
}: ServiceProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full rounded-[19px] border border-[#2E2E2E] px-6 py-8 shadow-md transition-colors duration-300 ease-in-out hover:border-[#02FFB3] sm:px-8 sm:py-12 md:px-10 md:pb-12 lg:px-12 lg:pb-16  xl:px-14 xl:pb-20 "
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
              alt="svg"
              src={svgUrl}
              width={194}
              height={53}
              className={cn(isHovered ? "opacity-100" : "opacity-70")}
            />
          </div>
          <Image src={imgUrl} alt={title} width={50} height={50} />
        </div>
        <h3 className="text-[19px] font-bold text-white">{title}</h3>
        <p className="text-[14px] text-[#777777]">{description}</p>
      </div>
    </div>
  );
}

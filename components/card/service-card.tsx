"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ServiceProps {
  imgUrl: string;
  title: string;
  description: string;
  svgUrl: string;
}

// TODO: Fix the issue or border radius

export default function ServiceCard({
  description,
  imgUrl,
  title,
  svgUrl,
}: ServiceProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full rounded-[19px] px-6 py-8 sm:px-8 sm:py-12 md:px-10 md:pb-12 lg:px-12 lg:pb-16 xl:px-14 xl:pb-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.56) 21.24%, rgba(14, 14, 14, 0.56) 105.43%)",
        boxShadow:
          "-14px 3px 33px 0px #0000001C, -58px 14px 59px 0px #0000001A,  -129px 31px 80px 0px #0000000F,-230px 56px 95px 0px #00000005, -360px 87px 104px 0px #00000000",
        border: "1px solid",
        borderImage: isHovered
          ? "linear-gradient(145.67deg, #02FFB3 -40.26%, rgba(2, 255, 179, 0.04) 97.86%) 1"
          : "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 1",
      }}
    >
      <div className="flex flex-col gap-4">
        <div
          className="h-24 w-32 rounded-[19px] bg-cover"
          style={{
            backgroundImage: `url('${svgUrl}')`,
          }}
        >
          <Image src={imgUrl} alt={title} width={50} height={50} />
        </div>
        <h3 className="text-[19px] font-bold text-white">{title}</h3>
        <p className="text-[14px] text-[#777777]">{description}</p>
      </div>
    </div>
  );
}

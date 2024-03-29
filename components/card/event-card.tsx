"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import CustomButton from "../shared/custom-button";

interface EventProps {
  imgUrl: string;
  title: string;
  description: string;
  readTime: string;
  slug: string;
}

export default function EventCard({
  imgUrl,
  title,
  description,
  readTime,
  slug,
}: EventProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[279px] rounded-lg "
      style={{
        border: "1px solid",
        borderImage: isHovered
          ? "linear-gradient(90deg, rgba(2, 255, 179, 0) 2.62%, #02FFB3 59.68%, rgba(2, 255, 179, 0) 90.09%) 1"
          : " linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 1",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image height={154} width={279} alt={title} src={imgUrl} />
      <div
        style={{
          background:
            "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
        }}
        className="flex flex-col gap-y-8 rounded-lg px-6 py-12"
      >
        <h3 className="text-xl font-bold text-white line-clamp-2">{title}</h3>
        <p className="line-clamp-3 text-sm font-normal text-[#798882]">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#798882]">{readTime} Read</span>
          <CustomButton className="rounded-3xl px-3 py-1.5">
            <Link href={`/event/${slug}`}>
              <p>Read More</p>
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

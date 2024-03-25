"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import CustomButton from "../shared/custom-button";
import { createSlug } from "@/utils/cn";

interface BlogProps {
  imgUrl: string;
  title: string;
  description: string;
  readTime: string;
}

export default function BlogCard({
  imgUrl,
  title,
  description,
  readTime,
}: BlogProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-[279px] rounded-lg text-white"
      style={{
        border: "1px solid",
        borderImage: isHovered
          ? "linear-gradient(90deg, rgba(2, 255, 179, 0) 2.62%, #02FFB3 59.68%, rgba(2, 255, 179, 0) 90.09%) 1"
          : "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 1",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image height={154} alt={title} src={imgUrl} width={279} />
      <div className="card_primary_background flex h-[280px] flex-col justify-between rounded-b-lg px-6 py-8 transition-colors duration-200 ease-in-out">
        <h3 className="line-clamp-2 text-xl font-bold text-white">{title}</h3>
        <p className="line-clamp-3 text-sm font-normal text-[#798882]">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#798882]">{readTime}</span>
          <CustomButton className="rounded-3xl px-3 py-1.5">
            <Link href={`/blog/${createSlug(title)}`}>
              <p className="text-black">Read More</p>
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

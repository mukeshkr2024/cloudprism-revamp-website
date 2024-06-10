"use client";

import { OurTeamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function TeamCard({
  description,
  name,
  profilePic,
  linkdeinUrl,
  portfolio,
}: OurTeamProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`card_primary_background relative h-[200px] w-[170px] rounded-lg p-4 transition-colors duration-300 ease-in-out sm:h-[230px] sm:w-[220px]`}
      style={{
        borderBottom: "1.5px solid",
        borderImage: hovered
          ? "linear-gradient(90deg, rgba(2, 255, 179, 0) 2.62%, #02FFB3 59.68%, rgba(2, 255, 179, 0) 90.09%) 1.5"
          : "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 1.5",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={linkdeinUrl}
        className="absolute right-4 top-4"
        target="_blank"
      >
        <Image
          src="/assets/icons/linkdein-dark.svg"
          width={20}
          height={20}
          alt=" IT Consultancy & Solutions"
        />
      </Link>
      <div className="flex size-full flex-col items-center justify-center gap-1.5">
        <Image
          src={profilePic}
          alt={" IT Consultancy & Solutions"}
          width={103}
          height={103}
          className="rounded-full "
        />
        {portfolio ? (
          <Link
            href={portfolio}
            target="_blank"
            className="flex flex-col gap-[2px] text-center"
          >
            <span className="line-clamp-1 text-lg font-semibold text-white">
              {name}
            </span>
            <p className="line-clamp-1 text-sm font-light text-[#C6C6C6] sm:text-base">
              {description}
            </p>
          </Link>
        ) : (
          <div className="flex flex-col gap-[2px] text-center">
            <span className="line-clamp-1 text-lg font-semibold text-white">
              {name}
            </span>
            <p className="line-clamp-1 text-sm font-light text-[#C6C6C6] sm:text-base">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

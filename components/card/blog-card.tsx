"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomButton from "../shared/custom-button";

interface BlogProps {
  image: string;
  title: string;
  description: string;
  readTime: {
    text: string;
  };
  slug: string;
}

export default function BlogCard({
  image,
  title,
  description,
  readTime,
  slug,
}: BlogProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsHovered(event.matches);
    };

    setIsHovered(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
      {image ? (
        <Image
          height={154}
          alt="salesforce consultation and Implementation partner"
          src={image}
          width={279}
          className="rounded-t-lg"
        />
      ) : (
        <div className="h-[154px] w-[279px] rounded-t-lg"></div>
      )}
      <div className="card_primary_background flex h-[280px] flex-col justify-between rounded-b-lg px-6 py-8 transition-colors duration-200 ease-in-out">
        <h4 className="line-clamp-2 text-xl font-bold text-white">{title}</h4>
        <p className="line-clamp-3 text-sm font-normal text-[#798882]">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm capitalize text-[#798882]">
            {readTime?.text}
          </span>
          <CustomButton className="rounded-3xl px-3 py-1.5">
            <Link href={slug}>
              <p className="text-black">Read More</p>
            </Link>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

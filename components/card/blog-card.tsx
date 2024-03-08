import Image from "next/image";
import React from "react";
import Link from "next/link";

interface BlogProps {
  imgUrl: string;
  title: string;
  href: string;
  description: string;
  readTime: string;
}

export default function BlogCard({
  imgUrl,
  title,
  href,
  description,
  readTime,
}: BlogProps) {
  return (
    <div className="w-[279px] rounded-[8px]">
      <Image height={154} width={279} alt={title} src={imgUrl} />
      <div
        style={{
          background:
            "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
        }}
        className="flex flex-col gap-y-8 px-6 py-12"
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm font-normal text-[#798882] ">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#798882]">{readTime} Read</span>
          <button
            className="background_button rounded-3xl px-5 py-1.5"
            style={{
              boxShadow:
                "0px 1px 2px 0px #3BE88E61, 0px 4px 4px 0px #3BE88E54, 0px 8px 5px 0px #3BE88E30, 0px 14px 6px 0px #3BE88E0F, 0px 23px 6px 0px #3BE88E03",
            }}
          >
            <Link href={href}>
              <p className="text-sm font-semibold">Read More</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
// import React, { useState } from "react";

type Props = {
  name: string;
  description: { content: string }[];
  profilePic: string;
};

export default function ClientCard({ description, name, profilePic }: Props) {
  // const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex h-[210px] w-[310px] cursor-pointer flex-col gap-3 rounded-lg border border-[#02FFB3]  p-5 shadow-md transition-colors duration-300 ease-in-out md:w-[330px] md:border-[#2E2E2EC9] md:hover:border-[#02FFB3] lg:h-[223px] lg:w-[390px]"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
      }}
    >
      <div className="flex items-center gap-4">
        <Image
          src={profilePic}
          alt={name}
          width={60}
          height={60}
          className="size-[50px] rounded-full"
        />
        <div>
          <h4 className="text-base font-medium text-white md:text-lg">
            {name}
          </h4>
          {/* <p className="text-sm text-[#747373] md:text-base"> @cloudprism</p> */}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {description &&
          description.map((item, index) => (
            <p
              key={index}
              className="line-clamp-3 text-xs text-[#ADADAD] lg:text-sm"
            >
              {item?.content}
            </p>
          ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";

interface Props {
  title: string;
  description: string;
}

export default function WhyStandOutCard({ description, title }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex h-[80px] items-center rounded-[20px] border px-8 text-lg font-medium text-[#A5A5A5]  transition-all duration-300 ease-in-out"
      style={{
        background: hovered
          ? "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)"
          : "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
        borderImage: hovered
          ? "linear-gradient(90deg, rgba(2, 255, 179, 0) 2.62%, #02FFB3 59.68%, rgba(2, 255, 179, 0) 90.09%) 1"
          : "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 1",
        boxShadow: hovered
          ? "0px 7px 16px 0px #4DEFB10A,0px 29px 29px 0px #4DEFB10A, 0px 64px 39px 0px #4DEFB105, 0px 115px 46px 0px #4DEFB103, 0px 179px 50px 0px #4DEFB100"
          : "",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Render description when hovered */}
      {hovered ? (
        <p className="text-lg text-[#E2E2E2] transition-transform duration-300 ease-in-out ">
          {description}
        </p>
      ) : (
        /* Render title by default */
        <h3 className="text-2xl font-semibold text-[#A5A5A5] transition-transform duration-300 ease-in-out">
          {title}
        </h3>
      )}
    </div>
  );
}

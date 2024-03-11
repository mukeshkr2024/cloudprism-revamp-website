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
      className="flex h-20 items-center rounded-[20px]  border px-8 text-lg font-medium text-[#A5A5A5]"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
        border: "1px solid",
        borderImageSource:
          "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <p className="text-base text-[#E2E2E2] transition-transform duration-300 ease-in-out">
          {description}
        </p>
      ) : (
        <h3 className="text-2xl font-semibold text-[#A5A5A5] transition-transform duration-300 ease-in-out">
          {title}
        </h3>
      )}
    </div>
  );
}

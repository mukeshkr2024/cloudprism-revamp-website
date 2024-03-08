import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function WhyStandOutCard({ description, title }: Props) {
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
    >
      <h3>{title}</h3>
    </div>
  );
}

import Image from "next/image";
import React from "react";

interface ServiceProps {
  imgUrl: string;
  title: string;
  description: string;
}

// TODO add gradient effects

export default function ServiceCard({
  description,
  imgUrl,
  title,
}: ServiceProps) {
  return (
    <div
      className="w-full rounded-[19px] border px-14 pb-20 pt-10"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.56) 21.24%, rgba(14, 14, 14, 0.56) 105.43%);",
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Image src={imgUrl} alt={title} width={50} height={50} />
        </div>
        <h3 className="text-[19px] font-bold text-white">{title}</h3>
        <p className="text-[14px] text-[#777777]">{description}</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

interface SuccessCardProps {
  imgUrl: string;
  title: string;
}

export const SuccessCard = ({ imgUrl, title }: SuccessCardProps) => {
  console.log(imgUrl);

  return (
    <div
      className="h-[420px] w-[260px] rounded-3xl border bg-cover bg-no-repeat p-6"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <p className="text-sm text-[#E5E5E5]"> RESEARCH REPORT</p>
      <h3 className="mt-10 text-xl font-medium text-[#EDEDED]">
        Reinvention in the age of generative AI
      </h3>
    </div>
  );
};

import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description1: string;
  description2?: string;
  imgUrl: string;
  className: string;
};

export default function MissionCard({
  description1,
  imgUrl,
  title,
  description2,
  className,
}: Props) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-y-12">
      <h1 className="h2_semibold text-center">{title}</h1>
      <div className={`flex ${className} items-center justify-center`}>
        <div className="flex flex-1 flex-col gap-4  px-6 py-2 sm:px-10 sm:py-14 md:px-16 lg:px-6">
          <p className="text-center font-light text-[#F2EFEF] sm:text-lg lg:text-start">
            {description1}
          </p>
          {description2 && (
            <p className="text-center font-light text-[#F2EFEF] sm:text-lg lg:text-start">
              {description2}
            </p>
          )}
        </div>
        <Image
          src={imgUrl}
          alt={title}
          width={525}
          height={495}
          className="flex size-[300px] flex-1 items-center justify-center  sm:size-[350px] md:size-[400px] lg:h-[495px] lg:w-[550px] "
        />
      </div>
    </section>
  );
}

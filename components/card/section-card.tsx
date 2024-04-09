import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  description1: string;
  description2?: string;
  imgUrl: string;
  className: string;
  imagSize?: string;
}

export default function SectionCard({
  title,
  description1,
  description2,
  imgUrl,
  className,
  imagSize,
}: Props) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col  ">
      <h4 className="h2_semibold text-center">{title}</h4>
      <div
        className={`${className} flex w-full  items-center justify-center  `}
      >
        <div className="flex flex-1 flex-col gap-4  px-6 py-2 sm:px-10 sm:py-14 md:px-16 lg:px-6">
          {description1 && (
            <p className="text-center font-light text-[#F2EFEF] sm:text-[17px] lg:text-start lg:text-[20px]">
              {description1}
            </p>
          )}
          {description2 && (
            <p className="text-center font-light text-[#F2EFEF] sm:text-[17px] lg:text-start lg:text-[20px]">
              {description2}
            </p>
          )}
        </div>

        <Image
          src={imgUrl}
          alt={title}
          width={570}
          height={620}
          className={imagSize}
        />
      </div>
    </section>
  );
}

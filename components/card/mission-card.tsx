import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description1: string;
  description2?: string;
  imgUrl: string;
  svgUrl: string;
  className: string;
};

export default function MissionCard({
  description1,
  imgUrl,
  svgUrl,
  title,
  description2,
  className,
}: Props) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-y-12 ">
      <h1 className="h2_semibold text-center">{title}</h1>

      <div className={`flex ${className}`}>
        <div className="flex flex-1 flex-col gap-4  px-6 py-14 sm:px-10 md:px-16 lg:px-0">
          <p className="text-center font-light text-[#F2EFEF] sm:text-lg lg:text-start">
            {description1}
          </p>

          {description2 && (
            <p className="text-center font-light text-[#F2EFEF] sm:text-lg lg:text-start">
              {description2}
            </p>
          )}
        </div>

        <div
          className="flex w-full flex-1 items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('${svgUrl}')`,
          }}
        >
          <Image
            src={imgUrl}
            alt={title}
            height={350}
            width={350}
            className="size-[260px] rounded-b-full sm:size-[310px] md:size-[330px] lg:size-[350px]"
          />
        </div>
      </div>
    </section>
  );
}

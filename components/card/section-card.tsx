import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  description1: string;
  description2?: string;
  imgUrl: string;
  className: string;
  imagSize?: string;
  alt?: string;
  otherdetails?: {
    name?: string;
    desgination?: string;
    portfolio?: string;
  };
}

export default function SectionCard({
  title,
  description1,
  description2,
  imgUrl,
  className,
  alt,
  imagSize,
  otherdetails,
}: Props) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col  ">
      <h3 className="h2_semibold text-center">{title}</h3>
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

        <div className="relative">
          <Image
            src={imgUrl}
            alt={alt || "IT Consultancy & Solutions"}
            width={570}
            height={620}
            className={imagSize}
          />
          {otherdetails && otherdetails.portfolio && (
            <div className="absolute right-[31%] top-[82%] text-center text-[#F2EFEF]">
              <Link
                href={otherdetails?.portfolio}
                target="_blank"
                rel="noopener"
              >
                <p className="text-xl font-semibold sm:text-2xl">
                  {otherdetails?.name}
                </p>
                <span className="text-base sm:text-lg">
                  {otherdetails?.desgination}
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

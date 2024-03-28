import React from "react";

interface Props {
  buisnessData: {
    total: string;
    description: string;
  }[];
  buisnessPoints: {
    id: number;
    content: string;
  }[];
}

export default function BuisnesGrowthCard({
  buisnessData,
  buisnessPoints,
}: Props) {
  return (
    <section className="growth_background flex h-[720px] flex-col rounded-lg  border-2 border-[#191919C4] shadow-md lg:h-[443px] lg:flex-row">
      <div className="flex flex-1 flex-col items-start justify-center px-4 sm:px-8 md:px-10 lg:px-12">
        <h3 className="text-2xl font-extralight text-white lg:text-[36px]">
          Why Choose CloudPrism
        </h3>
        <h2 className="text-4xl font-semibold text-white lg:text-[45px] lg:leading-[58.63px]">
          For Your Business <br />
          Growth
        </h2>
        <div className="mt-12 flex w-full justify-between lg:mt-20 lg:pr-14">
          {buisnessData.map((data) => (
            <div
              key={data.total}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl font-extrabold text-[#02FFB3] lg:text-6xl">
                {data.total}+
              </span>
              <p className="text-xs text-white md:text-sm">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#5B5B5B] lg:h-full lg:w-[1px]" />
      <div className="flex flex-1 items-center justify-start">
        <div className="flex flex-col gap-y-4 px-4 sm:px-8 md:px-10 lg:gap-y-8 lg:px-14">
          {buisnessPoints.map((point) => (
            <div key={point.id} className="flex  items-center gap-x-6">
              <span className="text-3xl font-normal text-white lg:text-[39px]">
                0{point.id}
              </span>{" "}
              <p className="text-base font-light text-white lg:text-[22px]">
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { recentWorks } from "@/constants";
import React from "react";
import { SuccessCard } from "../card/SuccessCard";

export default function RecentWorks() {
  return (
    <section className="mx-auto mt-6 max-w-6xl  ">
      <h2 className="h2_semibold text-center">Read Our Recent Works</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 md:mt-16 md:gap-x-6 md:gap-y-10 lg:mt-20">
        {recentWorks.map((work) => (
          <SuccessCard
            description={work.description}
            imgUrl={work.imgUrl}
            title={work.title}
            key={work.title}
          />
        ))}
      </div>
    </section>
  );
}

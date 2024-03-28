import React from "react";
import { SuccessCard } from "../card/SuccessCard";
import { recentCaseStudies } from "@/constants/case-studies";

export default function RecentWorks() {
  return (
    <section className="mx-auto mt-6 max-w-6xl  ">
      <h2 className="h2_semibold text-center">Read Our Recent Works</h2>
      <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-12 md:mt-16 md:gap-x-6 md:gap-y-10 lg:mt-20">
        {recentCaseStudies &&
          recentCaseStudies.map((item) => (
            <SuccessCard
              description={item.description}
              imgUrl={item.imageUrl}
              title={item.title}
              key={item.id}
              slug={item.slug}
            />
          ))}
      </div>
    </section>
  );
}

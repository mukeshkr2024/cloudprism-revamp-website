"use client";

import React from "react";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { salesForcePartners } from "@/constants";

export default function SalesforcePartnerSlider() {
  return (
    <section className="mx-auto mt-14 flex max-w-[90rem] flex-col gap-y-6 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
      <InfiniteMovingCards
        items={salesForcePartners}
        direction="left"
        speed="normal"
      />
      <InfiniteMovingCards
        items={salesForcePartners}
        direction="right"
        speed="normal"
      />
    </section>
  );
}

"use client";

import React from "react";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { salesForcePartners } from "@/constants";

export default function SalesforcePartnerSlider() {
  return (
    <section className="mx-auto mt-14 flex max-w-[95rem] flex-col gap-y-6 sm:mt-20  ">
      <InfiniteMovingCards
        items={salesForcePartners}
        direction="left"
        speed="normal"
        pauseOnHover={false}
      />
      <InfiniteMovingCards
        items={salesForcePartners}
        direction="right"
        speed="normal"
        pauseOnHover={false}
      />
    </section>
  );
}

"use client";

import React from "react";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { salesForcePartners } from "@/constants";

export default function SalesforcePartnerSlider() {
  return (
    <section className="mt-32 flex flex-col gap-y-6">
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

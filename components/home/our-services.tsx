import Image from "next/image";
import React from "react";
import ServiceCard from "../card/service-card";

export default function OurServices() {
  return (
    <section className="flex w-full py-4">
      <div className="flex w-1/3 items-start gap-6 px-4">
        <h2 className="h2-semibold">
          Our <br /> Services
        </h2>
        <Image
          src="/assets/icons/arrow-down.svg"
          alt="Arrow-down"
          height={100}
          width={100}
        />
      </div>

      <div className="flex w-2/3 flex-col gap-y-8 ">
        <ServiceCard
          imgUrl="/assets/icons/one-stop.svg"
          title="One Stop Salesforce Solution"
          description="CloudPrism provides salesforce consultancy services by understanding your firm's basic needs that is some people want to make more money, some people want to save money, and some people want to save time. Don't get lost in the sea of CRM, get your business onboard with Salesforce Implementation a leading CRM tool, holding the largest market share. Grab the opportunity to restructure your traditional CRM management with the right team of Salesforce implementation at CloudPrism to transform."
        />
        <ServiceCard
          imgUrl="/assets/icons/full-stack.svg"
          title="Full Stack Development"
          description=" Don't get lost in the sea of CRM, get your business onboard with Salesforce Implementation a leading CRM tool, holding the largest market share. Grab the opportunity to restructure your traditional CRM management with the right team of Salesforce implementation at CloudPrism to transform. Don't get lost in the sea of CRM, get your business onboard with Salesforce Implementation a leading CRM tool, holding the largest market share. Grab the opportunity to restructure your traditional CRM management with the right team of Salesforce implementation at CloudPrism to transform."
        />
      </div>
    </section>
  );
}

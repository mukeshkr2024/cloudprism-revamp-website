"use client";

import SectionCard from "@/components/card/section-card";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SalesForceServices() {
  const [scrollRotation, setScrollRotation] = useState(240);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotation = 240 + (scrollPosition / window.innerHeight) * 80;
      setScrollRotation(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8">
      <div className="flex">
        <h2 className="h2_semibold">
          Our <br /> Services
        </h2>
        <Image
          src="/assets/icons/arrow-down.svg"
          alt="Arrow-down"
          height={100}
          width={100}
          style={{
            transform: `rotate(${scrollRotation}deg)`,
          }}
          className="size-20"
        />
      </div>

      <SectionCard
        title="Salesforce Consulting"
        description1=" CloudPrism is dedicated to modifying your business process through
            smart Salesforce deployment and consulting services. Our goal is to
            enhance efficiency, boost productivity,of all sizes and industries
            and drive your organization to remarkable success by preferring
            Salesforce, the global leader in customer relationship management
            (CRM) platforms. With a focus on quality and client satisfaction, we
            are committed to guiding your company to its fullest potential in
            the digital realm."
        description2="Our partnership extends beyond mere transactions, as we share a
        commitment to social responsibility and ethical practices. At
        CloudPrism, empathy guides our approach to ethical resource
        management and fair treatment of all individuals involved.
        Partnering with us not only aligns with your values but also
        demonstrates a shared commitment to making a positive imp"
        className="flex-col-reverse lg:flex-row"
        imgUrl="/assets/images/salesforce-consulting.svg"
      />
      <SectionCard
        title="Salesforce Consulting"
        description1=" CloudPrism is dedicated to modifying your business process through
            smart Salesforce deployment and consulting services. Our goal is to
            enhance efficiency, boost productivity,of all sizes and industries
            and drive your organization to remarkable success by preferring
            Salesforce, the global leader in customer relationship management
            (CRM) platforms. With a focus on quality and client satisfaction, we
            are committed to guiding your company to its fullest potential in
            the digital realm."
        description2="Our partnership extends beyond mere transactions, as we share a
        commitment to social responsibility and ethical practices. At
        CloudPrism, empathy guides our approach to ethical resource
        management and fair treatment of all individuals involved.
        Partnering with us not only aligns with your values but also
        demonstrates a shared commitment to making a positive imp"
        className=" flex-col-reverse lg:flex-row-reverse"
        imgUrl="/assets/images/salesforce-integration.svg"
      />
      <SectionCard
        title="Salesforce Implementation"
        description1="CloudPrism is dedicated to modifying  your business process through smart Salesforce deployment and consulting services. Our goal is to enhance efficiency, boost productivity,of all sizes and industries and drive your organization to remarkable success by preferring Salesforce, the global leader in customer relationship management (CRM) platforms. With a focus on quality and client satisfaction, we are committed to guiding your company to its fullest potential in the digital realm."
        description2="Our partnership extends beyond mere transactions, as we share a commitment to social responsibility and ethical practices. At CloudPrism, empathy guides our approach to ethical resource management and fair treatment of all individuals involved. Partnering with us not only aligns with your values but also demonstrates a shared commitment to making a positive imp"
        className="flex-col-reverse lg:flex-row"
        imgUrl="/assets/images/salesforce-integration.svg"
      />

      <section
        className="mx-auto h-full max-w-5xl rounded-lg text-white"
        style={{
          background:
            "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
          border: "1px solid",
          borderImage:
            "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 1",
        }}
      >
        <div className="flex w-full gap-x-10">
          <div className="flex flex-1 flex-col justify-between px-12 py-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-extralight">
                Why Choose CloudPrism
              </h3>
              <h2 className="text-5xl font-semibold">
                For Your Business Growth
              </h2>
            </div>

            <div className="flex items-center justify-center gap-x-8">
              <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <span className="text-6xl font-extrabold text-[#02FFB3]">
                  120+
                </span>
                <p className="text-sm">Projects Delivered</p>
              </div>
              <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <span className="text-6xl font-extrabold text-[#02FFB3]">
                  100+
                </span>
                <p className="text-sm">Salesforce-certified developers</p>
              </div>
              <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <span className="text-6xl font-extrabold text-[#02FFB3]">
                  20+
                </span>
                <p className="text-sm">Countries served</p>
              </div>
            </div>
          </div>
          <div className=" w-[1px] bg-red-500" />

          <div className="flex w-full flex-1 flex-col items-start justify-center gap-y-4 py-10">
            {listData.map((item) => (
              <div className="flex w-full items-center gap-x-6" key={item.id}>
                <span className="text-[39px] font-normal">0{item.id}</span>
                <p className="text-[21px] font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const listData = [
  {
    id: 1,
    text: "300+ Certified Salesforce Developers",
  },
  {
    id: 2,
    text: "Intutive User Experience",
  },
  {
    id: 3,
    text: "Open To Sign Non-Disclosure Agreement",
  },
  {
    id: 4,
    text: "Dedicated Team Of Salesforce Experts",
  },
  {
    id: 5,
    text: "Multi-Cloud Salesforce Expertise",
  },
];

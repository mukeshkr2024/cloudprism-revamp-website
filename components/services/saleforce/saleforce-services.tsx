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
    </div>
  );
}

"use client";

import SectionCard from "@/components/card/section-card";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SalesForceServices() {
  const [scrollRotation, setScrollRotation] = useState(300);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotation = 300 + (scrollPosition / window.innerHeight) * 80;
      setScrollRotation(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center space-y-8 md:mt-10">
      <div className="mb-12 flex gap-4 lg:mb-16">
        <h3 className="h2_semibold">
          Our <br /> Services
        </h3>
        <Image
          src="/assets/icons/arrow-down.png"
          alt="Arrow-down"
          height={80}
          width={80}
          style={{
            transform: `rotate(${scrollRotation}deg)`,
          }}
          className=" size-12 lg:size-[75px]"
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
        imagSize="w-[750px] mt-[-40px] flex items-center justify-center ml-[-40px]"
        className="flex-col-reverse lg:flex-row"
        imgUrl="/assets/images/salesforce-consulting.png" // TODO: add later svg
      />
      <SectionCard
        title="Salesforce Integration"
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
        imagSize="w-[730px] flex items-center justify-center mr-[-50px]"
        imgUrl="/assets/images/salesforce-integration.png"
      />
      <SectionCard
        title="Salesforce Implementation"
        description1="CloudPrism is dedicated to modifying  your business process through smart Salesforce deployment and consulting services. Our goal is to enhance efficiency, boost productivity,of all sizes and industries and drive your organization to remarkable success by preferring Salesforce, the global leader in customer relationship management (CRM) platforms. With a focus on quality and client satisfaction, we are committed to guiding your company to its fullest potential in the digital realm."
        description2="Our partnership extends beyond mere transactions, as we share a commitment to social responsibility and ethical practices. At CloudPrism, empathy guides our approach to ethical resource management and fair treatment of all individuals involved. Partnering with us not only aligns with your values but also demonstrates a shared commitment to making a positive imp"
        imagSize="w-[730px] lg:mt-[-60px] flex items-center justify-center  ml-[-20px]"
        className="flex-col-reverse lg:flex-row"
        imgUrl="/assets/images/salesforce-implementation.png"
      />
    </div>
  );
}

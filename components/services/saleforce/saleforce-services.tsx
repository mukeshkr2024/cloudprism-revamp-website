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
          alt="Salesforce Consultation and Implementation Partner"
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
        description1="CloudPrism is dedicated to modifying your business process through smart Salesforce consultation services. Our goal is to enhance efficiency, boost productivity, and drive your organization to remarkable success by leveraging Salesforce, the global leader in customer relationship management (CRM) platforms. We are committed to guiding your company to its fullest potential in the digital realm. Our Salesforce consultation services encompass a comprehensive approach, ensuring a smooth transition and maximizing the value you receive from Salesforce."
        description2=" Our partnership extends beyond mere transactions, as we share a commitment to social responsibility and ethical practices. At CloudPrism, empathy guides our approach to ethical resource management and fair treatment of all individuals involved. Partnering with us not only aligns with your values but also demonstrates a shared commitment to making a positive impact."
        imagSize="w-[750px] mt-[-40px] flex items-center justify-center ml-[-40px]"
        className="flex-col-reverse lg:flex-row"
        imgUrl="/assets/images/salesforce-consulting.png" // TODO: add later svg
      />
      <SectionCard
        title="Salesforce Integration"
        description1="In today's digital landscape, businesses rely on a complex ecosystem of software to manage various functions. Salesforce, the leading customer relationship management (CRM) platform, sits at the heart of many organizations. However, data silos can form when Salesforce isn't integrated with other crucial applications like marketing automation tools or accounting software. This can lead to inefficiencies and hinder a holistic view of your customer interactions."
        description2="Salesforce integration bridges this gap by seamlessly connecting your CRM with other systems. This allows for automated data exchange, eliminating manual data entry and ensuring all your data is up to date. With a unified system, you can gain a 360-degree view of your customers, streamline workflows, and improve collaboration across departments. This ultimately translates to better customer experiences, increased productivity, and data-driven decision making."
        className=" flex-col-reverse lg:flex-row-reverse"
        imagSize="w-[730px] flex items-center justify-center mr-[-50px]"
        imgUrl="/assets/images/salesforce-integration.png"
      />
      <SectionCard
        title="Salesforce Implementation"
        description1="Although Salesforce has a large feature set, its full potential only becomes apparent when it is customized to your unique business requirements. This is where Salesforce implementation comes in. It's the process of customizing and configuring Salesforce to seamlessly integrate with your existing workflows and maximize its impact."
        description2="A well-executed Salesforce implementation involves a deep understanding of your business goals, challenges, and data structure. Consultants work closely with your team to design a customized solution, configure user roles and permissions, and automate key processes. This ensures your sales reps have the tools and functionalities they need to succeed.  The result? Improved lead generation, efficient sales pipelines, and valuable insights to drive data-backed sales strategies."
        imagSize="w-[730px] lg:mt-[-60px] flex items-center justify-center  ml-[-20px]"
        className="flex-col-reverse lg:flex-row"
        imgUrl="/assets/images/salesforce-implementation.png"
      />
    </div>
  );
}

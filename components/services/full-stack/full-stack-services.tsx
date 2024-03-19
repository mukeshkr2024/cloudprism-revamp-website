"use client";

import SectionCard from "@/components/card/section-card";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function FullStackServices() {
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
      <div className="flex gap-6">
        <h2 className="h2_semibold">
          Our <br />
          Services
        </h2>
        <Image
          src="/assets/icons/arrow-down.svg"
          alt="Arrow-down"
          height={65}
          width={65}
          style={{
            transform: `rotate(${scrollRotation}deg)`,
          }}
        />
      </div>

      <div className="flex flex-col space-y-8">
        <SectionCard
          title="Full-stack Development"
          imgUrl="/assets/images/full-stack-service.svg"
          description1="CloudPrism strives to be a platinum partner of Salesforce, that will enable us to convert industry of all sizes to cloud by providing them the best SAAS Tools of salesforce deployment and consulting. We aspire to improve consumer experiences, optimize company operations by bringing firm data into the cloud, and reach development prospects by constantly pushing the frontiers of technology and honoring innovations. Together with our clients, we hope to modify sectors and impact the future of business using Salesforce's revolutionary power."
          className="flex-col-reverse lg:flex-row-reverse"
        />

        <SectionCard
          title="Web Development"
          imgUrl="/assets/images/salesforce-integration.svg"
          description1="CloudPrism is dedicated to modifying  your business process through smart Salesforce deployment and consulting services. Our goal is to enhance efficiency, boost productivity,of all sizes and industries and drive your organization to remarkable success by preferring Salesforce, the global leader in customer relationship management (CRM) platforms. With a focus on quality and client satisfaction, we are committed to guiding your company to its fullest potential in the digital realm."
          description2="Our partnership extends beyond mere transactions, as we share a commitment to social responsibility and ethical practices. At CloudPrism, empathy guides our approach to ethical resource management and fair treatment of all individuals involved. Partnering with us not only aligns with your values but also demonstrates a shared commitment to making a positive imp"
          className="flex-col-reverse lg:flex-row"
        />

        <SectionCard
          title="Mobile App Development"
          imgUrl="/assets/images/salesforce-integration.svg"
          description1="CloudPrism strives to be a platinum partner of Salesforce, that will enable us to convert industry of all sizes to cloud by providing them the best SAAS Tools of salesforce deployment and consulting. We aspire to improve consumer experiences, optimize company operations by bringing firm data into the cloud, and reach development prospects by constantly pushing the frontiers of technology and honoring innovations. Together with our clients, we hope to modify sectors and impact the future of business using Salesforce's revolutionary power.
      "
          className="flex-col-reverse lg:flex-row-reverse"
        />
      </div>
    </div>
  );
}

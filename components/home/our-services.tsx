"use client";

import React, { useState, useEffect } from "react";
import ServiceCard from "../card/service-card";
import Image from "next/image";

export default function OurServices() {
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
    <section className="flex w-full flex-col gap-y-12 py-4 lg:flex-row">
      <div className="mx-2.5 flex w-full items-start gap-6 px-4 sm:mx-4 md:mx-8 lg:w-1/3">
        <h3 className="h2_semibold">
          Our <br /> Services
        </h3>
        <Image
          src="/assets/icons/arrow-down.png"
          alt="IT Consultancy & Solutions"
          height={80}
          width={80}
          style={{ transform: `rotate(${scrollRotation}deg)` }}
          className="size-16 lg:size-[75px]"
        />
      </div>

      <div className="mx-2.5 flex flex-col gap-y-8 sm:mx-4 md:mx-8 lg:w-2/3">
        <ServiceCard
          svgUrl="/assets/gradients/one-stop-vector.svg"
          imgUrl="/assets/icons/one-stop.svg"
          title="One stop salesforce solutions"
          description="Refined workflows, Increase customer experiences, and boost efficiency with our integrated Salesforce and IT solutions. From initial implementation to advanced customization, along with expert Salesforce consultation, we offer end-to-end services modified to your business needs. Seamlessly streamline your service delivery and IT solutions, making progress happen all in one step."
        />
        <ServiceCard
          svgUrl="/assets/gradients/full-stack-gradient.svg"
          imgUrl="/assets/icons/full-stack.svg"
          title="Software Development & Solutions"
          description="Improve your online projects with CloudPrism's experts in Software Development. We specialize in crafting user-friendly websites and robust behind-the-scenes systems. Our services encompass data management, connecting various software components, and providing customized solutions tailored to your needs. Whether you're initiating a project or ensuring its seamless operation, our Inclusive Software Solutions are here for you."
        />
      </div>
    </section>
  );
}

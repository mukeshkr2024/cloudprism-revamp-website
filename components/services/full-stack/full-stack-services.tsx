"use client";

import SectionCard from "@/components/card/section-card";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function FullStackServices() {
  const [scrollRotation, setScrollRotation] = useState(280);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotation = 280 + (scrollPosition / window.innerHeight) * 80;
      setScrollRotation(rotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 overflow-hidden">
      <div className="mb-12 mt-4 flex gap-6 lg:mb-24">
        <h2 className="h2_semibold">
          Our <br />
          Services
        </h2>
        <Image
          src="/assets/icons/arrow-down.png"
          alt="Arrow-down"
          height={60}
          width={60}
          style={{
            transform: `rotate(${scrollRotation}deg)`,
          }}
          className="size-[50px] lg:size-[63px]"
        />
      </div>

      <div className="flex flex-col space-y-12">
        <SectionCard
          title="Software Consultation"
          imgUrl="/assets/images/software-consultation.svg"
          description1="Feeling lost in the digital jungle? Our software consultations are your map to success. We pair experienced professionals with your business goals to craft a winning technology strategy. From concept to launch, we optimize your development process, ensuring smooth sailing every step of the way. Partner with us and conquer your digital frontier.
          "
          imagSize="w-[730px] mt-[-60px] flex items-center justify-center  mr-[-60px]"
          className="flex-col-reverse lg:flex-row-reverse"
        />

        <SectionCard
          title="Web Development"
          imgUrl="/assets/images/full-stack-service.svg"
          description1="In today's digital age, your website is your storefront to the world. Our web development expertise helps you craft a captivating online presence that reflects your brand's unique identity. We go beyond just aesthetics, building user-friendly interfaces that guide visitors effortlessly through your offerings.
          "
          imagSize="w-[770px] mt-[-60px] flex items-center justify-center  mr-[-40px]"
          className="flex-col-reverse lg:flex-row"
        />

        <SectionCard
          title="Mobile App Development"
          imgUrl="/assets/images/mobile-app-devlopement.svg"
          description1="Want your business in every pocket? Our mobile app development team creates intuitive and engaging apps that put your brand at your customers' fingertips. We handle everything from concept to launch, ensuring a seamless user experience that drives engagement and loyalty. Let's build your mobile app success story today.
          .
      "
          imagSize="w-[730px] mt-[-60px] flex items-center justify-center  mr-[-60px]"
          className="flex-col-reverse lg:flex-row-reverse"
        />
      </div>
    </div>
  );
}

import SectionCard from "@/components/card/section-card";
import TeamCard from "@/components/card/team-card";
import HistorySection from "@/components/history-section";
import CustomButton from "@/components/shared/custom-button";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { ourTeams } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  title: "IT Consulting & Solutions Partner- CloudPrism Solutions.",
  description:
    "Discover CloudPrism Solutions, your trusted partner for IT consultation & solutions. Expertise crafted for your business success",
  alternates: {
    canonical: "https://cloudprism.in/about-us",
  },
  openGraph: {
    title: "IT Consulting & Solutions Partner- CloudPrism Solutions.",
    siteName: "Cloudprism",
    description:
      "Discover CloudPrism Solutions, your trusted partner for IT consultation & solutions. Expertise crafted for your business success",
    url: "https://cloudprism.in/about-us",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting & Solutions Partner- CloudPrism Solutions.",
    description:
      "Discover CloudPrism Solutions, your trusted partner for IT consultation & solutions. Expertise crafted for your business success",
    site: "@_CloudPrism_",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "CloudPrism Solutions",
    alternateName: "CloudPrism",
    url: "https://cloudprism.in/about-us",
    logo: "https://cloudprism.in/assets/icons/company-logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "83295 53438",
      contactType: "customer service",
      areaServed: ["US", "GB", "AE", "IN", "SG"],
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.facebook.com/Cloudprism",
      "https://www.instagram.com/cloudprism.in",
      "https://twitter.com/_CloudPrism_",
      "https://www.linkedin.com/company/cloudprism-solutions/mycompany/",
    ],
  };
  return (
    <ScrollBarProgress>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto w-full max-w-[95rem] overflow-hidden">
        <section
          className="flex h-[600px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:h-[800px] "
          style={{
            backgroundImage: "url('/assets/images/about-us-bg.png')",
          }}
        >
          <div className="mb-16 flex max-w-5xl flex-col items-center justify-center gap-y-6">
            <h2 className="h1_bold">Accelerate Your Vision with CloudPrism</h2>
            <h1 className="px-6 text-center text-base text-[#C0C0C0] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
              Your IT Consultant and Solutions Partner{" "}
            </h1>
            <CustomButton className="rounded-3xl px-5 py-1.5">
              <Link href="/contact-us">
                <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Let&apos;s grow together
                </p>
              </Link>
            </CustomButton>
          </div>
        </section>
        <div className="mx-auto mb-28 flex max-w-7xl flex-col gap-y-20  ">
          <h3 className="h2_semibold text-center">About us</h3>
          <div className="flex flex-col gap-5">
            <h4 className="mx-auto max-w-sm  px-6 text-center text-base font-light text-[#F5F5F5] sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl lg:max-w-4xl lg:text-2xl xl:max-w-7xl xl:text-3xl xl:leading-9">
              CloudPrism, a IT Consultation and IT Solutions Partner, provides
              premium one-stop Salesforce solutions and full-stack development
              services. Based in Patna, Pune, and Austin, our startup&apos;s
              unique origins have proven to be advantageous. With three offices
              worldwide, we embrace diversity and inclusive growth.We prioritize
              creating value within the community, distinguishing ourselves
              without relying on conventional means of establishing presence.
            </h4>
            <p className="mx-auto max-w-sm  px-6 text-center text-base font-light text-[#F5F5F5] sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl lg:max-w-4xl lg:text-2xl xl:max-w-7xl xl:text-3xl xl:leading-9">
              With a team of over 100+ certified developers, CloudPrism excels
              in Salesforce complete solutions and software consultation and
              development. Our technical skill outshines that of other small,
              medium and big companies, as we specialize in providing
              Custom-built solutions designed to meet your specific timeline and
              requirements, ensuring optimal outcomes for your business success.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-12  lg:space-y-4">
          <SectionCard
            title="Mission"
            description1="At CloudPrism, we are on a mission to transform your business by leveraging the unparalleled potential of Software Solutions and IT Consultation. With extensive experience providing IT solutions, CloudPrism is your trusted partner every step of the way."
            description2="We pride ourselves on our collaborative approach, working closely with you to understand your unique challenges and goals, and then crafting customized IT solutions that exceed expectations. With CloudPrism, Maximize the power of technology to unlock your business's full potential."
            imgUrl="/assets/images/mission-svg.png"
            className="flex-col-reverse  lg:flex-row"
            imagSize="w-[710px] ml-[-50px]"
          />
          <SectionCard
            title="Vision"
            description1="In our vision at CloudPrism Solutions,we imagine a future where businesses do really well because of new ideas. We make things better for customers, make work easier, and help businesses grow with our IT Consultation and solutions. We work closely with our clients to give them the best advice and solutions for their Business needs. Our goal is to help businesses change for the better and succeed in the modern world."
            imgUrl="/assets/images/vision-svg.png"
            className="flex-col-reverse lg:flex-row-reverse"
            imagSize="w-[710px] mr-[-50px]"
          />
        </div>
        <HistorySection />
        <div className="mx-2 my-12  max-w-7xl  sm:mx-4 lg:mx-auto lg:my-24">
          <Image
            src={"/assets/images/history-svg.svg"}
            alt="History"
            height={662}
            width={1286}
          />
        </div>
        <section className="mx-auto mb-36 flex max-w-7xl flex-col gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-28 ">
          <h3 className="h2_semibold text-center">Our Team</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {ourTeams.map((team) => (
              <TeamCard
                key={team.name}
                description={team.description}
                linkdein={team.linkdein}
                linkdeinUrl={team.linkdeinUrl}
                name={team.name}
                profilePic={team.profilePic}
              />
            ))}
          </div>
        </section>
      </div>
    </ScrollBarProgress>
  );
}

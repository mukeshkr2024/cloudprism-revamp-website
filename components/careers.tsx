"use client";

import JobOpeningCard from "@/components/card/opening-card";
import CustomButton from "@/components/shared/custom-button";
import { jobOpenings } from "@/constants";
import { useRef } from "react";

export default function Careers() {
  const hrRef = useRef<HTMLDivElement | null>(null);

  const handleApplyNowClick = () => {
    hrRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="mx-auto max-w-[95rem]">
        <div
          className="flex h-[600px] w-full items-center bg-cover bg-center bg-no-repeat px-8 md:h-[800px] md:px-12 lg:px-12 "
          style={{
            backgroundImage: "url('/assets/images/carrier-image.svg')",
          }}
        >
          <div className="max-w-7xl">
            <h2 className="text-start text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Where Talent Meets <br /> Opportunity.
            </h2>
            <h1 className="mt-4 max-w-5xl text-base text-[#C0C0C0] sm:text-lg md:text-xl">
              Explore Careers at Cloudprism Solutions
            </h1>
          </div>
        </div>
        <div className="mx-4 mt-[-50px]  flex max-w-7xl flex-col gap-y-12 text-center lg:mx-auto  lg:flex-row lg:px-8 lg:text-start xl:px-0">
          <h2 className="h2_semibold flex-1" onClick={handleApplyNowClick}>
            We Are <br className="hidden lg:block" />
            Cloudprism{" "}
          </h2>

          <div className="flex flex-1 flex-col gap-y-6">
            <p className="text-xl font-light text-[#F2EFEF]">
              {
                "CloudPrism Solutions isn't just a workplace—it's a community. Here, you're not just an employee; you're a valued member of a team united by shared values yet diverse in our individuality."
              }
            </p>
            <p className="text-xl font-light text-[#F2EFEF]">
              Experience a culture of perpetual progress, where personal growth
              is not just encouraged, but celebrated. Together, we navigate
              challenges, standing as pillars of support for one another through
              every triumph and trial.
            </p>
            <p className="text-xl font-light text-[#F2EFEF]">
              At CloudPrism Solutions, creativity thrives in an environment of
              freedom, fostering growth, enjoyment, and impactful contributions.
              Our team pours passion into every endeavor, delivering excellence
              at every turn.
            </p>

            <p className="text-xl font-light text-[#F2EFEF]">
              We are Innovators. We are Champions. We are Unstoppable.
            </p>

            <p className="text-xl font-light text-[#F2EFEF]">
              Welcome to CloudPrism Solutions!
            </p>
          </div>
        </div>
        <section className="mx-auto mt-20 max-w-sm sm:max-w-lg md:max-w-2xl lg:mt-32 lg:max-w-5xl xl:max-w-7xl ">
          <h3 className="h2_semibold text-center">Job Openings</h3>
          <p className="mt-10 text-center text-xl font-light text-[#F2EFEF]">
            Uncover the perfect role that aligns with your unique abilities and
            grab countless opportunities to take your career to new heights.
          </p>

          <div className="mt-14 flex flex-wrap  items-center justify-center gap-8">
            {jobOpenings &&
              jobOpenings.map((openings) => (
                <JobOpeningCard
                  key={openings.id}
                  linkdeinUrl={openings.linkdeinUrl}
                  description={openings.description}
                  employmentType={openings.employmentType}
                  experience={openings.experience}
                  location={openings.location}
                  title={openings.title}
                  handleApply={handleApplyNowClick}
                />
              ))}
          </div>
        </section>
        <section
          className="mx-auto h-[400px] w-full max-w-[95rem] bg-cover bg-center bg-no-repeat md:h-[500px]  "
          style={{
            backgroundImage: "url('/assets/images/connect-to-us.png')",
          }}
        >
          <div
            className="flex flex-col items-center justify-center gap-y-5 px-6 pt-20 md:gap-y-6 md:pt-24 xl:px-24"
            ref={hrRef}
          >
            <h4 className="h2_semibold">Send us your resume at</h4>

            <CustomButton className="rounded-3xl px-5 py-1.5">
              <a
                href="mailto:careers@cloudprism.in"
                className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              >
                careers@cloudprism.in
              </a>
            </CustomButton>
          </div>
        </section>{" "}
      </div>
    </>
  );
}

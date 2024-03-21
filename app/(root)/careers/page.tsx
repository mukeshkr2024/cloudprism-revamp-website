import JobOpeningCard from "@/components/card/opening-card";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import React from "react";

// TODO:  to add content

function CarrierPage() {
  return (
    <ScrollBarProgress>
      <div>
        <div
          className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat sm:px-8 md:justify-start md:px-12 lg:px-16"
          style={{
            backgroundImage: "url('/assets/images/carrier-image.svg')",
          }}
        >
          <h2 className="h1_bold text-center md:text-start lg:!text-[80px]">
            Where Talent Meets <br /> Opportunity.
          </h2>
        </div>

        <div className="mx-4 mt-[-50px]  flex max-w-7xl flex-col gap-y-12 text-center lg:mx-auto  lg:flex-row lg:px-8 lg:text-start xl:px-0">
          <h2 className="h2_semibold flex-1">
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
          <h2 className="h2_semibold text-center">Job Openings</h2>
          <p className="mt-10 text-center text-xl font-light text-[#F2EFEF]">
            Uncover the perfect role that aligns with your unique abilities and
            grab countless opportunities to take your career to new heights.
          </p>

          <div className="mt-14 flex flex-wrap  items-center justify-center gap-8">
            <JobOpeningCard />
            <JobOpeningCard />
            <JobOpeningCard />
            <JobOpeningCard />
            <JobOpeningCard />
            <JobOpeningCard />
          </div>
        </section>
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
}

export default CarrierPage;

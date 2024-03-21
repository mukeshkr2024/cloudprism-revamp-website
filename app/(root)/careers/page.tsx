import JobOpeningCard from "@/components/card/opening-card";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import React from "react";

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
            Where Talent Meets <br /> Opportunity.{" "}
          </h2>
        </div>

        <div className="mx-4 mt-[-50px]  flex max-w-7xl flex-col gap-y-12 text-center lg:mx-auto  lg:flex-row lg:px-8 lg:text-start xl:px-0">
          <h2 className="h2_semibold flex-1">
            We Are <br className="hidden lg:block" />
            Cloudprism{" "}
          </h2>

          <div className="flex flex-1 flex-col gap-y-6">
            <p className="text-xl font-light text-[#F2EFEF]">
              CloudPrism is dedicated to modifying your business process through
              smart Salesforce deployment and consulting services. Our goal is
              to enhance efficiency, boost productivity,of all sizes and
              industries and drive your organization to remarkable success by
              preferring Salesforce, the global leader in customer relationship
              management (CRM) platforms. With a focus on quality and client
              satisfaction, we are committed to guiding your company to its
              fullest potential in the digital realm.
            </p>
            <p className="text-xl font-light text-[#F2EFEF]">
              Our partnership extends beyond mere transactions, as we share a
              commitment to social responsibility and ethical practices. At
              CloudPrism, empathy guides our approach to ethical resource
              management and fair treatment of all individuals involved.
              Partnering with us not only aligns with your values but also
              demonstrates a shared commitment to making a positive imp
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

"use client";

import { useState } from "react";
import CaseFormPopup from "../forms/case-form";
import { TracingBeam } from "../blog/tracing-beam";
import CustomButton from "../shared/custom-button";

export function Case1() {
  const [blurContent, setBlurContent] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleMoreClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setBlurContent(false);
  };
  return (
    <>
      {showForm && <CaseFormPopup handleClose={handleClose} />}
      <div className="flex w-full flex-col justify-center pb-32 pt-24 lg:flex-row">
        <TracingBeam className="max-w-6xl px-6">
          <div className="text-white ">
            <div className="mx-auto  pt-8 lg:max-w-7xl">
              <div>
                <span className="text-base font-normal"> CASE STUDY</span>
                <div className="my-2.5 flex w-full flex-col gap-y-1 text-lg font-medium">
                  <p>Client: Cambria</p>
                  <p>Partner: CloudPrism</p>
                  <p>Salesforce Implementation and Consultant Partner</p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />
              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold">
                    Simplified Customer Experience and Email Marketing Strategy
                  </h1>
                  <p className="blog_paragraph">
                    Cambria, a well-known producer in the natural quartz
                    countertop and surface industries in the United States,
                    faced challenges when attempting to combine innovative
                    designs with long-lasting durability in order to guarantee
                    elegance and usefulness. Their goals were to reduce their
                    marketing initiatives and provide a flawless client journey.
                    At that point, they looked for help from CloudPrism, a
                    reputable Salesforce implementation and consulting partner.
                  </p>
                </div>
                <div className="flex w-full items-center justify-center">
                  {blurContent && (
                    <CustomButton className="w-[150px] rounded-3xl px-4 py-2.5">
                      <p onClick={handleMoreClick} className="text-black">
                        Read More
                      </p>
                    </CustomButton>
                  )}
                </div>

                <div
                  className={`flex w-full flex-col gap-y-6  ${blurContent ? "blur" : ""}`}
                >
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                      Problems:
                    </h2>
                    <p className="blog_paragraph">
                      Low lead generation due to an ineffective email marketing
                      strategy Difficulty reaching prospects and converting them
                      into customers Poor customer experience affecting customer
                      loyalty
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                      ProblemsSolutions provided by CloudPrism:
                    </h2>
                    <p className="blog_paragraph">
                      Improve engagement and drove leads with personalized email
                      campaigns Increased conversions by automating lead
                      nurturing Enhanced customer loyalty through streamlined
                      experiences
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                      Results that exceeded expectations:
                    </h2>
                    <p className="blog_paragraph">
                      Increased lead generation by 35% within the first 3 months
                      of implementing the email marketing strategy. Improved
                      conversion rate by 55% by targeting the right audience
                      with personalized content. Simplified marketing efforts
                      and achieved an 82% cost saving using Engagement Studio
                      and Automation Rules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
        {/* <EventRightSidebar /> */}
      </div>
    </>
  );
}

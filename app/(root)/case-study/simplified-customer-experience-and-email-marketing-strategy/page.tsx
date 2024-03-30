"use client";

import { TracingBeam } from "@/components/blog/tracing-beam";
import EventRightSidebar from "@/components/event-sidebar";
import CaseFormPopup from "@/components/forms/case-form";
import ConnectToUs from "@/components/shared/connect-to-us";
import CustomButton from "@/components/shared/custom-button";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import React, { useState } from "react";

const CaseStudy1 = () => {
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
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        {showForm && <CaseFormPopup handleClose={handleClose} />}
        <div className="flex w-full flex-col justify-center pb-32 pt-24 lg:flex-row">
          <TracingBeam className="px-6">
            <div className="text-white ">
              <div className="mx-auto  pt-8 lg:max-w-7xl">
                <div>
                  <span className="text-base font-normal"> CASE STUDY-1</span>
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
                      Simplified Customer Experience and Email Marketing
                      Strategy
                    </h1>
                    <p className="blog_paragraph">
                      Cambria, a prominent manufacturer in the American natural
                      quartz countertops and surface industry, encountered
                      obstacles in merging cutting-edge designs with enduring
                      durability to ensure sophistication and functionality.
                      They aimed to simplify their marketing efforts and create
                      a seamless customer experience. That&apos;s when they
                      turned to CloudPrism, a trusted Salesforce implementation
                      and consultant partner, for assistance.
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
                        Low lead generation due to an ineffective email
                        marketing strategy Difficulty reaching prospects and
                        converting them into customers Poor customer experience
                        affecting customer loyalty
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl">
                        ProblemsSolutions provided by CloudPrism:
                      </h2>
                      <p className="blog_paragraph">
                        Improve engagement and drove leads with personalized
                        email campaigns Increased conversions by automating lead
                        nurturing Enhanced customer loyalty through streamlined
                        experiences
                      </p>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl">
                        Results that exceeded expectations:
                      </h2>
                      <p className="blog_paragraph">
                        Increased lead generation by 35% within the first 3
                        months of implementing the email marketing strategy.
                        Improved conversion rate by 55% by targeting the right
                        audience with personalized content. Simplified marketing
                        efforts and achieved an 82% cost saving using Engagement
                        Studio and Automation Rules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TracingBeam>
          <EventRightSidebar />
        </div>
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
};

export default CaseStudy1;

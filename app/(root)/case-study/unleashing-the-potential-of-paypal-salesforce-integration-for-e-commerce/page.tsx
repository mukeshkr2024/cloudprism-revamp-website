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
      <div className="mx-auto w-full max-w-[90rem]">
        {showForm && <CaseFormPopup handleClose={handleClose} />}
        <div className="flex w-full flex-col justify-center pb-32 pt-40 lg:flex-row">
          <TracingBeam className="px-6">
            <div className="text-white">
              <div className="max-w-7xl mx-auto pt-8">
                <div>
                  <span className="text-base font-normal"> CASE STUDY-2</span>
                  <div className="text-lg font-medium my-2.5 w-full flex flex-col gap-y-1">
                    <p>Client: Paypal</p>
                    <p>Partner: CloudPrism</p>
                    <p>Salesforce Implementation and Consultant Partner</p>
                  </div>
                </div>

                <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />
                <div className="mt-8 flex gap-y-6 flex-col">
                  <div className="flex flex-col gap-y-4">
                    <h1 className="h2_semibold !font-semibold">
                      Unleashing the Potential of PayPal-Salesforce Integration
                      for E-commerce
                    </h1>
                    <p className="blog_paragraph">
                      The company operates as a payment processor for online
                      vendors,auction sites and many other commercial users, for
                      which it charges a fee.they want salesforce integration
                      for e-commerce business.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                      PROJECT CHALLENGES:
                    </h2>

                    <ul className="flex flex-col gap-y-2 pl-16">
                      <li className="blog_paragraph">
                        <span className="font-bold text-lg">
                          Salesforce-PayPal integration gaps:
                        </span>{" "}
                        One of the major challenges is the gap in salesforce
                        integration which created efficiencies in process.
                      </li>
                      <li className="blog_paragraph">
                        <span className="font-bold text-lg">
                          Payment Choices:
                        </span>{" "}
                        there were restrictions in payment choices for customers
                        due to which customers were disatisfied.
                      </li>
                      <li className="blog_paragraph">
                        <span className="font-bold text-lg">
                          Payment tracking challenges:
                        </span>{" "}
                        Real time payment tracking was not getting solved due
                        which process was delayed.
                      </li>
                    </ul>
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
                        PROJECT SOLUTIONS:
                      </h2>
                      <p className="blog_paragraph">
                        By overcoming challenges we implemented our solutions
                        that are affecting paypal business
                      </p>

                      <ul className="flex flex-col gap-y-2 pl-16">
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Revolutionized sales process:
                          </span>{" "}
                          We corrected the mistake which was made and integrated
                          proper salesforce solutions.
                        </li>
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Payment options:{" "}
                          </span>{" "}
                          Expanded payments option so that customers can be
                          satisfied.
                        </li>
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Realtime tracking:
                          </span>{" "}
                          realtime tracking of payments were improved so the
                          data Generated by process will be efficient.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl">
                        PROJECT RESULT:
                      </h2>
                      <p className="blog_paragraph">
                        By delivery proper solution to our client we given
                        benchmark result and that are
                      </p>
                      <div className="blog_paragraph flex gap-1.5 flex-col">
                        <p>45% Improvement in Order fulfillment</p>
                        <p>32% Boosted sales & revenue growth</p>
                        <p>30% Increase in customer satisfaction.</p>
                      </div>
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

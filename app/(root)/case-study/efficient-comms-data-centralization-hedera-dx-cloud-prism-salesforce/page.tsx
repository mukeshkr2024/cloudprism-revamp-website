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
                  <span className="text-base font-normal"> CASE STUDY-3</span>
                  <div className="text-lg font-medium my-2.5 w-full flex flex-col gap-y-1">
                    <p>Client: Hedera Dx</p>
                    <p>Partner: CloudPrism</p>
                    <p>Salesforce Implementation and Consultant Partner</p>
                  </div>
                </div>
                <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />
                <div className="mt-8 flex gap-y-6 flex-col">
                  <div className="flex flex-col gap-y-4">
                    <h1 className="h2_semibold !font-semibold">
                      Efficient Communication and Data Centralization: Hedera Dx
                      Implements Cloud Prism on Salesforce
                    </h1>
                    <p className="blog_paragraph">
                      Hedera Dx is dedicated to transforming oncology by
                      providing cutting-edge liquid biopsy solutions that
                      improve patient experiences, outcomes and journeys, as
                      well as healthcare professional experiences, while
                      facilitating the prescription, discovery and development
                      of the next breakthrough precision oncology therapies
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                      Challenges:
                    </h2>

                    <ul className="flex flex-col gap-y-2 pl-16">
                      <li className="blog_paragraph">
                        <span className="font-bold text-lg">
                          Automated Communication:
                        </span>{" "}
                        Hedera Dx wants to automatically send emails to specific
                        recipients based on the reason ("case reason") for a
                        newly created case in Salesforce. This ensures timely
                        communication about technical issues, billing inquiries,
                        shipping updates, etc.
                      </li>
                      <li className="blog_paragraph">
                        <span className="font-bold text-lg">
                          Easy Case Creation:{" "}
                        </span>{" "}
                        They also want a user-friendly way to create cases
                        directly from a form, simplifying the process for
                        customers and staff.
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
                        Our Solutions:
                      </h2>
                      <p className="blog_paragraph">
                        Cloud Prism addressed these needs by leveraging various
                        Salesforce features:
                      </p>

                      <ul className="flex flex-col gap-y-2 pl-16">
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            1. Email Templates and Alerts:
                          </span>{" "}
                          They created pre-designed email templates containing
                          relevant information and formatting, tailored to each
                          case reason. These templates are then used to
                          automatically generate and send emails when a new case
                          is created with the corresponding reason.
                        </li>
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Record Trigger Flow:
                          </span>{" "}
                          A record trigger flow is a specific type of automation
                          in Salesforce. Cloud Prism created this flow to
                          trigger the email-sending process whenever a new case
                          is created, checking the case reason and selecting the
                          appropriate email template.
                        </li>
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Web-to-Case:
                          </span>{" "}
                          This is a Salesforce feature that allows users to
                          create cases directly from a web form. Cloud Prism
                          implemented this functionality so customers and staff
                          can easily submit cases by filling out an online form,
                          eliminating the need to manually enter data in
                          Salesforce.
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl">
                        How Salesforce Comes In:
                      </h2>
                      <p className="blog_paragraph">
                        Salesforce plays a crucial role in this solution by:
                      </p>
                      <ul className="flex flex-col gap-y-2 pl-16">
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Centralized Data Management:
                          </span>{" "}
                          All case information, including the case reason, is
                          stored and managed within Salesforce. This ensures a
                          single source of truth for customer interactions.
                        </li>
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Automation Capabilities:
                          </span>{" "}
                          Salesforce allows for creating automated workflows
                          like record trigger flows, enabling the automatic
                          sending of emails based on specific criteria like the
                          case reason.
                        </li>
                        <li className="blog_paragraph">
                          <span className="font-bold text-lg">
                            Web-to-Case Functionality:{" "}
                          </span>{" "}
                          This built-in feature provides a convenient way for
                          customers to submit cases directly through a web form,
                          streamlining case creation and reducing manual data
                          entry.
                        </li>
                      </ul>
                      <p className="blog_paragraph">
                        In conclusion, Cloud Prism utilized various features
                        within Salesforce to automate case-related
                        communication, simplify case creation, and centralized
                        customer data, addressing Hedera Dx's specific
                        requirements.
                      </p>

                      <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl">
                          Results
                        </h2>
                        <div className="blog_paragraph flex gap-1.5 flex-col">
                          <p>42% Improved Lead Conversion Rates</p>
                          <p>59% Enhanced Sales Process Visibility</p>
                          <p>56% Strengthened Customer Relationships</p>
                        </div>
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

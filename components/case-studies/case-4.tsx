/* eslint-disable react/no-unescaped-entities */
"use client";

import { TracingBeam } from "@/components/blog/tracing-beam";
// import EventRightSidebar from "@/components/event-sidebar";
import CaseFormPopup from "@/components/forms/case-form";
import CustomButton from "@/components/shared/custom-button";
import { useState } from "react";

export function Case4() {
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
          <div className="text-white">
            <div className="mx-auto max-w-7xl pt-8">
              <div>
                <span className="text-base font-normal"> CASE STUDY</span>
                <div className="my-2.5 flex w-full flex-col gap-y-1 text-lg font-medium">
                  <p>Client: Stellenwerk</p>
                  <p>Partner: CloudPrism & Selise</p>
                  <p>Salesforce Implementation and Consultant Partner</p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />
              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold">
                    CloudPrism & Selise
                  </h1>
                  <p className="blog_paragraph">
                    Selise is an international consulting firm that offers
                    advice on digital transformation to several businesses
                    worldwide.The firm offers a wide range of services, such as
                    platform development,process engineering, and strategic
                    consulting.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">Problem:</h2>

                  <ul className="flex flex-col gap-y-2 ">
                    <li className="blog_paragraph">
                      Selise might have been a general salesforce consultant,
                      offering a broader solution but lacking specific matching
                      expertise.
                    </li>
                    <li className="blog_paragraph">
                      CloudPrism could specialize in applicant matching
                      technology, making them a better fit for Stellenwerk's
                      specific needs.
                    </li>
                    <li className="blog_paragraph">
                      Stellenwerk might have preferred a custom-built solution
                      over a more generic CRM approach.
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
                      Solutions{" "}
                    </h2>

                    <ul className="flex flex-col gap-y-2 ">
                      <li className="blog_paragraph">
                        Selise offered a broader CRM solution (Salesforce) that
                        might not have been fully customized for applicant
                        matching.
                      </li>
                      <li className="blog_paragraph">
                        CloudPrism built a dedicated tool specifically for
                        Stellenwerk's needs, demonstrating a tailored approach.
                      </li>
                      <li className="blog_paragraph">
                        CloudPrism's tool facilitated bulk applications,
                        potentially streamlining the application process for
                        candidates.
                      </li>
                    </ul>
                    <p className="blog_paragraph">
                      Developed a custom "matching tool" specifically for
                      Stellenwerk. This tool focused on efficiently pairing
                      candidates with suitable jobs, highlighting their
                      expertise in applicant matching technology.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                      Results
                    </h2>

                    <ul className="flex flex-col gap-y-2 ">
                      <li className="blog_paragraph">
                        80% Filtering jobs to match specific applicant profiles.
                      </li>
                      <li className="blog_paragraph">
                        70% Allowing applicants to apply to multiple relevant
                        jobs simultaneously through the platform.
                      </li>
                    </ul>
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

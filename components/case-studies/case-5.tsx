"use client";

import { TracingBeam } from "@/components/blog/tracing-beam";
import CaseFormPopup from "@/components/forms/case-form";
import CustomButton from "@/components/shared/custom-button";
import { useState } from "react";

export default function Case5() {
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
                  <p>Client: Janie and Jack</p>
                  <p>Partner: CloudPrism & Concord</p>
                  <p>Salesforce Implementation and Consultant Partner</p>
                </div>
              </div>
              <div
                className="h-1 w-full rounded-md"
                style={{
                  background:
                    "linear-gradient(90deg, #F1CA64 15.38%, #02FFB3 99.49%);",
                }}
              />
              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold">
                    Efficient Deployment and Seamless Maintenance: Handling
                    Day-to-Day Tasks and Resolving Issues Promptly
                  </h1>
                  <p className="blog_paragraph">
                    Janie and Jack, is an apparel company with deliveries and
                    reach all across the globe.
                  </p>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">Problem:</h2>

                  <ul className="flex flex-col gap-y-2 ">
                    <li className="blog_paragraph">
                      Order Processing Bottlenecks: Manual processes led to
                      delays and inefficiencies in order processing.
                    </li>
                    <li className="blog_paragraph">
                      Inventory Management Complexities: Tracking and managing
                      inventory across multiple channels was challenging and
                      error prone.
                    </li>
                    <li className="blog_paragraph">
                      Limited Scalability: The manual approach hindered the
                      company&apos;s ability to handle increasing order volumes
                      and scale operations effectively.
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
                      Solutions
                    </h2>

                    <p className="blog_paragraph">
                      We implemented the new fraud system in Janie and Jack to
                      reduce the inventory issue the client has been having due
                      to the old one. We also implemented the new integrations
                      with GLOBAL – E, client’s new international order partner.
                      <br />
                      Improved Customer Service: Integrated module for prompt
                      issue resolution.
                      <br />
                      OMS Implementation: Deployed tailored OMS solution for a
                      smooth transition.
                      <br />
                      Successfully deployed all the components, have been
                      handling their day-to-day task and resolving any issue
                      that comes as soon as possible
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl">
                      Results
                    </h2>

                    <ul className="flex flex-col gap-y-2 ">
                      <li className="blog_paragraph">
                        53% Increase in customer satisfaction
                      </li>
                      <li className="blog_paragraph">40% increase in sales</li>
                      <li className="blog_paragraph">
                        50% decrease in inventory issue
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

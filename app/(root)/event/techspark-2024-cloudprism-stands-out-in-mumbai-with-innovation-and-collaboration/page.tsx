import { TracingBeam } from "@/components/blog/tracing-beam";
// import EventRightSidebar from "@/components/event-sidebar";
import ConnectToUs from "@/components/shared/connect-to-us";
import Link from "next/link";
import React from "react";

const EventDetailsPage = () => {
  return (
    <div className="mx-auto h-full max-w-[95rem]">
      <div className="flex w-full justify-center pb-32 pt-24 lg:flex-row">
        <TracingBeam className="max-w-6xl px-6">
          <div className="text-[#A4A4A4]">
            <div className="mx-auto max-w-7xl pt-8">
              <div>
                <span className="text-base font-normal text-white">
                  Techspark 2024
                </span>
                <div className="my-2.5 flex w-full gap-x-12 gap-y-1  text-lg font-medium text-white">
                  <p>Mumbai</p>
                  <p> On February 29th to March 1st, 2024,</p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />

              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold lg:!text-4xl">
                    Techspark 2024: CloudPrism Stands Out in Mumbai with
                    Innovation and Collaboration!
                  </h1>
                  <p className="blog_paragraph">
                    <Link
                      target="_blank"
                      href="https://www.cloudprism.in"
                      className="text-xl font-semibold text-white"
                    >
                      CloudPrism{" "}
                    </Link>
                    had the privilege of participating in{" "}
                    <Link
                      target="_blank"
                      href="https://yourstory.com/techsparks2024"
                      className="text-xl font-semibold text-white"
                    >
                      Techspark 2024{" "}
                    </Link>
                    , hosted by YourStory,held in the vibrant city of Mumbai. At
                    the heart of this event lay an extraordinary confluence of
                    brilliant minds from the startup, corporate, government, and
                    investor communities, all converging to catalyze change and
                    fuel India&apos;s transformation.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4">
                  <h2 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    Highlights of the Event:
                  </h2>

                  <ol className="blog_paragraph flex flex-col gap-y-4 pl-12">
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        1. Inspiring Speakers:
                      </span>{" "}
                      Engaged with inspiring speakers and thought leaders who
                      shared invaluable insights and experiences about startups
                      and entrepreneurship.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        2. Networking Opportunities:
                      </span>{" "}
                      Seized the chance to connect with a diverse range of
                      individuals, including founders and co-founders, building
                      a robust network of contacts within the industry.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        3. Learning and Growth:
                      </span>{" "}
                      Techspark provided a platform for learning and growth,
                      allowing us to discover new ideas, technologies, and
                      perspectives.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        4. Discussion on Salesforce Empowerment:{" "}
                      </span>{" "}
                      Had insightful discussions about how Salesforce can
                      empower businesses to grow and thrive in today&apos;s
                      competitive landscape.
                    </li>
                  </ol>

                  <p className="blog_paragraph">
                    Overall, our experience at
                    <Link
                      target="_blank"
                      href="https://yourstory.com/techsparks2024"
                      className="text-xl font-semibold text-white"
                    >
                      {" "}
                      Techspark{" "}
                    </Link>{" "}
                    was immensely rewarding, offering us the opportunity to both
                    contribute to and learn from the dynamic ecosystem of
                    innovation and entrepreneurship. We look forward to future
                    opportunities to engage with the community and continue our
                    journey of growth and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
        {/* <EventRightSidebar /> */}
      </div>
      <ConnectToUs />
    </div>
  );
};

export default EventDetailsPage;
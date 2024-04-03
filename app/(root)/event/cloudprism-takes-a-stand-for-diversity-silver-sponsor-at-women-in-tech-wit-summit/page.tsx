"use client";

import { TracingBeam } from "@/components/blog/tracing-beam";
// import EventRightSidebar from "@/components/event-sidebar";
import ConnectToUs from "@/components/shared/connect-to-us";
import Link from "next/link";
import React from "react";
import Gallery from "react-photo-gallery";

const images = [
  {
    src: "/assets/images/events/img-8.jpg",
    width: 2,
    height: 2,
  },
  {
    src: "/assets/images/events/img-9.jpg",
    width: 3,
    height: 3,
  },
  {
    src: "/assets/images/events/img-10.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "/assets/images/events/img-11.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/assets/images/events/img-12.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/assets/images/events/img-13.jpg",
    width: 4,
    height: 3,
  },
];

const EventDetailsPage = () => {
  return (
    <div className="mx-auto h-full max-w-[95rem]">
      <div className="flex w-full flex-col justify-center pb-32 pt-24 lg:flex-row">
        <TracingBeam className="max-w-6xl px-6">
          <div className="text-[#A4A4A4]">
            <div className="mx-auto max-w-7xl pt-8">
              <div>
                <span className="text-base font-normal text-white">
                  WIT Jaipur 2023
                </span>
                <div className="my-2.5 flex w-full gap-x-12 gap-y-1  text-lg font-medium text-white">
                  <p>Jaipur</p>
                  <p>Date- 14th October </p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />

              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold lg:!text-4xl">
                    CloudPrism Takes a Stand for Diversity: Silver Sponsor at
                    Women in Tech (WIT) Summit
                  </h1>

                  <h2 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    About the Event:
                  </h2>
                  <p className="blog_paragraph">
                    <Link
                      target="_blank"
                      href="https://muledreamin.com/recap.php"
                      className="text-xl font-semibold text-white"
                    >
                      {" "}
                      CloudPrism
                    </Link>{" "}
                    was proud to be a Silver Sponsor at the{" "}
                    <Link
                      target="_blank"
                      href="https://muledreamin.com/recap.php"
                      className="text-xl font-semibold text-white"
                    >
                      {" "}
                      Women in Tech (WIT) Summit{" "}
                    </Link>
                    , an inspiring event dedicated to celebrating the
                    achievements of women in technology and fostering gender
                    diversity in the industry. Founded by Neetu Bansal and Kyati
                    Mehta, this summit provided a platform for networking,
                    learning, and growth.
                  </p>
                  <div className="mx-auto max-w-7xl py-8">
                    <Gallery photos={images} />
                  </div>
                </div>

                <div className="flex flex-col gap-y-4">
                  <h2 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    Event Highlights:
                  </h2>

                  <ol className="blog_paragraph flex flex-col gap-y-4 pl-12">
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        1. Networking Opportunities:{" "}
                      </span>{" "}
                      At the WIT Summit, CloudPrism had the privilege of
                      connecting with industry leaders and professionals,
                      expanding our network, and forging valuable relationships.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        2.Educational Sessions:
                      </span>{" "}
                      We participated in engaging sessions and panel discussions
                      led by experienced professionals, gaining insights into
                      the diverse roles and contributions of individuals in the
                      IT field.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        3.Promotion of
                        <Link
                          href={"https://www.cloudprism.in"}
                          className="text-xl font-semibold text-white"
                        >
                          {" "}
                          CloudPrism Solutions:{" "}
                        </Link>
                      </span>{" "}
                      CloudPrism showcased its innovative solutions and
                      services, including Coding Commando, designed to empower
                      individuals and businesses in the ever-evolving tech
                      landscape.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        4.Exclusive Followers and Leads:{" "}
                      </span>{" "}
                      Our presence at the event garnered attention and interest
                      from a diverse audience, resulting in the acquisition of
                      unique followers and leads interested in CloudPrism
                      solutions and Coding Commando courses.
                    </li>
                  </ol>

                  <h2 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    Date & Location:
                  </h2>

                  <p className="blog_paragraph">
                    The event took place on 14th October in Jaipur, Rajasthan.
                  </p>

                  <span>Join Us:</span>

                  <p className="blog_paragraph">
                    We invite you to stay tuned for future events and
                    opportunities to engage with CloudPrism. Follow us on social
                    media and subscribe to our newsletter for updates on
                    upcoming events and initiatives.
                  </p>

                  <p>
                    Thank you to the organizers and attendees of the Women in
                    Tech (WIT) Summit for a memorable and impactful experience.
                    CloudPrism remains committed to championing diversity and
                    inclusion in the tech community.
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

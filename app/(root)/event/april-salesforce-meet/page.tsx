import { GalleryView } from "@/components/Gallery";
import { TracingBeam } from "@/components/blog/tracing-beam";
import ConnectToUs from "@/components/shared/connect-to-us";
import { Metadata } from "next";
import React from "react";

const images = [
  {
    src: "/assets/images/events/april-1.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/assets/images/events/april-2.jpg",
    width: 3.5,
    height: 3,
  },

  {
    src: "/assets/images/events/april-3.jpg",
    width: 4.5,
    height: 3,
  },
  {
    src: "/assets/images/events/april-5.jpg",
    width: 3,
    height: 3,
  },
  {
    src: "/assets/images/events/april-4.jpg",
    width: 3.5,
    height: 3,
  },
];

export const metadata: Metadata = {
  title: "April Salesforce Meet-Up in Patna, Bihar",
  description:
    "Salesforce Meet-Up in Patna, Bihar, organised by CloudPrism Solutions! The event was nothing short of eventful, bringing together bright minds, industry experts, and aspiring professionals under one roof.",
  alternates: {
    canonical: "https://cloudprism.in/event/april-salesforce-meet",
  },
  openGraph: {
    title: "April Salesforce Meet-Up in Patna, Bihar",
    description:
      "Salesforce Meet-Up in Patna, Bihar, organised by CloudPrism Solutions! The event was nothing short of eventful, bringing together bright minds, industry experts, and aspiring professionals under one roof.",
    url: "https://cloudprism.in/event/april-salesforce-meet",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "April Salesforce Meet-Up in Patna, Bihar",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      "Salesforce Meet-Up in Patna, Bihar, organised by CloudPrism Solutions! The event was nothing short of eventful, bringing together bright minds, industry experts, and aspiring professionals under one roof.",
  },
};

const EventDetailsPage = () => {
  return (
    <div className="mx-auto h-full max-w-[95rem]">
      <div className="flex w-full flex-col justify-center pb-32 pt-24 lg:flex-row">
        <TracingBeam className="max-w-6xl px-6">
          <div className="text-[#A4A4A4]">
            <div className="mx-auto max-w-7xl pt-8">
              <div>
                <h2 className="text-base font-normal text-white">
                  April Salesforce Meet-Up
                </h2>
                <div className="my-2.5 flex w-full gap-x-12 gap-y-1  text-lg font-medium text-white">
                  <p>Patna, Bihar </p>
                  <p>Date: 26th April 2024</p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />

              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold lg:!text-4xl">
                    April Salesforce Meet-Up
                  </h1>
                  <p className="blog_paragraph">
                    We&apos;re thrilled to announce the successful completion of
                    the April Salesforce Meet-Up in Patna, Bihar, organized by
                    CloudPrism Solutions! The event was nothing short of
                    eventful, bringing together bright minds, industry experts,
                    and aspiring professionals under one roof.
                  </p>
                  <div className="mx-auto max-w-7xl py-8">
                    <GalleryView images={images} />
                  </div>
                </div>

                <div className="flex flex-col gap-y-4">
                  {/* <h3 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    Event Highlights:
                  </h3>
                  <span className="text-lg font-bold">Date: 20th May 2023</span>

                  <p className="text-lg font-bold">
                    Location: The Forum - Celebration & Convention Center, Club
                    O7 Road, Ahmedabad, Gujarat - 380059
                  </p> */}

                  <p className="blog_paragraph">
                    With a vision to ignite the potential of Bihar&apos;s youth
                    and guide them towards rewarding career paths, CloudPrism
                    Solutions embarked on this journey to inspire, educate, and
                    empower. Through engaging discussions, practical workshops,
                    and invaluable insights, we showcased the immense
                    opportunities that Salesforce offers for career growth and
                    development.
                  </p>
                  <p className="blog_paragraph">
                    Students from different colleges joined us in our mission to
                    build a strong Salesforce community in Bihar. Their
                    enthusiasm, coupled with the guidance of industry experts,
                    created an atmosphere of learning and collaboration.
                  </p>

                  <p className="blog_paragraph">
                    We&apos;re proud to share that many talented individuals
                    were hired into our team, showcasing their skills and
                    eagerness to learn. It&apos;s moments like these that
                    reaffirm our commitment to nurturing talent and fostering
                    growth within the Salesforce ecosystem.
                  </p>
                  <p className="blog_paragraph">
                    We extend our heartfelt gratitude to everyone who
                    contributed to making this event a resounding success. From
                    our sponsors and partners to our dedicated team and
                    enthusiastic participants, thank you for your unwavering
                    support and commitment.
                  </p>
                  <p className="blog_paragraph">
                    Stay tuned for more exciting events and initiatives as
                    CloudPrism Solutions continues to empower the youth of Bihar
                    and pave the way for a brighter future together!
                  </p>
                  <p className="blog_paragraph">
                    #SalesforceMeetup #EventRecap #BiharYouth #Empowerment
                    #CareerOpportunities #CloudPrismSolutions
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

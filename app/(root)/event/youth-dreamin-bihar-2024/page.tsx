import { GalleryView } from "@/components/Gallery";
import { TracingBeam } from "@/components/blog/tracing-beam";
import ConnectToUs from "@/components/shared/connect-to-us";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const images = [
  {
    src: "/assets/images/events/youth-1.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/assets/images/events/youth-2.jpg",
    width: 3.5,
    height: 3,
  },

  {
    src: "/assets/images/events/youth-3.jpg",
    width: 3,
    height: 3,
  },
  {
    src: "/assets/images/events/youth-4.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/assets/images/events/youth-5.jpg",
    width: 3.5,
    height: 3,
  },
];

export const metadata: Metadata = {
  title: "Youth DreamIn - Salesforce Meet-up Celebration",
  description:
    " Youth Dreamin organized by CloudPrism Solutions for developing Salesforce Community in bihar. Increasing Awareness about Salesforce in bihar.",
  alternates: {
    canonical: "https://cloudprism.in/event/youth-dreamin-bihar-2024",
  },
  openGraph: {
    title: "Youth DreamIn - Salesforce Meet-up Celebration",
    description:
      " Youth Dreamin organized by CloudPrism Solutions for developing Salesforce Community in bihar. Increasing Awareness about Salesforce in bihar.",
    url: "https://cloudprism.in/event/youth-dreamin-bihar-2024",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Youth DreamIn - Salesforce Meet-up Celebration",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      " Youth Dreamin organized by CloudPrism Solutions for developing Salesforce Community in bihar. Increasing Awareness about Salesforce in bihar.",
  },
};

const EventDetailsPage = () => {
  return (
    <div className="mx-auto h-full max-w-[95rem]">
      <div className="flex w-full justify-center pb-32 pt-24 lg:flex-row">
        <TracingBeam className="max-w-6xl px-6">
          <div className="text-[#A4A4A4]">
            <div className="mx-auto max-w-7xl pt-8">
              <div>
                <span className="text-base font-normal text-white">
                  Youth dreamin 2024
                </span>
                <div className="my-2.5 flex w-full gap-x-12 gap-y-1  text-lg font-medium text-white">
                  <p>Bihar</p>
                  {/* <p> On February 29th to March 1st, 2024,</p> */}
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />

              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold lg:!text-4xl">
                    Youth DreamIn - Salesforce Meet-up Celebration
                  </h1>
                  <p className="blog_paragraph">
                    Team proudly{" "}
                    <Link
                      target="_blank"
                      href="https://www.cloudprism.in"
                      className="text-xl font-semibold text-white"
                    >
                      CloudPrism Solutions{" "}
                    </Link>{" "}
                    organized a vibrant Salesforce Meet-up on the auspicious
                    occasion of Youth Day in Patna, Bihar. Our aim was to
                    celebrate the youthful spirit and harness the enthusiasm of
                    the young minds towards the realm of technology.
                  </p>
                  <div className="mx-auto max-w-7xl py-8">
                    <GalleryView images={images} />
                  </div>
                </div>

                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    Highlights:{" "}
                  </h3>

                  <ol className="blog_paragraph flex flex-col gap-y-4 ">
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        1. Community Inception:
                      </span>{" "}
                      The event marked the inception of {"Salesforce Bihar"}, a
                      community dedicated to fostering growth, learning, and
                      networking opportunities for tech enthusiasts across
                      Bihar. With an impressive turnout of 98 passionate
                      individuals, Salesforce Bihar promises to be a hub of
                      innovation and collaboration.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        2. Awareness Campaign:
                      </span>{" "}
                      Throughout the event, our team diligently promoted
                      awareness about Salesforce as a powerful Customer
                      Relationship Management (CRM) tool and shed light on the
                      myriad job opportunities it offers. By imparting knowledge
                      and insights, we aimed to empower the youth with valuable
                      skills and resources for their professional development.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        3. Media Coverage:
                      </span>{" "}
                      The success of our endeavor was recognized and amplified
                      through media coverage by the esteemed state newspaper,
                      <Link
                        href={"https://www.bhaskar.com/epaper/state/jharkhand"}
                        className="text-base font-semibold text-white"
                      >
                        Dainik Bhaskar
                      </Link>
                      . This coverage not only highlighted the significance of
                      our initiative but also extended our reach to a wider
                      audience, inspiring more individuals to join the tech
                      revolution.
                    </li>
                    <li>
                      <span className="text-xl font-semibold text-white">
                        {" "}
                        4. Vision:{" "}
                      </span>{" "}
                      At{" "}
                      <Link
                        href={"https://cloudprism.in/"}
                        className="text-base font-semibold text-white"
                      >
                        CloudPrism Solutions{" "}
                      </Link>
                      , we envision a future where Bihar emerges as a thriving
                      tech ecosystem, brimming with talent, innovation, and
                      limitless opportunities. By spearheading initiatives like
                      the Youth DreamIn Salesforce Meet-up, we strive to
                      catalyze this transformation and empower the youth to
                      realize their dreams in the realm of technology.
                    </li>
                  </ol>

                  <p className="blog_paragraph">
                    Join us in our journey towards building a vibrant tech
                    community in Bihar, where every individual has the chance to
                    thrive and succeed. Together, let&apos;s turn aspirations
                    into achievements and dreams into reality.
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

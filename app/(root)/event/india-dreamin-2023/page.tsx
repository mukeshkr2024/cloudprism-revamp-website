import { GalleryView } from "@/components/Gallery";
import { TracingBeam } from "@/components/blog/tracing-beam";
import ConnectToUs from "@/components/shared/connect-to-us";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const images = [
  {
    src: "/assets/images/events/india-7.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "/assets/images/events/india-2.jpg",
    width: 3.5,
    height: 3,
  },

  {
    src: "/assets/images/events/india-4.jpg",
    width: 3.3,
    height: 3,
  },
  {
    src: "/assets/images/events/india-5.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/assets/images/events/india-6.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/assets/images/events/india-1.jpg",
    width: 4,
    height: 3,
  },
];

export const metadata: Metadata = {
  title: "CloudPrism Supports India Dreamin' 2023 as a Silver Sponsor",
  description:
    "CloudPrism supports India Dreamin' 2023 as a Silver Sponsor, championing innovation and collaboration in the Salesforce community.",
  alternates: {
    canonical: "https://cloudprism.in/event/india-dreamin-2023",
  },
  openGraph: {
    title: "CloudPrism Supports India Dreamin' 2023 as a Silver Sponsor",
    description:
      "CloudPrism supports India Dreamin' 2023 as a Silver Sponsor, championing innovation and collaboration in the Salesforce community.",
    url: "https://cloudprism.in/event/india-dreamin-2023",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "CloudPrism Supports India Dreamin' 2023 as a Silver Sponsor",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      "CloudPrism supports India Dreamin' 2023 as a Silver Sponsor, championing innovation and collaboration in the Salesforce community.",
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
                <span className="text-base font-normal text-white">
                  India Dream in 2023
                </span>
                <div className="my-2.5 flex w-full gap-x-12 gap-y-1  text-lg font-medium text-white">
                  <p>Ahmedabad</p>
                  <p>Date: 20th May 2023</p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />

              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold lg:!text-4xl">
                    CloudPrism Solutions Proudly Supports India Dreamin&apos;
                    2023 as a Silver Sponsor, Driving Innovation Forward
                  </h1>
                  <p className="blog_paragraph">
                    As proud silver sponsors of{" "}
                    <Link
                      target="_blank"
                      href="https://indiadreamin.in/2023/02/19/india-dreamin-23-announcement/#:~:text=Get%20ready%20to%20be%20a,the%20Salesforce%20ecosystem%20in%20India."
                      className="text-xl font-semibold text-white"
                    >
                      India Dreamin&apos;23
                    </Link>
                    ,
                    <Link
                      target="_blank"
                      href="https://www.cloudprism.in"
                      className="text-xl font-semibold text-white"
                    >
                      {""} CloudPrism{" "}
                    </Link>
                    had the honor of being part of this landmark event, which
                    took place in Ahmedabad on May 20th, 2023. Our sponsorship
                    underscored our unwavering commitment to the Salesforce
                    community and our dedication to fostering innovation and
                    collaboration within it.
                  </p>
                  <div className="mx-auto max-w-7xl py-8">
                    <GalleryView images={images} />
                  </div>
                </div>

                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    Event Highlights:
                  </h3>
                  <span className="text-lg font-bold">Date: 20th May 2023</span>

                  <p className="text-lg font-bold">
                    Location: The Forum - Celebration & Convention Center, Club
                    O7 Road, Ahmedabad, Gujarat - 380059
                  </p>

                  <p className="blog_paragraph">
                    India
                    <Link
                      target="_blank"
                      href="https://indiadreamin.in/2023/02/19/india-dreamin-23-announcement/#:~:text=Get%20ready%20to%20be%20a,the%20Salesforce%20ecosystem%20in%20India."
                      className="text-xl font-semibold text-white"
                    >
                      {" "}
                      Dreamin &apos;23
                    </Link>{" "}
                    epitomized the resurgence of in-person Salesforce gatherings
                    in India, offering a bustling hub for professionals across
                    the ecosystem. As silver sponsors, we were thrilled to play
                    a pivotal role in bringing this electrifying experience to
                    fruition. India Dreamin &apos;23 epitomized the resurgence
                    of in-person Salesforce gatherings in India, offering a
                    bustling hub for professionals across the ecosystem. As
                    silver sponsors, we were thrilled to play a pivotal role in
                    bringing this electrifying experience to fruition.
                  </p>
                  <p className="blog_paragraph">
                    Throughout the event,
                    <Link
                      className="text-xl font-semibold text-white"
                      href="https://www.cloudprism.in"
                    >
                      {" "}
                      CloudPrism{" "}
                    </Link>
                    actively engaged with attendees, showcasing our expertise
                    and solutions tailored to the Salesforce platform. From
                    insightful keynotes to interactive workshops, our team
                    seized every opportunity to connect with fellow enthusiasts,
                    share knowledge, and explore the latest advancements in
                    Salesforce technology.
                  </p>

                  <p className="blog_paragraph">
                    Beyond networking and learning, our sponsorship also enabled
                    us to contribute to the event&apos;s philanthropic
                    initiatives, embodying our commitment to giving back to the
                    community.
                  </p>
                  <p className="blog_paragraph">
                    For more updates on CloudPrism&apos;s involvement in
                    Salesforce community events and our ongoing initiatives,
                    stay connected with us. Thank you for joining us on this
                    inspiring journey at India Dreamin &apos;23!&quot;
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

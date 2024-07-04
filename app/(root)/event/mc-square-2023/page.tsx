import { TracingBeam } from "@/components/blog/tracing-beam";
import ConnectToUs from "@/components/shared/connect-to-us";
import Link from "next/link";
import { GalleryView } from "@/components/Gallery";
import { Metadata } from "next";

const images = [
  {
    src: "/assets/images/events/img-2.jpg",
    width: 2,
    height: 2,
  },
  {
    src: "/assets/images/events/img-3.jpg",
    width: 3.5,
    height: 3,
  },
  {
    src: "/assets/images/events/img-4.jpg",
    width: 2,
    height: 3,
  },
  {
    src: "/assets/images/events/img-5.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/assets/images/events/img-6.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/assets/images/events/img-7.jpg",
    width: 4,
    height: 3,
  },
];

export const metadata: Metadata = {
  title: "MC square Hyderabad CloudPrism Shines as Silver Sponsor",
  description:
    "Discover the spotlight on MC square event in Hyderabad as CloudPrism takes center stage as Silver Sponsor.",
  alternates: {
    canonical: "https://cloudprism.in/event/mc-square-2023",
  },
  openGraph: {
    title: "MC square Hyderabad CloudPrism Shines as Silver Sponsor",
    description:
      "Discover the spotlight on MC square event in Hyderabad as CloudPrism takes center stage as Silver Sponsor.",
    url: "https://cloudprism.in/event/mc-square-2023",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "MC square Hyderabad CloudPrism Shines as Silver Sponsor",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      "Discover the spotlight on MC square event in Hyderabad as CloudPrism takes center stage as Silver Sponsor.",
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
                  MC square 2023
                </span>
                <div className="my-2.5 flex w-full gap-x-12 gap-y-1  text-lg font-medium text-white">
                  <p>Hyderabad</p>
                  <p>Date- 7th october,23</p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />

              <div className="mt-8 flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold lg:!text-4xl">
                    MC2 - Hyderabad Edition: CloudPrism Sets the Stage as Silver
                    Sponsor!
                  </h1>
                  <p className="blog_paragraph">
                    <Link
                      rel="noopener"
                      target="_blank"
                      href="https://www.cloudprism.in"
                      className="text-xl font-semibold text-white"
                    >
                      CloudPrism{" "}
                    </Link>
                    had the privilege of attending the MC2 - Hyderabad Edition
                    event, where we proudly served as a silver sponsor. This
                    event was a beacon for knowledge, synergy, and social impact
                    within the marketing cloud sphere.
                  </p>
                  <div className="mx-auto max-w-7xl py-8">
                    <GalleryView images={images} />
                  </div>

                  <h2 className="blog_paragraph">
                    had the privilege of attending the MC2 - Hyderabad Edition
                    event, where we proudly served as a silver sponsor. This
                    event was a beacon for knowledge, synergy, and social impact
                    within the marketing cloud sphere.
                  </h2>
                </div>

                {/* <Slideshow images={images} length={3} /> */}

                <div className="flex flex-col gap-y-4">
                  <h3 className="text-2xl text-white md:text-3xl lg:text-4xl">
                    Highlights of the Event:
                  </h3>

                  <ol className="blog_paragraph flex flex-col gap-y-4 ">
                    <li>
                      1. Gaining comprehensive insights into the nature and
                      functionality of Salesforce Marketing Cloud.
                    </li>
                    <li>
                      2.Discovering effective techniques for leveraging
                      Salesforce Marketing Cloud capabilities.
                    </li>
                    <li>
                      3.Exploring how these technologies can assist businesses
                      in overcoming marketing challenges.
                    </li>
                    <li>
                      4.Uncovering strategies for building successful careers in
                      marketing technology.
                    </li>
                  </ol>

                  <p className="blog_paragraph">
                    As proud sponsors,{" "}
                    <Link
                      target="_blank"
                      rel="noopener"
                      href="https://www.cloudprism.in"
                      className="text-xl font-semibold text-white"
                    >
                      CloudPrism{" "}
                    </Link>{" "}
                    achieved significant milestones during the event:
                  </p>

                  <ol className="blog_paragraph flex flex-col gap-y-4">
                    <li>
                      1. Establishing valuable connections with industry leaders
                      and potential clients.
                    </li>
                    <li>
                      2. Attending multiple sessions at the marketing cloud
                      conference, gaining deep insights into marketing cloud
                      integrations and advancements.
                    </li>
                    <li>
                      3. Successfully promoting our product, Coding Commando,
                      and garnering significant attention and interest from
                      attendees.
                    </li>
                  </ol>

                  <p className="blog_paragraph">
                    The MC2 - Hyderabad Edition event was truly an enriching
                    experience, and we look forward to continuing our journey of
                    learning, collaboration, and innovation within the marketing
                    technology community.
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

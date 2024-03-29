import { TracingBeam } from "@/components/blog/tracing-beam";
import EventRightSidebar from "@/components/event-sidebar";
import ConnectToUs from "@/components/shared/connect-to-us";
import Link from "next/link";
import React from "react";

const EventDetailsPage = () => {
  return (
    <div className="mx-auto h-full max-w-[95rem]">
      <div className="flex w-full justify-center pb-32 pt-24 lg:flex-row">
        <TracingBeam className="px-6">
          <div className="text-[#A4A4A4]">
            <div className="max-w-7xl mx-auto pt-8">
              <div>
                <span className="text-base font-normal text-white">
                  Mule Dreamin 2023
                </span>
                <div className="text-lg font-medium my-2.5 gap-x-12 w-full  flex gap-y-1 text-white">
                  <p>Delhi</p>
                  <p>Date- 23rd september</p>
                </div>
              </div>
              <div className="h-1 w-full rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />

              <div className="mt-8 flex gap-y-6 flex-col">
                <div className="flex flex-col gap-y-4">
                  <h1 className="h2_semibold !font-semibold lg:!text-4xl">
                    Glimpses of Glory: CloudPrism's Silver Sponsorship Triumphs
                    at Mule Dreamin, Delhi!
                  </h1>
                  <p className="blog_paragraph">
                    The{" "}
                    <Link
                      target="_blank"
                      href="http://www.cloudprism.in"
                      className="text-xl font-semibold text-white"
                    >
                      CloudPrism{" "}
                    </Link>
                    team had the privilege of attending the Mule Dreamin event
                    in Delhi, where we proudly served as the silver sponsor.
                    This event was a beacon for knowledge, collaboration, and
                    community engagement within the MuleSoft and Salesforce
                    ecosystem.
                  </p>

                  <p className="blog_paragraph">
                    <Link
                      target="_blank"
                      href="https://muledreamin.com/recap.php"
                      className="text-xl font-semibold text-white"
                    >
                      Mule Dreamin{" "}
                    </Link>
                    was a platform designed to fuel attendees' understanding of
                    MuleSoft and Salesforce technologies, fostering a culture of
                    learning and innovation. Throughout the event, participants
                    immersed themselves in various activities aimed at deepening
                    their comprehension and proficiency in utilizing these
                    powerful platforms.
                  </p>
                </div>

                <div className="flex flex-col gap-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-white">
                    Highlights of the event included:
                  </h2>

                  <ol className="blog_paragraph flex flex-col gap-y-4 pl-12 list-disc">
                    <li>
                      Gaining comprehensive insights into the nature and
                      functionality of MuleSoft and Salesforce
                    </li>
                    <li>
                      Discovering effective techniques for leveraging MuleSoft
                      and Salesforce capabilities.
                    </li>
                    <li>
                      Techspark provided a platform for learning and growth,
                      allowing us to discover new ideas, technologies, and
                      perspectives.
                    </li>
                    <li>
                      Exploring how these technologies can assist businesses in
                      overcoming challenges.
                    </li>
                    <li>
                      Uncovering strategies for building successful careers in
                      MuleSoft and Salesforce technology.
                    </li>
                  </ol>

                  <p className="blog_paragraph">
                    As proud sponsors, CloudPrism achieved significant
                    milestones during the event:
                  </p>

                  <ol className="blog_paragraph flex flex-col gap-y-4 pl-12">
                    <li>
                      Establishing valuable connections with industry leaders
                      and potential clients.
                    </li>
                    <li>
                      Attending multiple sessions at the MuleSoft conference,
                      gaining deep insights into Salesforce integrations and
                      advancements.
                    </li>
                    <li>
                      Successfully promoting our product, Coding Commando, and
                      garnering significant attention and interest from attendee
                    </li>
                  </ol>

                  <p className="blog_paragraph">
                    The{" "}
                    <Link
                      target="_blank"
                      href="https://muledreamin.com/recap.php"
                      className="text-xl font-semibold text-white"
                    >
                      Mule Dreamin
                    </Link>{" "}
                    event was truly an enriching experience, and we look forward
                    to continuing our journey of learning, collaboration, and
                    innovation within the MuleSoft and Salesforce community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
        <EventRightSidebar />
      </div>
      <ConnectToUs />
    </div>
  );
};

export default EventDetailsPage;

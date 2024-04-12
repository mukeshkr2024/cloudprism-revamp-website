import EventCard from "@/components/card/event-card";
import CustomButton from "@/components/shared/custom-button";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { events } from "@/constants/event-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventsPage() {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <section
          className="flex h-[600px] w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat md:h-[800px] "
          style={{
            backgroundImage: "url('/assets/images/about-us-bg.png')",
          }}
        >
          <div className="flex max-w-6xl flex-col items-center justify-center gap-y-4 sm:gap-y-6 md:pb-24">
            <h4 className="h1_bold">Explore Upcoming Events and Webinars.</h4>
            <h1 className="px-6 text-center text-base text-[#C0C0C0] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
              Step into a world of excitement, inspiration, and connection at
              our exclusive event - where unforgettable moments await.
            </h1>
            <CustomButton className="rounded-3xl px-5 py-1.5">
              <Link href="/contact-us">
                <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Let&apos;s grow together
                </p>
              </Link>
            </CustomButton>
          </div>
        </section>

        <section className="mx-auto flex max-w-7xl flex-col  ">
          <div
            className={`flex w-full flex-col-reverse  items-center  justify-center lg:flex-row  `}
          >
            <div className="flex flex-1 flex-col gap-4  px-6 py-2 sm:px-10 sm:py-14 md:px-16 lg:px-6">
              <p className="text-center font-light text-[#F2EFEF] sm:text-[17px] lg:text-start">
                Stay at the forefront of innovation and connect with like-minded
                individuals! Our dynamic Events page is your gateway to a world
                of learning, inspiration, and engagement. Explore upcoming
                workshops, conferences, and webinars designed to spark your
                curiosity, refine your skills, and fuel your professional
                growth. Don&apos;t miss out on valuable networking opportunities
                and the chance to interact with industry leaders. Bookmark this
                page and check back often to discover the next event that will
                propel you forward.
              </p>
            </div>

            <Image
              src="/assets/images/events-img.png"
              alt="Image"
              width={650}
              height={620}
              className="ml-[-30px] mt-[-30px] w-[680px]"
            />
          </div>
        </section>

        <section className="mx-auto  my-10 max-w-7xl ">
          <h3 className="h2_semibold text-center">News & Events</h3>
          <div className="mt-16 flex flex-wrap justify-center gap-6 sm:mt-20 lg:mt-24">
            {events &&
              events.map((event) => (
                <EventCard
                  key={event.title}
                  description={event.description}
                  imgUrl={event.imgUrl}
                  readTime={event.read_time}
                  title={event.title}
                  slug={event.slug}
                />
              ))}
          </div>
        </section>
      </div>
    </ScrollBarProgress>
  );
}

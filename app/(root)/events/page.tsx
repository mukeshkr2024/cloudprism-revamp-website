import BlogCard from "@/components/card/blog-card";
import CustomButton from "@/components/shared/custom-button";
import { readBlogs } from "@/constants/blogs-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EventsPage() {
  return (
    <div className="w-full">
      <section
        className="flex h-screen w-full flex-col items-center justify-center "
        style={{
          backgroundImage: "url('/assets/images/about-us-bg.svg')",
        }}
      >
        <div className="flex max-w-4xl flex-col items-center justify-center gap-y-6">
          <h1 className="h1_bold">Cloud Solutions, Scalable Success.</h1>
          <p className="px-6 text-center text-base text-[#C0C0C0] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
            Your Salesforce consultant & implementation partner
          </p>
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
              CloudPrism is dedicated to modifying your business process through
              smart Salesforce deployment and consulting services. Our goal is
              to enhance efficiency, boost productivity,of all sizes and
              industries and drive your organization to remarkable success by
              preferring Salesforce, the global leader in customer relationship
              management (CRM) platforms. With a focus on quality and client
              satisfaction, we are committed to guiding your company to its
              fullest potential in the digital realm.
            </p>

            <p className="text-center font-light text-[#F2EFEF] sm:text-[17px] lg:text-start">
              Our partnership extends beyond mere transactions, as we share a
              commitment to social responsibility and ethical practices. At
              CloudPrism, empathy guides our approach to ethical resource
              management and fair treatment of all individuals involved.
              Partnering with us not only aligns with your values but also
              demonstrates a shared commitment to making a positive imp
            </p>
          </div>

          <Image
            src="/assets/images/mission-svg.svg"
            alt="Image"
            width={620}
            height={620}
          />
        </div>
      </section>

      <section className="mx-auto  my-8 max-w-7xl lg:mt-8 ">
        <h1 className="h2_semibold text-center">News & Events</h1>
        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:mt-20 lg:mt-24">
          {readBlogs.map((blog) => (
            <BlogCard
              key={blog.href}
              description={blog.description}
              href={blog.href}
              imgUrl={blog.imgUrl}
              readTime={blog.read_time}
              title={blog.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

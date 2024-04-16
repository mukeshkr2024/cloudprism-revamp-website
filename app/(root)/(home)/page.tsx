import { SuccessCard } from "@/components/card/SuccessCard";
import { AccordingItem } from "@/components/card/according-card";
import WhyStandOutCard from "@/components/card/why-stand-out-card";
import DemoFormPopup from "@/components/forms/demo-form-dialog";
import ContactForm from "@/components/home/contact-form";
import MainSection from "@/components/home/main-section";
import OurClientSay from "@/components/home/our-clients-says";
import OurServices from "@/components/home/our-services";
import ProjectsDelivered from "@/components/home/projects-delivered";
import SalesforcePartnerSlider from "@/components/home/salesforce-partner-slider";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import {
  certifiedDevelopers,
  technologPartners,
  whyStandOut,
} from "@/constants";
import Image from "next/image";

import { Blog, allBlogs } from "@/.contentlayer/generated";
import BlogCard from "@/components/card/blog-card";
import { recentCaseStudies } from "@/constants/case-studies";
import { sortBlogs } from "@/utils/cn";
import { Metadata } from "next";

const sortedBlogs: Blog[] = sortBlogs(allBlogs);

const readBlogs: Blog[] = sortedBlogs.slice(0, 4);

const recentStudies = recentCaseStudies.slice(0, 4);

export const metadata: Metadata = {
  title: "IT Consulting & Solutions for Business - CloudPrism Solutions.",
  description:
    "Explore tailored IT consultation & solutions at CloudPrism. Transform your business with expert guidance & innovative technology strategies",
  alternates: {
    canonical: "https://cloudprism.in",
  },
  openGraph: {
    title: "IT Consulting & Solutions for Business - CloudPrism Solutions.",
    description:
      "Explore tailored IT consultation & solutions at CloudPrism. Transform your business with expert guidance & innovative technology strategies",
    url: `https://cloudprism.in`,
    siteName: "Cloudprism",
    locale: "en_US",
    type: "website",
    images: "https://cloudprism.in/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Consulting & Solutions for Business - CloudPrism Solutions.",
    description:
      "Explore tailored IT consultation & solutions at CloudPrism. Transform your business with expert guidance & innovative technology strategies",
  },
};

export default function Home() {
  return (
    <ScrollBarProgress>
      <div className="background_primary w-full overflow-hidden">
        <div className="w-full">
          <MainSection />
          <div className="flex-center mt-8 w-full md:mt-12 lg:mt-16 ">
            <h2 className="mb-10 max-w-sm px-6 text-center text-base text-[#F5F5F5] sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl lg:max-w-4xl lg:text-2xl xl:max-w-6xl xl:text-3xl xl:leading-9">
              Cloudprism is your Certified IT Solution Partner, promoting
              business development with complete IT Consultation and solutions.
              With 100+ qualified developers, we&apos;ve completed 420+
              successful projects in 20+ countries. Our Agile technique,
              Customized by our expert IT consultants, provides specific
              solutions, cost reductions, and quick deployment of IT solutions.
              Choose Cloudprism for experienced advice on expanding your
              business through unique IT techniques.
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-7xl  ">
            <OurServices />
          </div>
          <div className="flex-center ">
            <ProjectsDelivered />
          </div>
          <section className="mx-auto mt-6 max-w-6xl sm:mt-10 md:mt-12 lg:mt-16 xl:mt-24 ">
            <h2 className="h2_semibold text-center">
              Our Customer Success <br className="sm:hidden" /> Story
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 md:mt-16 lg:mt-20 lg:gap-6">
              {recentStudies &&
                recentStudies.map((study) => (
                  <SuccessCard
                    key={study.id}
                    description={study.description}
                    title={study.title}
                    imgUrl={study.imageUrl}
                    slug={study.slug}
                  />
                ))}
            </div>
          </section>
          <SalesforcePartnerSlider />
          <OurClientSay />
          <section className="mx-auto my-8 sm:max-w-xl  lg:mt-16  lg:max-w-2xl">
            <h3 className="h2_semibold text-center">
              Our Technological <br className="sm:hidden" /> Partners{" "}
            </h3>
            <div className="my-12 flex justify-between px-6 sm:px-10 lg:my-20 lg:px-14 ">
              {technologPartners.map((item) => (
                <div
                  key={item.title}
                  className="flex w-full flex-col items-center justify-center gap-y-2 text-center"
                >
                  <Image
                    src={item.imgUrl}
                    alt={"IT Consultancy & Solutions"}
                    width={70}
                    height={70}
                    className=" sm:size-[85px] lg:size-24"
                  />
                  <p className="text-sm font-normal  text-white sm:text-base md:text-lg">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="mx-auto max-w-6xl ">
            <h3 className="h2_semibold text-center">
              Our Certified <br className="sm:hidden" /> Developers{" "}
            </h3>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 px-4 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24">
              {certifiedDevelopers.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.imgUrl}
                    alt={"IT Consultancy & Solutions"}
                    width={120}
                    height={120}
                    className="size-20 sm:size-24 md:size-28 xl:size-[120px]"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="mx-auto mt-24 max-w-6xl ">
            <h3 className="h2_semibold text-center">
              Why Cloud Prism Stands <br className="sm:hidden" /> Out
            </h3>
            <div className="mt-12 flex flex-col gap-4 px-4 sm:mt-16 md:mt-20">
              {whyStandOut.map((item) => (
                <div key={item.title} className="size-full">
                  <div className=" size-full lg:hidden">
                    <AccordingItem
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                  <div className="hidden size-full lg:block">
                    <WhyStandOutCard
                      key={item.title}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="mx-auto mt-20 max-w-sm sm:mt-28 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
            <h3 className="h2_semibold text-center">Read Our Blogs</h3>
            <div className="mt-24 flex flex-wrap  justify-center gap-y-6 px-6  sm:justify-between">
              {readBlogs &&
                readBlogs.map((blog) => (
                  <BlogCard
                    key={blog.title}
                    description={blog.description}
                    image={blog.image!}
                    readTime={blog.readingTime}
                    title={blog.title}
                    slug={blog.url}
                  />
                ))}
            </div>
          </section>
          <section
            className="mx-auto flex size-full max-w-[95rem] flex-col bg-cover bg-center md:px-12  lg:h-[600px] lg:flex-row lg:px-16"
            style={{
              backgroundImage: "url('/assets/images/connect-to-us.png')",
            }}
          >
            <div className="flex flex-1 flex-col gap-y-6   px-10 lg:gap-y-10">
              <h3 className="h2_semibold mt-[90px]">Connect with us</h3>
              <p className="mb-2 max-w-md text-base font-light text-[#A4A4A4] sm:text-lg md:text-xl">
                Our experienced support team will respond to your message within
                24 hours.
              </p>
            </div>
            <div className="my-10 flex  items-center justify-center  px-4 lg:my-0 lg:w-full lg:flex-1 ">
              <ContactForm />
            </div>
          </section>
        </div>
        <DemoFormPopup />
      </div>
    </ScrollBarProgress>
  );
}

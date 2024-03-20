import { SuccessCard } from "@/components/card/SuccessCard";
import BlogCard from "@/components/card/blog-card";
import WhyStandOutCard from "@/components/card/why-stand-out-card";
import OurServices from "@/components/home/our-services";
import ProjectsDelivered from "@/components/home/projects-delivered";
import SalesforcePartnerSlider from "@/components/home/salesforce-partner-slider";

import { AccordingItem } from "@/components/card/according-card";
import ContactForm from "@/components/home/contact-form";
import MainSection from "@/components/home/main-section";
import OurClientSay from "@/components/home/our-clients-says";
import {
  certifiedDevelopers,
  readOurBlogs,
  successStory,
  technologPartners,
  whyStandOut,
} from "@/constants";
import Image from "next/image";
import HomePage from "@/components/forms/home-form-dialog";

export default function Home() {
  return (
    <div className="background_primary w-full overflow-hidden">
      <div className="w-full">
        {/* Main section  */}
        <MainSection />
        <div className="flex-center mt-8 w-full lg:mt-12">
          <p className="max-w-sm px-6 text-center text-base text-[#F5F5F5] sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl lg:max-w-4xl lg:text-2xl xl:max-w-6xl xl:text-3xl xl:leading-9">
            Cloudprism a certified digital consulting partner specializing in
            Directing Business Progress via Salesforce implementation and
            consulting services. Promising 100+ Salesforce-certified developers
            and delivering over 120 projects in more than 20 countries. An AGILE
            methodology enables Cloudprism to provide tailored solutions, cost
            savings, and faster implementation and adoption. Empowering
            small-town talent, resource outsourcing, and prioritizing empathy
            for the end-user in their professional and technical services.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-7xl  ">
          <OurServices />
        </div>
        <div className="flex-center ">
          {/* TODO  add green gradient */}
          <ProjectsDelivered />
        </div>
        <section className="mx-auto mt-6 max-w-6xl sm:mt-10 md:mt-12 lg:mt-16 xl:mt-24 ">
          <h2 className="h2_semibold text-center">
            Our Customer Success <br className="sm:hidden" /> Story
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 md:mt-16 lg:mt-20 lg:gap-6">
            {successStory.map((item) => (
              <SuccessCard
                key={item.title}
                imgUrl={item.imgUrl}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
        {/* SalesforcePartner Slider  */}
        <SalesforcePartnerSlider />
        {/* Our client Says  */}
        <OurClientSay />
        {/* Technology partners */}
        <section className="mx-auto my-8 sm:max-w-xl  lg:mt-16  lg:max-w-2xl">
          <h2 className="h2_semibold text-center">
            Our Technological <br className="sm:hidden" /> Partners{" "}
          </h2>
          <div className="my-12 flex justify-between px-6 sm:px-10 lg:my-20 lg:px-14 ">
            {technologPartners.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col items-center justify-center gap-y-2 text-center"
              >
                <Image
                  src={item.imgUrl}
                  alt={item.title}
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
        {/* Certified Devlopers  */}
        <section className="mx-auto max-w-6xl ">
          <h2 className="h2_semibold text-center">
            Our Certified <br className="sm:hidden" /> Developers{" "}
          </h2>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 px-4 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24">
            {certifiedDevelopers.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.imgUrl}
                  alt={item.imgUrl}
                  width={120}
                  height={120}
                  className="size-20 sm:size-24 md:size-28 xl:size-[120px]"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Stand out  */}
        <section className="mx-auto mt-24 max-w-6xl ">
          <h2 className="h2_semibold text-center">
            Why Cloud Prism Stands <br className="sm:hidden" /> Out
          </h2>
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
        <section className="mx-auto mt-28 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl ">
          <h2 className="h2_semibold text-center">Read Our Blogs</h2>
          <div className="mt-24 flex flex-wrap  justify-center gap-y-6 px-6  sm:justify-between">
            {readOurBlogs.map((item) => (
              <BlogCard
                key={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
                readTime={item.read_time}
                title={item.title}
              />
            ))}
          </div>
        </section>
        {/* Connect to us  */}

        <section
          className="flex size-full flex-col bg-cover bg-center md:px-12 lg:h-[600px] lg:flex-row  lg:px-16"
          style={{
            backgroundImage: "url('/assets/images/connect-to-us.svg')",
          }}
        >
          <div className="flex flex-1 flex-col gap-y-6   px-10 lg:gap-y-10">
            <h2 className="h2_semibold mt-[90px]">Connect with us</h2>
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
      <HomePage />
    </div>
  );
}

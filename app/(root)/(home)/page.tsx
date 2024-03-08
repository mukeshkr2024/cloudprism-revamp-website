import { SuccessCard } from "@/components/card/SuccessCard";
import BlogCard from "@/components/card/blog-card";
import WhyStandOutCard from "@/components/card/why-stand-out-card";
import OurServices from "@/components/home/our-services";
import ProjectsDelivered from "@/components/home/projects-delivered";
import SalesforcePartnerSlider from "@/components/home/salesforce-partner-slider";
import ConnectToUs from "@/components/shared/connect-to-us";
import CustomButton from "@/components/shared/custom-button";
import {
  certifiedDevelopers,
  readOurBlogs,
  successStory,
  technologPartners,
  whyStandOut,
} from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="background_primary">
      <div>
        {/* Main section  */}
        <div className="flex h-screen items-center justify-center">
          <div className="flex max-w-4xl flex-col items-center justify-center gap-6  text-white">
            <h1 className="text-center text-8xl font-bold">
              Create Value That Empowers
            </h1>
            <p className="text-center text-3xl text-[#C0C0C0]">
              with the Salesforce Consulting Partner and Salesforce
              Implementation.
            </p>
            <CustomButton text="Let's grow together" className="" href="" />
          </div>
        </div>

        <div className="flex-center w-full">
          <p className="max-w-6xl text-center text-3xl leading-9 text-[#F5F5F5]">
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

        <div className="flex-center mt-8">
          {/* TODO  add green gradient */}
          <ProjectsDelivered />
        </div>

        <div className="mx-auto mt-14 max-w-7xl  ">
          <OurServices />
        </div>

        <section className="mx-auto mt-24 max-w-6xl ">
          <h2 className="h2-semibold text-center">
            Our Customer Success Story
          </h2>

          <div className="mt-20 flex justify-between">
            {successStory.map((item) => (
              <SuccessCard
                key={item.title}
                imgUrl={item.imgUrl}
                title={item.title}
              />
            ))}
          </div>
        </section>

        {/* SalesforcePartner Slider  */}
        <SalesforcePartnerSlider />

        {/* Technology partners */}
        <section className="mx-auto my-8 max-w-3xl">
          <h2 className="h2-semibold text-center">
            Our Technological Partners{" "}
          </h2>

          <div className="my-28 flex justify-between px-16">
            {technologPartners.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center gap-4"
              >
                <Image
                  src={item.imgUrl}
                  alt={item.title}
                  width={120}
                  height={120}
                />
                <p className="text-lg font-normal text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certified Devlopers  */}
        <section className="mx-auto max-w-6xl ">
          <h2 className="h2-semibold text-center">Our Certified Developers </h2>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-6 px-4">
            {certifiedDevelopers.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.imgUrl}
                  alt={item.imgUrl}
                  width={120}
                  height={120}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Stand out  */}
        <section className="mx-auto mt-24 max-w-6xl ">
          <h2 className="h2-semibold text-center">
            Why Cloud Prism Stands Out
          </h2>

          <div className="mt-24 flex flex-col gap-4 px-4">
            {whyStandOut.map((item) => (
              <WhyStandOutCard
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-28 max-w-7xl ">
          <h2 className="h2-semibold text-center">Read Our Blogs</h2>
          <div className="mt-24 flex justify-between px-6">
            {readOurBlogs.map((item) => (
              <BlogCard
                key={item.href}
                description={item.description}
                href={item.href}
                imgUrl={item.imgUrl}
                readTime={item.read_time}
                title={item.title}
              />
            ))}
          </div>
        </section>

        {/* Connect to us  */}
        <ConnectToUs />
      </div>
    </div>
  );
}

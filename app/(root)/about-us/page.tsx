import SectionCard from "@/components/card/section-card";
import TeamCard from "@/components/card/team-card";
import HistorySection from "@/components/history-section";
import CustomButton from "@/components/shared/custom-button";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { ourTeams } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <ScrollBarProgress>
      <div className="w-full">
        {/* Scalable Success Section  */}
        {/* TODO: Add responsiveness */}
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
        <div className="mx-auto mb-20 flex max-w-5xl flex-col gap-y-20  ">
          <h2 className="h2_semibold text-center">About us</h2>
          <div className="flex flex-col gap-5">
            <p className="mx-auto max-w-sm  px-6 text-center text-base text-[#F5F5F5] sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl lg:max-w-4xl lg:text-2xl xl:max-w-6xl xl:text-3xl xl:leading-9">
              CloudPrism, a IT Consultation and IT Solutions Partner,we provide
              premium one-stop Salesforce solutions and full-stack development
              services. Based in a tier 2 city in India, our unique origin in
              Patna City has proven to be a boon for both our startup and the
              local community. We prioritize creating value within the
              community, distinguishing ourselves without relying on
              conventional means of establishing presence.
            </p>
            <p className="mx-auto max-w-sm px-6 text-center text-base text-[#F5F5F5] sm:max-w-md sm:text-lg md:max-w-2xl md:text-xl lg:max-w-4xl lg:text-2xl xl:max-w-6xl xl:text-3xl xl:leading-9">
              With a team of over 50 certified developers, CloudPrism excels in
              Salesforce-certified consultancy and serves as a Salesforce ISV
              Partner, boasting proficient full-stack expertise. Our technical
              skill outshines that of other small and medium Salesforce
              companies, as we specialize in providing Custom-built solutions
              designed to meet your specific timeline and requirements, ensuring
              optimal outcomes for your business success. With CloudPrism by
              your side, you can trust that your IT Solutions journey will be
              guided by industry best practices and unparalleled expertise.
            </p>
          </div>
        </div>
        {/* Mission Section */}
        <div className="flex flex-col space-y-12 lg:space-y-4">
          <SectionCard
            title="Mission"
            description1="CloudPrism is dedicated to modifying your business process through smart Salesforce deployment and consulting services. Our goal is to enhance efficiency, boost productivity,of all sizes and industries and drive your organization to remarkable success by preferring Salesforce, the global leader in customer relationship management (CRM) platforms. With a focus on quality and client satisfaction, we are committed to guiding your company to its fullest potential in the digital realm."
            description2="Our partnership extends beyond mere transactions, as we share a commitment to social responsibility and ethical practices. At CloudPrism, empathy guides our approach to ethical resource management and fair treatment of all individuals involved.  Partnering with us not only aligns with your values but also demonstrates a shared commitment to making a positive imp."
            imgUrl="/assets/images/mission-svg.svg"
            className="flex-col-reverse  lg:flex-row"
            imagSize="w-[710px] ml-[-50px]"
          />
          <SectionCard
            title="Vision"
            description1="CloudPrism strives to be a platinum partner of Salesforce, that will enable us to convert industry of all sizes to cloud by providing them the best SAAS Tools of salesforce deployment and consulting. We aspire to improve consumer experiences, optimize company operations by bringing firm data into the cloud, and reach development prospects by constantly pushing the frontiers of technology and honoring innovations. Together with our clients, we hope to modify sectors and impact the future of business using Salesforce's revolutionary power."
            imgUrl="/assets/images/vision-svg.svg"
            className="flex-col-reverse lg:flex-row-reverse"
            imagSize="w-[710px] mr-[-50px]"
          />
        </div>

        {/* History-section */}
        <HistorySection />
        <div>
          {/* TODO: add a right image  */}
          <Image
            src={"/assets/images/history-svg.svg"}
            alt="History"
            height={662}
            width={1286}
          />
        </div>
        {/* Team */}
        <section className="mx-auto mb-36 flex max-w-7xl flex-col gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-28 ">
          <h2 className="h2_semibold text-center">Our Team</h2>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            {ourTeams.map((team) => (
              <TeamCard
                key={team.name}
                description={team.description}
                linkdein={team.linkdein}
                linkdeinUrl={team.linkdeinUrl}
                name={team.name}
                profilePic={team.profilePic}
              />
            ))}
          </div>
        </section>
      </div>
    </ScrollBarProgress>
  );
}

import MissionCard from "@/components/card/mission-card";
import TeamCard from "@/components/card/team-card";
import HistorySection from "@/components/history-section";
import CustomButton from "@/components/shared/custom-button";
import { ourTeams } from "@/constants";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Scalable Success Section  */}
      <section
        className="flex h-screen w-full flex-col items-center justify-center "
        style={{
          backgroundImage: "url('/assets/images/about-us-bg.svg')",
        }}
      >
        <div className="flex max-w-4xl flex-col items-center justify-center gap-y-6">
          <h1 className="h1_bold">Cloud Solutions, Scalable Success.</h1>
          <p className="paragraph_1 ">
            Your Salesforce consultant & implementation partner
          </p>
          <CustomButton text="Let's grow together" className="" href="" />
        </div>
      </section>
      <div className="mx-auto mb-20 flex max-w-5xl flex-col gap-y-20 ">
        <h2 className="h2_semibold text-center">About us</h2>
        <div className="flex flex-col gap-5">
          <p className="paragraph_2">
            <span className="font-bold">
              CloudPrism, a Salesforce Ridge Partner,
            </span>{" "}
            holds certifications from CRM leader Salesforce, offering premium
            salesforce consultancy and implementation services. Based in a tier
            2 city in India, our unique origin in Patna City has proven to be a
            boon for both our startup and the local community. We prioritize
            creating value within the community, distinguishing ourselves
            without relying on conventional means of establishing presence.
          </p>
          <p className="paragraph_2">
            With a team of over 50 certified developers, CloudPrism excels in
            Salesforce-certified consultancy and serves as a Salesforce ISV
            Partner, boasting proficient full-stack expertise. Our technical
            skill outshines that of other small and medium Salesforce companies,
            as we specialize in providing Custom-built solutions designed to
            meet your specific timeline and requirements, ensuring optimal
            outcomes for your business success.
          </p>
          <p className="paragraph_2">
            <span className="font-bold">With CloudPrism by your side </span>,
            you can trust that your Salesforce journey will be guided by
            industry best practices and unparalleled expertise
          </p>
        </div>
      </div>
      {/* Mission Section */}
      <MissionCard
        title="Mission"
        description1="CloudPrism is dedicated to modifying your business process through smart Salesforce deployment and consulting services. Our goal is to enhance efficiency, boost productivity,of all sizes and industries and drive your organization to remarkable success by preferring Salesforce, the global leader in customer relationship management (CRM) platforms. With a focus on quality and client satisfaction, we are committed to guiding your company to its fullest potential in the digital realm."
        description2="Our partnership extends beyond mere transactions, as we share a commitment to social responsibility and ethical practices. At CloudPrism, empathy guides our approach to ethical resource management and fair treatment of all individuals involved.  Partnering with us not only aligns with your values but also demonstrates a shared commitment to making a positive imp."
        imgUrl="/assets/images/prateek-prasoon.svg"
        svgUrl="/assets/gradients/mission-card-gradient-2.svg"
        className=""
      />

      <MissionCard
        title="Vision"
        description1="CloudPrism strives to be a platinum partner of Salesforce, that will enable us to convert industry of all sizes to cloud by providing them the best SAAS Tools of salesforce deployment and consulting. We aspire to improve consumer experiences, optimize company operations by bringing firm data into the cloud, and reach development prospects by constantly pushing the frontiers of technology and honoring innovations. Together with our clients, we hope to modify sectors and impact the future of business using Salesforce's revolutionary power."
        imgUrl="/assets/images/vision-svg.svg"
        svgUrl="/assets/gradients/mission-card-gradient.svg"
        className="flex-row-reverse"
      />

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
      <section className="mx-auto mb-36 flex max-w-7xl flex-col gap-y-28 ">
        <h2 className="h2_semibold text-center">Our Team</h2>

        <div className=" flex flex-wrap justify-center gap-6">
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
  );
}

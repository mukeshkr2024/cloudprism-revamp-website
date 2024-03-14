import React from "react";

export default function ProjectsDelivered() {
  return (
    <div
      className="w-full pt-40  xl:pt-56  "
      style={{
        backgroundImage: "url('/assets/gradients/project-gradient.svg')",
        backgroundPosition: "top center",
      }}
    >
      <div className=" mx-1.5 flex max-w-6xl flex-col gap-y-24 rounded-2xl bg-black py-16 sm:mx-10 sm:rounded-[36px]  md:mx-16 xl:mx-auto xl:px-28">
        <div className="flex w-full justify-between">
          <ProjectItem projects="420" description="Projects Delivered" />
          <ProjectItem
            projects="100"
            description="Salesforce-certified developers"
          />
        </div>

        <div className="flex w-full justify-between">
          <ProjectItem
            projects="100"
            description="Salesforce-certified developers"
          />
          <ProjectItem projects="20" description="countries Served" />
        </div>
      </div>
    </div>
  );
}

const ProjectItem = ({
  projects,
  description,
}: {
  projects: string;
  description: string;
}) => {
  return (
    <div className="flex w-1/2 flex-col items-center justify-center">
      <span className="text-4xl font-extrabold text-white sm:text-5xl  md:text-6xl lg:text-8xl ">
        {projects}+
      </span>
      <p className="text-center text-sm font-light text-[#D4D4D4] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        {description}{" "}
      </p>
    </div>
  );
};

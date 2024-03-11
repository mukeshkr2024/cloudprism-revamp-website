import React from "react";

export default function ProjectsDelivered() {
  return (
    <div
      className="w-full  pt-56  "
      style={{
        backgroundImage: "url('/assets/gradients/project-gradient.svg')",
        backgroundPosition: "top center",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-y-24 rounded-[36px]  bg-black px-28 py-16">
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
      <span className="text-9xl font-extrabold text-white">{projects}+</span>
      <p className="text-2xl font-light text-[#D4D4D4]">{description} </p>
    </div>
  );
};

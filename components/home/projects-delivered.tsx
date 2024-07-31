"use client";

import { useInView } from "@/utils/useInView";
import CountUp from 'react-countup';

export default function ProjectsDelivered() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="mx-1.5 w-full rounded-2xl bg-no-repeat pt-40 sm:rounded-none xl:pt-56"
      style={{
        backgroundImage: "url('/assets/gradients/project-gradient.svg')",
        backgroundPosition: "top center",
      }}
    >
      <div
        className="mb-[-1px] flex max-w-6xl flex-col gap-y-24 rounded-2xl bg-black py-16 sm:mx-10 sm:rounded-[36px] md:mx-16 xl:mx-auto xl:px-28"
        style={{
          borderTop: "2px solid",
          borderImage:
            "linear-gradient(90deg, rgba(2, 255, 179, 0) 2.62%, #02FFB3 59.68%, rgba(2, 255, 179, 0) 90.09%) 2",
        }}
      >
        <div className="flex w-full justify-between">
          <ProjectItem projects={420} description="Projects Delivered" inView={inView} />
          <ProjectItem
            projects={100}
            description="Salesforce-certified developers"
            inView={inView}
          />
        </div>
        <div className="flex w-full justify-between">
          <ProjectItem projects={300} description="Happy customer"
            inView={inView}
          />
          <ProjectItem projects={20} description="Countries Served"
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}

const ProjectItem = ({
  projects,
  description,
  inView
}: {
  projects: number;
  description: string;
  inView: boolean;
}) => {
  // const [projectsValue, setProjectsValue] = useState(() => 0);

  // useEffect(() => {
  //   const incrementDuration = 2000;
  //   const incrementStep = Math.ceil(projects / (incrementDuration / 100));

  //   let currentValue = 0;

  //   const timer = setInterval(() => {
  //     currentValue += incrementStep;
  //     if (currentValue >= projects) {
  //       setProjectsValue(projects);
  //       clearInterval(timer);
  //     } else {
  //       setProjectsValue(currentValue);
  //     }
  //   }, 100);

  //   return () => clearInterval(timer);
  // }, [projects]);

  return (
    <div className="flex w-1/2 flex-col items-center justify-center">
      <span className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-8xl">
        {/* {projectsValue.toString()}+ */}
        {
          inView ? <CountUp end={projects} duration={2.5} /> : " 0"
        }+
      </span>
      <p className="text-center text-sm font-light text-[#D4D4D4] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        {description}
      </p>
    </div>
  );
};

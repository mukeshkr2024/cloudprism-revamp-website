import { recentCaseStudies } from "@/constants/case-studies";
import RecentCaseStudy from "./card/recent-case-card";

export default function EventRightSidebar() {
  const recentCases = recentCaseStudies.slice(0, 4);

  return (
    <div className="mt-12 w-full  px-6 lg:w-[320px]">
      <div className="mt-10 flex w-full flex-col items-center justify-center   text-white">
        <h2 className="text-2xl font-medium">Recent Case Studies</h2>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4">
          {recentCases &&
            recentCases.map((caseStudy) => (
              <RecentCaseStudy
                image={caseStudy?.imageUrl}
                slug={caseStudy.slug}
                title={caseStudy.title}
                key={caseStudy.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

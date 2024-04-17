import Case5 from "@/components/case-studies/case-5";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handling Day-to-Day Tasks and Resolving Issues Promptly",
  description:
    "Efficient Deployment and Seamless Maintenance by Cloudprism Salesforce Consultation and Implementation strategy.",
  alternates: {
    canonical:
      "https://cloudprism.in/case-study/cloudprism-ontime-task-completion",
  },
  openGraph: {
    title: "Handling Day-to-Day Tasks and Resolving Issues Promptly",
    description:
      "Efficient Deployment and Seamless Maintenance by Cloudprism Salesforce Consultation and Implementation strategy.",
    url: "https://cloudprism.in/case-study/cloudprism-ontime-task-completion",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Handling Day-to-Day Tasks and Resolving Issues Promptly",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      "Efficient Deployment and Seamless Maintenance by Cloudprism Salesforce Consultation and Implementation strategy.",
  },
};

const CaseStudy1 = () => {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <Case5 />
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
};

export default CaseStudy1;

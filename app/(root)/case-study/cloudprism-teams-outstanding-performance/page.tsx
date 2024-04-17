import { Case4 } from "@/components/case-studies/case-4";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Implemented by Cloudprism Solutions & Selise",
  description:
    " With the partnership with Selise Cloudprism Solutions Implemented Salesforce integration to enhance the customer satisfaction.",
  alternates: {
    canonical:
      "https://cloudprism.in/case-study/cloudprism-teams-outstanding-performance",
  },
  openGraph: {
    title: "Salesforce Implemented by Cloudprism Solutions & Selise",
    description:
      " With the partnership with Selise Cloudprism Solutions Implemented Salesforce integration to enhance the customer satisfaction.",
    url: "https://cloudprism.in/case-study/cloudprism-teams-outstanding-performance",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Salesforce Implemented by Cloudprism Solutions & Selise",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      " With the partnership with Selise Cloudprism Solutions Implemented Salesforce integration to enhance the customer satisfaction.",
  },
};

const CaseStudy1 = () => {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <Case4 />
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
};

export default CaseStudy1;

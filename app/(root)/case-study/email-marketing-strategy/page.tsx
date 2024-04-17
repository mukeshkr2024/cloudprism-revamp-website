import { Case1 } from "@/components/case-studies/case-1";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simplified Customer Experience and Email Marketing Strategy",
  description:
    "Boosting the customer experience with Email marketing strategy with Cloudrism Salesforce consulting approach.",
  alternates: {
    canonical: "https://cloudprism.in/case-study/email-marketing-strategy",
  },
  openGraph: {
    title: "Simplified Customer Experience and Email Marketing Strategy",
    description:
      "Boosting the customer experience with Email marketing strategy with Cloudrism Salesforce consulting approach.",
    url: "https://cloudprism.in/case-study/email-marketing-strategy",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Simplified Customer Experience and Email Marketing Strategy",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      "Boosting the customer experience with Email marketing strategy with Cloudrism Salesforce consulting approach.",
  },
};

const CaseStudy1 = () => {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <Case1 />
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
};

export default CaseStudy1;

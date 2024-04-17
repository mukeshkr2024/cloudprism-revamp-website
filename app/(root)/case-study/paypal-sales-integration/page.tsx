import { Case2 } from "@/components/case-studies/case-2";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PayPal-Salesforce Integration for E-commerce by Cloudprism.",
  description:
    "PayPal-Salesforce Integration for E-commerce to increase customer satisfaction with association of CloudPrism Solutions.",
  alternates: {
    canonical: "https://cloudprism.in/case-study/paypal-sales-integration",
  },
  openGraph: {
    title: "PayPal-Salesforce Integration for E-commerce by Cloudprism.",
    description:
      "PayPal-Salesforce Integration for E-commerce to increase customer satisfaction with association of CloudPrism Solutions.",
    url: "https://cloudprism.in/case-study/paypal-sales-integration",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "PayPal-Salesforce Integration for E-commerce by Cloudprism.",
    description:
      "PayPal-Salesforce Integration for E-commerce to increase customer satisfaction with association of CloudPrism Solutions.",
    card: "summary_large_image",
    site: "@_CloudPrism_",
  },
};

const CaseStudy1 = () => {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <Case2 />
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
};

export default CaseStudy1;

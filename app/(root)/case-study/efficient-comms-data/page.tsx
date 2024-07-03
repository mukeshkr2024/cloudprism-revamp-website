import { Case3 } from "@/components/case-studies/case-3";
import ConnectToUs from "@/components/shared/connect-to-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hedera Dx Implements CloudPrism Solutions on Salesforce  ",
  description:
    " Efficient Communication and Data Centralization: Hedera Dx Implements CloudPrism Solutions on Salesforce",
  alternates: {
    canonical: "https://cloudprism.in/case-study/efficient-comms-data",
  },
  openGraph: {
    title: "Hedera Dx Implements CloudPrism Solutions on Salesforce",
    description:
      " Efficient Communication and Data Centralization: Hedera Dx Implements CloudPrism Solutions on Salesforce",
    url: "https://cloudprism.in/case-study/efficient-comms-data",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Hedera Dx Implements CloudPrism Solutions on Salesforce",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      " Efficient Communication and Data Centralization: Hedera Dx Implements CloudPrism Solutions on Salesforce",
  },
};

const CaseStudy1 = () => {
  return (
    <ScrollBarProgress>
      <div className="mx-auto w-full max-w-[95rem]">
        <Case3 />
        <ConnectToUs />
      </div>
    </ScrollBarProgress>
  );
};

export default CaseStudy1;

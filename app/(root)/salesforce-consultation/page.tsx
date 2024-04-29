import BuisnesGrowthCard from "@/components/card/buisness-growth-card";
import SaleforceMainSection from "@/components/services/saleforce/main-section";
import SalesForceServices from "@/components/services/saleforce/saleforce-services";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { salesforceBuisnessData, salesforceBuisnessPoints } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce Consultation & Implementation Partner-CloudPrism.",
  description:
    "Expert Salesforce consultation & implementation services boost your business for success. Explore growth potential with CloudPrism Solutions.",
  alternates: {
    canonical: "https://cloudprism.in/salesforce-consultation",
  },
  openGraph: {
    title: "Salesforce Consultation & Implementation Partner-CloudPrism.",
    description:
      "Expert Salesforce consultation & implementation services boost your business for success. Explore growth potential with CloudPrism Solutions.",
    url: "https://cloudprism.in/salesforce-consultation",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Salesforce Consultation & Implementation Partner-CloudPrism.",
    description:
      "Expert Salesforce consultation & implementation services boost your business for success. Explore growth potential with CloudPrism Solutions.",
    card: "summary_large_image",
    site: "@_CloudPrism_",
  },
};

const SalesforcePage = () => {
  return (
    <ScrollBarProgress>
      <div className="background_primary w-full overflow-hidden">
        {/* main section  */}
        <SaleforceMainSection />

        {/* services  */}
        <SalesForceServices />

        <div className="mx-auto my-16 max-w-sm px-2 sm:max-w-md md:max-w-lg lg:max-w-7xl ">
          <BuisnesGrowthCard
            buisnessData={salesforceBuisnessData}
            buisnessPoints={salesforceBuisnessPoints}
          />
        </div>
      </div>
    </ScrollBarProgress>
  );
};

export default SalesforcePage;

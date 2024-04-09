import BuisnesGrowthCard from "@/components/card/buisness-growth-card";
import SaleforceMainSection from "@/components/services/saleforce/main-section";
import SalesForceServices from "@/components/services/saleforce/saleforce-services";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { salesforceBuisnessData, salesforceBuisnessPoints } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "CloudPrism Solutions: Your Salesforce Consultation & Implementation Expert",
  description:
    "Explore growth potential with CloudPrism Solutions. Expert Salesforce consultation & implementation services empower your business for success.",
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

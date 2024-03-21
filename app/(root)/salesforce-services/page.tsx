"use client";

import BuisnesGrowthCard from "@/components/card/buisness-growth-card";
import SaleforceMainSection from "@/components/services/saleforce/main-section";
import SalesForceServices from "@/components/services/saleforce/saleforce-services";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { fullStackbuisnessData, fullstackBuisnessPoints } from "@/constants";

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
            buisnessData={fullStackbuisnessData}
            buisnessPoints={fullstackBuisnessPoints}
          />
        </div>
      </div>
    </ScrollBarProgress>
  );
};

export default SalesforcePage;

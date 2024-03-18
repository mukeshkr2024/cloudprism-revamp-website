"use client";

import SaleforceMainSection from "@/components/services/saleforce/main-section";
import SalesForceServices from "@/components/services/saleforce/saleforce-services";

const SalesforcePage = () => {
  return (
    <div className="background_primary w-full overflow-hidden">
      {/* main section  */}
      <SaleforceMainSection />

      {/* services  */}
      <SalesForceServices />
    </div>
  );
};

export default SalesforcePage;

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function HistorySection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-y-16 ">
      <h1 className="h2_semibold pt-16 text-center">History</h1>
      <div className="flex w-full flex-col gap-y-12">
        <div className="flex justify-between">
          <h1 className="h2_semibold">2016</h1>
          <div className="flex gap-x-4">
            <div
              className="flex h-[50px] w-[125px] cursor-pointer items-center justify-center rounded-[35px]"
              style={{
                background:
                  "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
              }}
            >
              <ChevronLeft className="text-[#5C5B5B]" />
            </div>
            <div
              className="flex h-[50px] w-[125px] cursor-pointer items-center justify-center rounded-[35px]"
              style={{
                background:
                  "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
              }}
            >
              <ChevronRight className="text-[#5C5B5B]" />
            </div>
          </div>
        </div>
        <p className="text-xl font-light text-white">
          CloudPrism strives to be a platinum partner of Salesforce, that will
          enable us to convert industry of all sizes to cloud by providing them
          the best SAAS Tools of salesforce deployment and consulting.CloudPrism
          is dedicated to modifying your business process through smart
          Salesforce deployment and consulting services.{" "}
        </p>
      </div>
    </section>
  );
}

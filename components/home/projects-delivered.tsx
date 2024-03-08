import React from "react";

export default function ProjectsDelivered() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-6xl flex-col gap-y-24 rounded-[36px] border-2 bg-black px-28 py-16">
        <div className="flex w-full justify-between">
          <div className="flex w-1/2 flex-col items-center justify-center">
            <span className="text-9xl font-extrabold text-white">420+</span>
            <p className="text-2xl font-light text-[#D4D4D4]">
              Projects Delivered
            </p>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center">
            <span className="text-9xl font-extrabold text-white">100+</span>
            <p className="text-2xl font-light text-[#D4D4D4]">
              Salesforce-certified developers{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex w-1/2 flex-col items-center justify-center">
            <span className="text-9xl font-extrabold text-white">100+</span>
            <p className="text-2xl font-light text-[#D4D4D4]">
              Salesforce-certified developers{" "}
            </p>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center">
            <span className="text-9xl font-extrabold text-white">20+</span>
            <p className="text-2xl font-light text-[#D4D4D4]">
              countries Served{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

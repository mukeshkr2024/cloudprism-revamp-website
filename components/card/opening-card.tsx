import React from "react";
import CustomButton from "../shared/custom-button";
import { Home, MapPin, MessageSquareText } from "lucide-react";
import Image from "next/image";

export default function JobOpeningCard() {
  return (
    <div
      className="flex h-[390px] w-[374px] flex-col justify-between rounded-lg border-2 border-[#191919C4] p-6 text-white shadow-md"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%); ",
        // border: "1px solid",
        // borderImage:
        //   "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 1",
      }}
    >
      <div className="flex w-full items-center justify-between">
        <p className="text-[27px] text-white">UI/UX Designer</p>
        <Image
          src="/assets/icons/linkdein-dark.svg"
          alt="Linkdein"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4">
        <div
          className="flex items-center gap-x-2  rounded-3xl bg-[#D9D9D90A]
px-4 py-1 text-base text-[#757575]"
        >
          <Home className="size-5" />
          <p className="">Full-time employment</p>
        </div>
        <div className="flex gap-x-3">
          <div
            className="flex items-center gap-x-2  rounded-3xl bg-[#D9D9D90A]
px-4 py-1 text-base text-[#757575]"
          >
            <MessageSquareText />
            <p className="">3+ Years</p>
          </div>
          <div
            className="flex items-center gap-x-2  rounded-3xl bg-[#D9D9D90A]
px-4 py-1 text-base text-[#757575]"
          >
            <MapPin />
            <p className="">Jaipur</p>
          </div>
        </div>
      </div>
      <p className="text-[#929292]">
        Uncover the perfect role that aligns with your unique abilities and grab
        countless opportunities to take your career to new heights.
      </p>
      <div>
        <CustomButton className="rounded-3xl px-4 py-1.5">
          <p className=" font-semibold text-black">Apply Now</p>
        </CustomButton>
      </div>
    </div>
  );
}

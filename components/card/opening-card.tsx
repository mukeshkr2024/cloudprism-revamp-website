import React from "react";
import CustomButton from "../shared/custom-button";
import { Home, MapPin, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface JobProps {
  title: string;
  employmentType: string;
  experience: string;
  location: string;
  description: string;
  linkdeinUrl: string;
  handleApply: () => void;
}

export default function JobOpeningCard({
  description,
  employmentType,
  experience,
  location,
  title,
  handleApply,
  linkdeinUrl,
}: JobProps) {
  return (
    <div className="job_opening_card flex h-[380px] w-[330px] flex-col justify-between rounded-lg border border-[#2E2E2E] p-6 text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:border-[#02FFB3] sm:h-[390px]  sm:w-[374px]">
      <div className="flex w-full items-center justify-between">
        <h4 className="text-[27px] text-white">{title}</h4>
        <Link href={`/`}>
          <Image
            src="/assets/icons/linkdein-dark.svg"
            alt="Linkdein"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start gap-y-4">
        <div
          className="flex items-center gap-x-2  rounded-3xl bg-[#D9D9D90A]
px-4 py-1 text-base text-[#757575]"
        >
          <Home className="size-5" />
          <p className="">{employmentType}</p>
        </div>
        <div className="flex gap-x-3">
          <div
            className="flex items-center gap-x-2  rounded-3xl bg-[#D9D9D90A]
px-4 py-1 text-base text-[#757575]"
          >
            <MessageSquareText />
            <p className="">{experience}</p>
          </div>
          <div
            className="flex items-center gap-x-2  rounded-3xl bg-[#D9D9D90A]
px-4 py-1 text-base text-[#757575]"
          >
            <MapPin />
            <p className="">{location}</p>
          </div>
        </div>
      </div>
      <p className="text-[#929292]">{description}</p>
      <div>
        <CustomButton className="rounded-3xl px-4 py-1.5">
          <p className=" font-semibold text-black" onClick={handleApply}>
            Apply Now
          </p>
        </CustomButton>
      </div>
    </div>
  );
}

import { OurTeamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeamCard({
  description,
  linkdein,
  name,
  profilePic,
  linkdeinUrl,
}: OurTeamProps) {
  return (
    <div
      className="relative h-[200px] w-[170px] rounded-lg p-4 sm:h-[250px] sm:w-[220px]"
      style={{
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
      }}
    >
      <Link href={linkdeinUrl} className="absolute right-4 top-4">
        <Image
          src="/assets/icons/linkdein-dark.svg"
          width={20}
          height={20}
          alt="linkdein"
        />
      </Link>
      <div className="flex size-full flex-col items-center justify-center gap-1.5">
        <Image src={profilePic} alt={name} width={103} height={103} />
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-semibold text-white sm:text-xl">
            {name}
          </h4>
          <p className="text-sm font-light text-[#C6C6C6] sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

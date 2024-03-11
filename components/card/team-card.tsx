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
      className="relative h-[250px] w-[220px] rounded-lg p-4"
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
      <div className="flex size-full flex-col items-center justify-center">
        <Image src={profilePic} alt={name} width={103} height={103} />
        <h4 className="text-xl font-semibold text-white">{name}</h4>
        <p className="text-base font-light text-[#C6C6C6]">{description}</p>
      </div>
    </div>
  );
}

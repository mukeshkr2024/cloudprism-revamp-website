import { footerLinks, socialLinks, usefullLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-[95rem] w-full mx-auto">
      <div className="flex flex-col max-w-7xl gap-y-10 lg:mx-auto  text-white mx-2 sm:mx-4 md:mx-6 py-6">
        <div className="flex w-full">
          <div className="flex-1 flex gap-y-1 md:gap-y-2 flex-col">
            <div className="md:flex items-center">
              <Image
                src="/assets/icons/company-logo.svg"
                width={80}
                height={90}
                alt="Company Logo"
              />
              <span className="text-xs sm:text-base">
                Cloudprism <br /> Solutions
              </span>
            </div>
            <div className="flex gap-x-2">
              {socialLinks.map((item) => (
                <Link href={item.href}>
                  <Image
                    src={item.icon}
                    alt={item.title || "Social icons"}
                    height={25}
                    width={25}
                    className="size-5 md:size-6"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 gap-y-1.5 flex flex-col">
            {footerLinks.map((item) => (
              <Link href={item.route} key={item.route}>
                <p className="text-sm font-normal sm:text-base">{item.label}</p>
              </Link>
            ))}
          </div>

          <div className="flex-1 flex flex-col gap-y-1.5">
            {usefullLinks.map((item) => (
              <Link href={item.route} key={item.route}>
                <p className="text-sm sm:text-base">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-full text-sm font-normal sm:text-base">
          <div className="flex-1">
            <p className="max-w-xs">
              Shivpuri Rd, South Shivpuri, Shivpuri, Rajbansi Nagar, Patna,
              Bihar
            </p>
            800029
          </div>

          <div className="flex-1">
            <p className="max-w-xs">
              Office no: 917, <br className="sm:hidden" />
              Gera Imperium Alpha, Rajaram Patil Nagar, Vitthal Nagar, Kharadi,
              Pune, Maharashtra 411014
            </p>
          </div>

          <div className="flex-1">
            <p className="max-w-xs">
              701 Tillery St, Austin, TX 78702, United States
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col mb-2 sm:mb-4">
          <div className="border border-[#2D2D2D]" />
          <div className="flex flex-wrap gap-x-4  md:gap-x-6 text-[#636363] gap-y-2 mt-2 sm:mt-3">
            <span>copyright@cloudprism</span>
            <Link href="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/term-and-conditions">
              <p>Terms And Condition</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

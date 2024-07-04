import { footerLinks, socialLinks, usefullLinks } from "@/constants";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[95rem]">
      <div className="mx-2 flex max-w-6xl flex-col gap-y-10  py-6 text-white sm:mx-4 md:mx-6 lg:mx-auto">
        {" "}
        <div className="flex w-full ">
          <div className="flex flex-1 flex-col gap-y-1  md:gap-y-2">
            <div className="items-center md:flex">
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
            <div className="flex gap-x-2 ">
              {socialLinks.map((item) => (
                <Link href={item.href} key={item.href}>
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

          <div className="flex flex-1 flex-col gap-y-1.5 ">
            {footerLinks.map((item) => (
              <Link href={item.route} key={item.route}>
                <p className="text-sm font-normal sm:text-base">{item.label}</p>
              </Link>
            ))}
          </div>

          <div className="flex flex-1 flex-col gap-y-1.5 ">
            {usefullLinks.map((item) => (
              <Link href={item.route} key={item.route}>
                <p className="text-sm sm:text-base">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-start  gap-y-6 text-start text-sm font-normal sm:text-base md:flex-row md:items-start md:text-start">
          <div className="md:flex-1">
            <p className="max-w-xs">
              Shivpuri Rd, South Shivpuri, Shivpuri, Rajbansi Nagar, Patna,
              Bihar 800029
            </p>
            <div className="flex items-center gap-2">
              <Phone className="size-4" /> <p> +91 83295 53438</p>
            </div>
          </div>
          <div className="md:flex-1">
            <p className="max-w-xs">
              Office no: 917, <br className="sm:hidden" />
              Gera Imperium Alpha, Rajaram Patil Nagar, Vitthal Nagar, Kharadi,
              Pune, Maharashtra 411014
            </p>
            <div className="flex items-center gap-2">
              <Phone className="size-4" /> <p> +91 7004535083</p>
            </div>
          </div>
          <div className="md:flex-1">
            <p className="max-w-xs">
              701 Tillery St, Austin, TX 78702, United States
            </p>
            <div className="flex items-center gap-2">
              <Phone className="size-4" /> <p>+1 3015639221</p>
            </div>
          </div>
        </div>
        <div className="mb-2 flex w-full flex-col pl-2 sm:mb-4">
          <div className="border border-[#2D2D2D]" />
          <div className="mt-2 flex flex-wrap  gap-x-4 gap-y-2 text-[#636363] sm:mt-3 md:gap-x-6">
            <span>copyright@cloudprism</span>
            <Link href="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/terms-and-conditions">
              <p>Terms And Condition</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

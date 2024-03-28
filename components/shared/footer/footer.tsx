import { footerLinks, socialLinks, usefullLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// TODO: allignment of location

export default function Footer() {
  return (
    <footer className=" mx-auto max-w-7xl lg:mt-12 ">
      <div className="flex w-full flex-col gap-y-12 p-4 xl:pl-16">
        <div className=" flex max-w-5xl justify-between">
          <div className=" flex flex-col ">
            <div className="flex flex-col gap-y-4">
              <Link href="/" className="sm:flex ">
                <Image
                  src="/assets/icons/company-logo.svg"
                  alt="Company-logo"
                  width={80}
                  height={80}
                />
                <span className="gap-y-0 text-xs text-white sm:text-base">
                  Cloudprism <br className="" /> Solutions
                </span>
              </Link>

              <div className="flex gap-1.5">
                {socialLinks.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <Image
                      src={item.icon}
                      alt={item.title ? item.title : "Social icons"}
                      height={25}
                      width={25}
                      className="size-5 md:size-6"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <div className="flex flex-col gap-y-1.5">
              {footerLinks.map((item) => (
                <Link key={item.route} href={item.route}>
                  <p className="text-sm font-normal text-white sm:text-base">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col  ">
            <div className="flex flex-col gap-y-1.5">
              {usefullLinks.map((item) => (
                <Link key={item.route} href={item.route}>
                  <p className="text-sm text-white sm:text-base">
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-y-4 p-2 md:flex-row">
          <div className="  ">
            <p className="text-sm font-normal text-white sm:text-base">
              Office no: 917, <br /> Gera Imperium Alpha,
              <br /> Rajaram Patil Nagar,
              <br />
              Vitthal Nagar, Kharadi,
              <br /> Pune, Maharashtra 411014
            </p>
          </div>

          <div className=" ">
            <p className="text-sm font-normal text-white sm:text-base">
              Shivpuri Rd,
              <br /> South Shivpuri, Shivpuri,
              <br /> Rajbansi Nagar, Patna, <br />
              Bihar 800029
            </p>
          </div>

          <div className="">
            <p className="text-sm font-normal text-white sm:text-base">
              701 Tillery St,
              <br /> Austin, TX 78702,
              <br /> United States
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pb-24 xl:mt-16">
        <div className="border border-[#2D2D2D]" />
        <div className="flex flex-wrap gap-x-16 gap-y-4 px-4 pt-1 sm:px-6 md:px-0 xl:pl-16">
          <span className="text-[#636363]">copyright@cloudprism</span>
          <Link href="/privacy-policy">
            <p className="text-[#636363]">Privacy Policy</p>
          </Link>
          <Link href="/terms-and-conditions">
            <p className="text-[#636363]">Terms And Condition</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

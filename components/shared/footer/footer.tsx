import { footerLinks, socialLinks, usefullLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" mx-auto mt-12 max-w-7xl ">
      <div className="flex w-full flex-col gap-y-12 pl-16">
        <div className=" flex max-w-5xl justify-between">
          <div className=" flex flex-col justify-between">
            <div className="flex flex-col gap-y-4">
              <Link href="/" className="flex">
                <Image
                  src="/assets/icons/company-logo.svg"
                  alt="Company-logo"
                  width={80}
                  height={80}
                />
                <span className="text-white">
                  Cloudprism <br /> Solutions
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
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <p className="font-normal text-white">
                Location <br /> Hadapsar Highway Dreams Aakruti <br /> Pune,
                Maharashtra 411028, IN
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-1.5">
              {footerLinks.map((item) => (
                <Link key={item.route} href={item.route}>
                  <p className="font-normal text-white">{item.label}</p>
                </Link>
              ))}
            </div>
            <div className="mt-16">
              <p className="font-normal text-white">
                Location <br /> Hadapsar Highway Dreams Aakruti <br /> Pune,
                Maharashtra 411028, IN
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-1.5">
              {usefullLinks.map((item) => (
                <Link key={item.route} href={item.route}>
                  <p className="text-white">{item.label}</p>
                </Link>
              ))}
            </div>
            <div className="mt-16">
              <p className="font-normal text-white">
                Location <br /> Hadapsar Highway Dreams Aakruti <br /> Pune,
                Maharashtra 411028, IN
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pb-24">
        <div className="border border-[#2D2D2D]" />
        <div className="flex gap-16 pl-16 pt-1">
          <span className="text-[#636363]">copyright@cloudprism</span>
          <Link href="/privacy">
            <p className="text-[#636363]">Privacy Policy</p>
          </Link>
          <Link href="/privacy">
            <p className="text-[#636363]">Terms And Condition</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

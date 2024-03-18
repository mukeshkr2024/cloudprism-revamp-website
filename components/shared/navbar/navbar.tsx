import { navbarLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import NavItem from "./nav-item";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import CustomButton from "../custom-button";

export default function Navbar() {
  return (
    <nav className="fixed top-3 z-50 w-full">
      <div
        className="mx-auto flex max-w-sm items-center justify-between rounded-lg border px-4 py-2 sm:max-w-2xl sm:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl "
        style={{
          background:
            " linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
          border: "2px solid",
          borderImage:
            "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 2",
          backdropFilter: "blur(60px)",
        }}
      >
        <Link href="/" className="flex-center">
          <Image
            src="/assets/icons/company-logo.svg"
            alt="Cloudprism"
            width={90}
            height={90}
          />
          <div className="flex">
            <p className="text-sm text-[#FFFFFF]">
              CloudPrism <br /> Solutions
            </p>
          </div>
        </Link>

        <div className="hidden gap-4 md:flex ">
          {navbarLinks.map((item) => (
            <NavItem
              key={item.route}
              href={item.route}
              label={item.label}
              subItems={item?.subItems}
            />
          ))}
        </div>

        <MobileNav />

        <CustomButton className="hidden rounded-3xl px-5 py-2 md:block">
          <Link href="/conact-us">
            <p className="text-base font-bold">Contact Us</p>
          </Link>
        </CustomButton>
      </div>
    </nav>
  );
}

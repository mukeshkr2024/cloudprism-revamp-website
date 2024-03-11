import { navbarLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import NavItem from "./nav-item";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

// TODO : add border gradient

export default function Navbar() {
  return (
    <nav className="fixed top-3 z-50 w-full">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-12 py-2 "
        style={{
          background:
            " linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
          border: "1px solid",
          borderImageSource:
            " linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%);",
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
            <NavItem key={item.route} href={item.route} label={item.label} />
          ))}
        </div>

        <MobileNav />

        <button
          className="background_button hidden rounded-3xl px-5 py-2 md:block"
          style={{
            boxShadow:
              "0px 1px 2px 0px #3BE88E61, 0px 4px 4px 0px #3BE88E54, 0px 8px 5px 0px #3BE88E30, 0px 14px 6px 0px #3BE88E0F, 0px 23px 6px 0px #3BE88E03",
          }}
        >
          <Link href="/contact">
            <p className="text-base font-bold"> Contact Us</p>
          </Link>
        </button>
      </div>
    </nav>
  );
}

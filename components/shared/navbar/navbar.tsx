import { navbarLinks } from "@/constants";
import Image from "next/image";
import React from "react";
import { NavItem } from "./nav-item";
import CustomButton from "../custom-button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav
      className="fixed top-2 hidden w-full border md:block"
      style={{
        border: "1px solid",
        background:
          "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
        borderImageSource:
          "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%)",
      }}
    >
      <div className="flex w-full items-center justify-between px-6 py-2.5">
        <Link href="/" className="flex">
          <Image
            src={"/assets/icons/company-logo.svg"}
            alt="Company Logo"
            width={90}
            height={90}
          />
          <div>
            <p className="text-white">CloudPrism</p>
            <p className="text-white">Solutions</p>
          </div>
        </Link>

        <div className="flex gap-5">
          {navbarLinks.map((item) => (
            <NavItem key={item.route} href={item.route} label={item.label} />
          ))}
        </div>

        <CustomButton text="Contact US" href="/contact" className="" />
      </div>
    </nav>
  );
};

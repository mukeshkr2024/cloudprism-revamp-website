"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavMenuList from "./nav-menu-list";
import Image from "next/image";

interface NavItemProps {
  href: string;
  label: string;
  subItems?: {
    route: string;
    label: string;
  }[];
}

export default function NavItem({ href, label, subItems }: NavItemProps) {
  const [hovered, setIsHovered] = useState(false);
  return (
    <>
      {subItems && subItems.length > 0 ? (
        <NavMenuList label={label} subItems={subItems} />
      ) : (
        <Link
          href={href}
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {hovered && (
            <div className="absolute flex w-full items-center justify-center">
              <Image
                src="/assets/gradients/project-gradient.svg"
                width={65}
                height={40}
                alt="Svg"
                className="opacity-20"
              />
            </div>
          )}
          <p className="p-1.5 text-[15px] text-[#EBEBEB] transition-transform duration-300 hover:scale-110">
            {label}
          </p>{" "}
        </Link>
      )}
    </>
  );
}

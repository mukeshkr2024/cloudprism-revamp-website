import Link from "next/link";
import React from "react";
import NavMenuList from "./nav-menu-list";

interface NavItemProps {
  href: string;
  label: string;
  subItems?: {
    route: string;
    label: string;
  }[];
}

export default function NavItem({ href, label, subItems }: NavItemProps) {
  return (
    <>
      {subItems && subItems.length > 0 ? (
        <NavMenuList label={label} subItems={subItems} />
      ) : (
        <Link href={href} className="flex items-center  ">
          <p className="p-1.5 text-[15px] text-[#EBEBEB]">{label}</p>
        </Link>
      )}
    </>
  );
}

import Link from "next/link";
import React from "react";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <Link href={href} className="">
      <p className="text-[15px] text-[#EBEBEB]">{label}</p>
    </Link>
  );
}

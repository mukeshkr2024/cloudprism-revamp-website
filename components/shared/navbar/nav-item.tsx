import Link from "next/link";
import React from "react";

interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <Link href={href} className="text-white">
      {label}
    </Link>
  );
};

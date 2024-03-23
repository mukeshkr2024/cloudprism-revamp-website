"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  label: string;
  subItems: {
    route: string;
    label: string;
  }[];
}

export default function NavMenuList({ label, subItems }: Props) {
  const [hovered, setIHovered] = useState(false);

  return (
    <NavigationMenu className="  text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div
              className="flex w-full items-center justify-center"
              onMouseEnter={() => setIHovered(true)}
              onMouseLeave={() => setIHovered(false)}
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
              <p className="text-[15px] text-[#EBEBEB] transition-transform duration-300 hover:scale-110">
                {label}
              </p>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-none">
            <ul
              className="flex flex-col gap-y-2.5 text-nowrap p-4"
              style={{
                background:
                  "linear-gradient(149.64deg, rgba(25, 25, 25, 0.9) 21.24%, rgba(14, 14, 14, 0.9) 105.43%)",
                border: "2px solid",
                borderImage:
                  "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 2",
                backdropFilter: "blur(12px)", // Increased blur effect
              }}
            >
              {subItems.map((item) => (
                <li
                  key={item.label}
                  className="cursor-pointer text-sm duration-300 hover:scale-105 hover:transition-transform "
                >
                  <Link href={item.route}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

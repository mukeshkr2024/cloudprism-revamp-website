"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface Props {
  label: string;
  subItems: {
    route: string;
    label: string;
  }[];
}

export default function NavMenuList({ label, subItems }: Props) {
  return (
    <NavigationMenu className="  text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className="text-[15px] text-[#EBEBEB] transition-transform duration-300 hover:scale-110">
              {label}
            </p>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="border-none">
            <ul
              className="flex min-w-[120px] flex-col gap-y-2.5 p-4"
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
                  className="cursor-pointer text-sm duration-300 hover:scale-110 hover:transition-transform "
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

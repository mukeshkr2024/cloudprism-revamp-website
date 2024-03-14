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
    <NavigationMenu className=" text-white">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <p className="text-[15px] text-[#EBEBEB] ">{label}</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex min-w-[120px] flex-col gap-y-2.5 p-4">
              {subItems.map((item) => (
                <li
                  key={item.label}
                  className="cursor-pointer text-sm hover:underline"
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

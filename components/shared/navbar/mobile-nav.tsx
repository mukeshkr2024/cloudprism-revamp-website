import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer md:hidden">
        <Image
          src="/assets/icons/hamberg.svg"
          alt="Menu"
          height={30}
          width={30}
        />
      </SheetTrigger>
      <SheetContent
        className="border-slate-400"
        style={{
          background:
            "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)",
          border: "2px solid",
          borderImage:
            "linear-gradient(145.67deg, rgba(46, 46, 46, 0.79) -128.7%, rgba(255, 255, 255, 0) 59.5%) 2",
          backdropFilter: "blur(12px)",
        }}
      >
        <SheetHeader className="flex w-full items-end justify-end">
          <SheetClose asChild>
            <X className="cursor-pointer text-white hover:border" />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col items-start justify-start">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/icons/company-logo.svg"
              alt="Cloudprism"
              width={90}
              height={90}
            />
            <div className=" flex flex-col">
              <p className="text-sm text-white">CloudPrism</p>
              <p className="text-sm text-white">Solutions</p>
            </div>
          </Link>
          <div className="mt-12 flex flex-col ">
            {navbarLinks.map((item) => (
              <div key={item.route} className="mb-3">
                {item.subItems && item.subItems.length > 0 ? (
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item.route} className="text-white">
                      <AccordionTrigger className="py-1.5">
                        <p className="p-1.5 text-lg font-medium text-[#EBEBEB]">
                          {item.label}
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="ml-5 w-full">
                        <ul className="flex flex-col gap-3">
                          {item.subItems.map((menuItem) => (
                            <li
                              key={menuItem.label}
                              className="text-base font-normal"
                            >
                              <Link href={menuItem.route}>
                                {menuItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link href={item?.route}>
                    <p className="p-1.5 text-lg font-medium text-[#EBEBEB]">
                      {item?.label}
                    </p>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <button className="background_button mt-4 rounded-3xl px-3.5 py-2">
            <Link href="/contact">
              <p className="text-base font-bold text-black">Contact Us</p>
            </Link>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

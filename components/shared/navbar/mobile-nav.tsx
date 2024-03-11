import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import NavItem from "./nav-item";
import Link from "next/link";
import { X } from "lucide-react";

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
            "linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%);",
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
          <div className="mt-12 flex flex-col gap-4">
            {navbarLinks.map((item) => (
              <NavItem key={item.route} href={item.route} label={item.label} />
            ))}
          </div>
          <button className="background_button mt-4 rounded-3xl px-3 py-1.5">
            <Link href="/contact">
              <p className="text-base font-bold text-black">Contact Us</p>
            </Link>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

import React from "react";
import CustomButton from "./custom-button";
import Link from "next/link";

export default function ConnectToUs() {
  return (
    <section
      className="mx-auto h-[500px] w-full max-w-[95rem]   bg-cover bg-center bg-no-repeat md:h-[650px]  "
      style={{
        backgroundImage: "url('/assets/images/connect-to-us.png')",
      }}
    >
      <div className="flex flex-col items-start justify-start gap-y-5 px-6 pt-20 md:gap-y-6 md:pt-24 xl:px-24">
        <h4 className="h2_semibold">Connect with us</h4>
        <p className="mb-2 text-base font-light text-[#A4A4A4] sm:text-lg md:text-xl lg:text-2xl">
          Our experienced support team will respond to your message within 24
          hours.
        </p>

        <CustomButton className="rounded-3xl px-5 py-1.5">
          <Link href="/contact-us">
            <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Let&apos;s grow together
            </p>
          </Link>
        </CustomButton>
      </div>
    </section>
  );
}

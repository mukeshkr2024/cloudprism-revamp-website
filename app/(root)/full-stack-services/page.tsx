import FullStackServices from "@/components/services/full-stack/full-stack-services";
import CustomButton from "@/components/shared/custom-button";
import Link from "next/link";
import React from "react";

function FullStackPage() {
  return (
    <div className="w-full">
      <section
        className="flex h-screen w-full flex-col items-center justify-center "
        style={{
          backgroundImage: "url('/assets/images/about-us-bg.svg')",
        }}
      >
        <div className="flex max-w-7xl flex-col items-center justify-center gap-y-6">
          <h1 className="h1_bold xl:!text-[90px]">
            Simplify Your Operations, Breathe Easier with Salesforce.
          </h1>

          <CustomButton className="rounded-3xl px-5 py-1.5">
            <Link href="/contact-us">
              <p className="text-sm font-semibold text-black  sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Let&apos;s grow together
              </p>
            </Link>
          </CustomButton>
        </div>
      </section>

      {/* Services */}
      <FullStackServices />
    </div>
  );
}

export default FullStackPage;

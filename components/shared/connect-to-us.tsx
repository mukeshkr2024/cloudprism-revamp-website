import React from "react";
import CustomButton from "./custom-button";

export default function ConnectToUs() {
  return (
    <section
      className="h-[600px] w-full  bg-cover bg-center bg-no-repeat md:h-[650px]  "
      style={{
        backgroundImage: "url('/assets/images/connect-to-us.svg')",
      }}
    >
      <div className="flex flex-col items-start justify-start gap-y-5 px-6 pt-20 md:gap-y-6 md:pt-24 xl:px-24">
        <h2 className="h2_semibold">Connect with us</h2>
        <p className="mb-2 text-base font-light text-[#A4A4A4] sm:text-lg md:text-xl lg:text-2xl">
          Our experienced support team will respond to your message within 24
          hours.
        </p>
        <CustomButton text="Let's grow together" href="/" />
      </div>
    </section>
  );
}

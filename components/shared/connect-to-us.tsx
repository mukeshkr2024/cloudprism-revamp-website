import React from "react";
import CustomButton from "./custom-button";

export default function ConnectToUs() {
  return (
    <section
      className=" mt-12 h-[650px] w-full  bg-white bg-cover bg-no-repeat "
      style={{
        backgroundImage: "url('/assets/images/connect-to-us.svg')",
      }}
    >
      <div className="flex w-full flex-col items-start gap-y-8 px-24  ">
        <h2 className="h2_semibold mt-32">Connect with us</h2>
        <p className="mb-2 text-2xl font-light text-[#A4A4A4]">
          Our experienced support team will respond to your message within 24
          hours.
        </p>
        <CustomButton
          text="Let's grow together
        "
          href="/"
        />
      </div>
    </section>
  );
}

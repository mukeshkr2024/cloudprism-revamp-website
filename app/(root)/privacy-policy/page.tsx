import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import React from "react";

const PrivacyPage = () => {
  return (
    <ScrollBarProgress>
      <div className="w-full ">
        <div className="text-white  py-28 sm:py-32 sm:max-w-sm md:max-w-2xl lg:max-w-5xl xl:max-w-7xl max-w-xs mx-auto flex flex-col gap-y-4">
          <div>
            <h1 className="mb-6 text-3xl font-bold">Terms and Conditions</h1>
            <p className="text-base font-light">
              Cloudprism respects the intellectual property rights of others and
              expects our users and employees to do the same. Our copyright
              policy is designed to ensure that we are in compliance with all
              applicable copyright laws and regulations, while also protecting
              the original content created by our company.
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold">
              Use of Copyrighted Material
            </h2>
            <p className="text-base font-light">
              We do not allow the use of copyrighted material on our website or
              in any of our materials without proper permission or licensing. If
              we become aware of any infringing content, we will take immediate
              action to remove it from our site or materials.
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold">
              Protection of Original Content
            </h2>
            <p className="text-base font-light">
              All original content created by{" "}
              <span className="text-blue-400">
                SFCPRISMS Solutions Pvt Ltd{" "}
              </span>
              , including text, images, graphics, videos, and other media, is
              protected by copyright. We take all necessary measures to protect
              our intellectual property rights and will take legal action
              against any individual or entity that infringes upon our
              copyrights.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold">Permissions</h2>
            <p className="text-base font-light">
              If you would like to use any of our copyrighted material, please
              contact us to request permission. We may require a licensing fee
              or other compensation depending on the nature of the request.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold">
              Reporting Copyright Infringement
            </h2>
            <p className="text-base font-light">
              If you believe that your copyright has been infringed upon by any
              of our materials, please contact us immediately. We will take
              appropriate action to investigate the claim and take down any
              infringing content if necessary.
            </p>
            <p className="text-base font-light">
              By using our website or materials, you agree to comply with our
              copyright policy. We reserve the right to update or modify this
              policy at any time without prior notice.
            </p>
          </div>
        </div>
      </div>
    </ScrollBarProgress>
  );
};

export default PrivacyPage;
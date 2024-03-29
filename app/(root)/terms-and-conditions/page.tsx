import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import Link from "next/link";
import React from "react";

const TermsPage = () => {
  return (
    <ScrollBarProgress>
      <div className="w-full ">
        <div className="text-white  py-28 sm:py-32 sm:max-w-sm md:max-w-2xl lg:max-w-5xl xl:max-w-7xl max-w-xs mx-auto flex flex-col gap-y-4">
          <div>
            <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
            <p className="text-base md:text-lg font-light">
              Terms of Service The website{" "}
              <Link
                href="https://cloudprism.in/"
                className="text-white font-semibold text-lg"
              >
                www.cloudprism.in
              </Link>{" "}
              is the property of Cloudprism Solutions Labs Private Limited, and
              it intends to provide information that may be of interest to
              users/visitors. The contents of the site, including texts, images,
              and videos, are the copyrighted material of Cloudprism Solutions
              Labs Private Limited unless mentioned otherwise. All rights are
              reserved. The trademarks referred to are the property of their
              respective owners. The user shall be deemed to have agreed to and
              accepted the following terms and conditions upon the user's use of
              the website{" "}
              <Link
                href="https://cloudprism.in/"
                className="text-white font-semibold text-lg"
              >
                www.cloudprism.in
              </Link>{" "}
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-semibold">Terms and Conditions </h2>

            <ul className="md:text-lg text-base font-light list-disc  pl-8 md:pl-12 flex flex-col gap-y-3">
              <li className="mt-2">
                The term "Cloudprism" shall mean Cloudprism Solutions.
              </li>
              <li>
                No content/material from this site may be copied, modified,
                reproduced, republished, uploaded, transmitted, posted or
                distributed in any form without any prior permission from
                Cloudprism Solutions. All rights not expressly granted herein
                are reserved.
              </li>
              <li>
                The name of Cloudprism Solutions and logo are the trademarks
                that belong to Cloudprism Solutions. These trademarks cannot be
                used in any manner without the prior written consent from
                Cloudprism Solutions.
              </li>
              <li>
                Unauthorized use of the content/materials appearing on the site
                may violate copyright and other applicable laws. Such use could
                result in penalties.
              </li>
              <li>
                Cloudprism Solutions may terminate a user's access to the site
                at any time for any reason.
              </li>
              <li>
                Cloudprism Solutions may change or discontinue any aspect of the
                website at any time, including the content/materials and
                features.
              </li>
              <li>
                Cloudprism Solutions shall not be liable for damages of any
                kind, including direct, consequential or incidental damages
                (including, but not limited to, damages for lost profits,
                interruption of business, and loss of information) emerging out
                of the use of or inability to use the website/information
                provided on the site, or for any reason whatsoever.
              </li>
              <li>
                Cloudprism Solutions shall have no responsibility for any damage
                to the user's device or any loss of data that may result from
                downloading content or any materials on the website.
              </li>
              <li>
                Cloudprism Solutions does not warrant that any of the content on
                the site is accurate, complete or current, thought Cloudprism
                Solutions obtains information from reliable sources. Cloudprism
                Solutions may make changes to the website or these terms without
                any notice. By using this website, you agree to be bound by the
                then current version of these terms.
              </li>
              <li>
                The site provides links to third party websites/platforms and
                the access to content, materials, product, and services,
                including users, affiliates and sponsors of the website.
                Cloudprism Solutions is not responsible for the availability of,
                or content provided on the third-party website. Before using
                such sites, Cloudprism Solutions encourages users to read their
                policies. The user shall bear all the risks associated with the
                use of such content. Cloudprism Solutions is not responsible for
                any loss or damages the user may incur.
              </li>
              <li>
                Cloudprism Solutions will always do its best to deliver projects
                within the estimated time, there may, at times, be a need to
                extend or adjust the time in case of any unavoidable or
                non-forecasted situations such as deployment issues, 3rd party
                support, bottle-necks in development, communication delays and
                the like.
              </li>
              <li>
                The client retains the copyright to data, files, content, and
                graphics (including logos) provided by the Client and grants
                Cloudprism Solutions the right to use and publish such material.
                The client must obtain the right to use any data and information
                that are copyrighted by a third party. The client is also
                responsible for granting Cloudprism Solutions the permission and
                rights for the use of the same and agrees to indemnify and hold
                Cloudprism Solutions harmless from any claims arising from the
                client's negligence or inability to obtain proper copyright
                permissions. A contract between Cloudprism Solutions and the
                client shall be regarded as a guarantee that all such
                permissions and rights have been obtained by the client.
                Evidence for the same may be requested.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollBarProgress>
  );
};

export default TermsPage;

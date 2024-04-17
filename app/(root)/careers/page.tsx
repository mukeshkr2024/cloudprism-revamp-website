import Careers from "@/components/careers";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join CloudPrism Solutions: Explore Careers & Apply Now.",
  description:
    "Discover exciting career opportunities at CloudPrism Solutions. Find your ideal job and take the next step in your professional journey.",
  alternates: {
    canonical: "https://cloudprism.in/careers",
  },
  openGraph: {
    title: "Join CloudPrism Solutions: Explore Careers & Apply Now.",
    description:
      "Discover exciting career opportunities at CloudPrism Solutions. Find your ideal job and take the next step in your professional journey.",
    url: "https://cloudprism.in/careers",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title: "Join CloudPrism Solutions: Explore Careers & Apply Now.",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      "Discover exciting career opportunities at CloudPrism Solutions. Find your ideal job and take the next step in your professional journey.",
  },
};

function CarrierPage() {
  return (
    <ScrollBarProgress>
      <Careers />
    </ScrollBarProgress>
  );
}

export default CarrierPage;

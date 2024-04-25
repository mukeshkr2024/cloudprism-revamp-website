import { ContactUsForm } from "@/components/forms/contact-us";
import ScrollBarProgress from "@/components/shared/scroll-bar-progress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Salesforce & Software Solutions:Contact CloudPrism.",
  description:
    "Contact us for top-tier Salesforce solutions & software development expertise today: CloudPrism Solutions",
  alternates: {
    canonical: "https://cloudprism.in/contact-us",
  },
  openGraph: {
    title: "For Salesforce & Software Solutions:Contact CloudPrism.",
    description:
      "Contact us for top-tier Salesforce solutions & software development expertise today: CloudPrism Solutions",
    url: `https://cloudprism.in/contact-us`,
    siteName: "Cloudprism",
    locale: "en_US",
    type: "website",
    images: "https://cloudprism.in/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Salesforce & Software Solutions:Contact CloudPrism.",
    description:
      "Contact us for top-tier Salesforce solutions & software development expertise today: CloudPrism Solutions",
  },
};

function ContactUsPage() {
  return (
    <ScrollBarProgress>
      <ContactUsForm />
    </ScrollBarProgress>
  );
}

export default ContactUsPage;

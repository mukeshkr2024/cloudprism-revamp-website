import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/events`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/salesforce-consultation`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/software-development`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/case-studies`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/careers`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/contact-us`,
      lastModified: new Date(),
    },
  ];
}

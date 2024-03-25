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
  ];
}

import { allBlogs, allNews } from "@/.contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries = allBlogs.map((blog) => ({
    url: `${process.env.BASE_URL}${blog.url}`,
    lastModified: new Date(),
  }));

  const newsEntries = allNews.map((news) => ({
    url: `${process.env.BASE_URL}${news.url}`,
    lastModified: new Date(),
  }));
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
    {
      url: `${process.env.BASE_URL}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/event/april-salesforce-meet`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/event/india-dreamin-2023`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/event/techsparks-2024`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/event/mc-square-2023`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/event/wit-summit-jaipur`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/event/mule-dreamin-2023`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/event/youth-dreamin-bihar-2024`,
      lastModified: new Date(),
    },
    ...blogEntries,
    ...newsEntries,
  ];
}

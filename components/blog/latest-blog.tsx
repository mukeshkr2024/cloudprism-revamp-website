import React from "react";
import { LatestBlogItem } from "../card/latest-blog-item";
// import { readBlogs } from "@/constants/blogs-data";

export default function LatestBlog() {
  return (
    <section className="mx-auto max-w-7xl ">
      <h2 className="h2_semibold text-center">Latest Blogs</h2>
      <div className="my-16 flex gap-6">
        <LatestBlogItem
          bgUrl="/assets/images/blog-1-picture-1.svg
"
          title="How talent leaders can help capitalize on generative AI"
          intro="Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them."
          slug="/"
        />
        <LatestBlogItem
          bgUrl="/assets/images/blog-1-picture-1.svg
"
          title="How talent leaders can help capitalize on generative AI"
          intro="Sustainability is top of mind for today’s travelers. And yet, travel companies face several “say-do” gaps. Here are six ways to close them."
          slug="/"
        />
      </div>
    </section>
  );
}

import React from "react";
import { Blog, allBlogs } from "@/.contentlayer/generated";
import BlogCard from "../card/blog-card";
import { sortBlogs } from "@/utils/cn";

const sortedBlogs: Blog[] = sortBlogs(allBlogs);

const news = sortedBlogs.slice(0, 8);

export default function Spotlight() {
  return (
    <section className="mx-auto  flex  max-w-7xl flex-col gap-8">
      <h3 className="h1_bold !text-[#DDDDDD]">In the Spotlight</h3>

      <div className="mt-6 flex flex-wrap justify-center gap-8">
        {news &&
          news?.map((blog) => (
            <BlogCard
              key={blog.title}
              description={blog.description}
              image={blog.image!}
              readTime={blog.readingTime}
              title={blog.title}
              slug={blog.url}
            />
          ))}
      </div>
    </section>
  );
}

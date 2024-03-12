import LatestBlog from "@/components/blog/latest-blog";
import BlogCard from "@/components/card/blog-card";
import ConnectToUs from "@/components/shared/connect-to-us";
import { readBlogs } from "@/constants/blogs-data";
import React from "react";

export default function BlogPage() {
  return (
    <div className="w-full">
      <section
        className="flex h-screen  w-full flex-col justify-center "
        style={{
          backgroundImage: "url('/assets/images/case-studies-bg.svg')",
        }}
      >
        <div className="mb-10 flex flex-col gap-y-8  px-24">
          <p className="text-xl text-white">Blogs</p>
          <h2 className="h2_semibold max-w-lg leading-[65.66px]">
            CloudPrism Solutions Blogs{" "}
          </h2>
          <p className="max-w-2xl text-xl font-normal text-white">
            Discover exciting stories from our bloggers: From cloud, AI and data
            to the metaverse, this is the place where new ideas come alive.
          </p>
        </div>
      </section>{" "}
      {/* Latest Posts  */}
      <LatestBlog />
      {/* Read our blog  */}
      <section className="mx-auto  max-w-7xl ">
        <h2 className="h2_semibold text-center">Read Our Blogs</h2>
        <div className="mt-24 flex flex-wrap justify-center gap-6">
          {readBlogs.map((blog) => (
            <BlogCard
              key={blog.href}
              description={blog.description}
              href={blog.href}
              imgUrl={blog.imgUrl}
              readTime={blog.read_time}
              title={blog.title}
            />
          ))}
        </div>
      </section>
      {/* Connect to us  */}
      <ConnectToUs />
    </div>
  );
}

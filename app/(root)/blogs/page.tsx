import { latestBlogs } from "@/actions/blog.actions";
import LatestBlog from "@/components/blog/latest-blog";
import BlogCard from "@/components/card/blog-card";
import ConnectToUs from "@/components/shared/connect-to-us";
import { readBlogs } from "@/constants/blogs-data";
import React from "react";

const latestblogs = latestBlogs();

export default function BlogPage() {
  return (
    <div className="w-full">
      <section
        className="flex h-[80vh] w-full flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/case-studies-bg.svg')",
        }}
      >
        <div className=" flex flex-col gap-y-4 px-6 text-white lg:px-20">
          <p className="text-sm sm:text-base lg:text-xl ">Blogs</p>
          <h2 className="h2_semibold leading-[40px] sm:leading-[50px] lg:leading-[65px]">
            CloudPrism Solutions <br /> Blogs{" "}
          </h2>
          <p className="max-w-2xl text-sm sm:text-base md:text-xl">
            Discover exciting stories from our bloggers: From cloud, AI and data
            to the metaverse, this is the place where new ideas come alive.
          </p>
        </div>
      </section>

      {/* Latest Posts  */}
      <LatestBlog latestblogs={latestblogs} />
      {/* Read our blog  */}
      <section className="mx-auto  mt-4 max-w-7xl lg:mt-8 ">
        <h2 className="h2_semibold text-center">Read Our Blogs</h2>
        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:mt-20 lg:mt-24">
          {readBlogs.map((blog) => (
            <BlogCard
              key={blog.title}
              description={blog.description}
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

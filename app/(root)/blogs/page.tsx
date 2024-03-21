import { latestBlogs } from "@/actions/blog.actions";
import LatestBlog from "@/components/blog/latest-blog";
import BlogCard from "@/components/card/blog-card";
import BlogFormPopup from "@/components/forms/blog-form-dialog";
import ConnectToUs from "@/components/shared/connect-to-us";
import { readBlogs } from "@/constants/blogs-data";
import React from "react";

const latestblogs = latestBlogs();

export default function BlogPage() {
  return (
    <div className="w-full">
      <BlogFormPopup />
      <section
        className="flex h-[80vh] w-full flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/case-studies-bg.svg')",
        }}
      >
        <div className=" flex flex-col gap-y-4 px-6 text-white lg:px-20">
          <p className="text-sm sm:text-base lg:text-xl ">Blogs</p>
          <h2 className="h2_semibold leading-[40px] sm:leading-[50px] lg:leading-[65px]">
            Discover, Learn, Inspire
          </h2>
          <p className="max-w-2xl text-sm sm:text-base md:text-xl">
            Explore insightful articles, captivating stories, and expert tips on
            our blog page, your go-to destination for inspiration and knowledge.
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

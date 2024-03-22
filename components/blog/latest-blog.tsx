import React from "react";
import { LatestBlogItem } from "../card/latest-blog-item";
import { BlogData } from "@/constants/blogs-data";

interface Props {
  latestblogs: BlogData[];
}

export default function LatestBlog({ latestblogs }: Props) {
  return (
    <section className="mx-auto max-w-7xl ">
      <h2 className="h2_semibold text-center">Latest Blogs</h2>
      <div className="mx-2 my-16 flex flex-wrap justify-center gap-6 md:gap-4  lg:gap-6">
        {latestblogs &&
          latestblogs.length > 0 &&
          latestblogs.map((blog) => (
            <LatestBlogItem
              key={blog.title}
              bgUrl={blog.imgUrl}
              title={blog.title}
              intro={blog.intro}
            />
          ))}
      </div>
    </section>
  );
}

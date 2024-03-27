import React from "react";
import RecentBlogCard from "./card/recent-card";
import { Blog, allBlogs } from "@/.contentlayer/generated";
import { sortBlogs } from "@/utils/cn";

export default function EventRightSidebar() {
  const sortedBlogs: Blog[] = sortBlogs(allBlogs);

  const recentBlogs = sortedBlogs.slice(0, 9);
  return (
    <div className="mt-12 w-full  px-6 lg:w-[320px]">
      <div className="mt-10 flex w-full flex-col items-center justify-center   text-white">
        <h2 className="text-2xl font-medium">Recent blogs</h2>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4">
          {recentBlogs &&
            recentBlogs.map((blog) => (
              <RecentBlogCard
                image={blog.image!}
                slug={blog.url}
                title={blog.title}
                key={blog.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

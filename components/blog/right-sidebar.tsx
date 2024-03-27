import React from "react";
import RecentBlogCard from "../card/recent-card";
import { sortBlogs } from "@/utils/cn";
import { Blog, allBlogs } from "@/.contentlayer/generated";

interface RightSideBarProps {
  author: string;
  role: string;
}

export default function RightSideBar({ author, role }: RightSideBarProps) {
  const sortedBlogs: Blog[] = sortBlogs(allBlogs);

  const recentBlogs = sortedBlogs.slice(0, 9);

  return (
    <div className="mt-12 w-full  px-6 lg:w-[320px]">
      <div className="flex w-full flex-col gap-y-3  text-white  lg:gap-y-4">
        <p className="text-sm text-[#A4A4A4] sm:text-base">WRITTEN BY</p>
        <p className="text-sm font-semibold sm:text-base ">{author}</p>
        <p className="text-sm text-[#A4A4A4] sm:text-base">{role}</p>
      </div>

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

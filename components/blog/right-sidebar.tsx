import React from "react";
import RecentBlogCard from "../card/recent-card";

export default function RightSideBar() {
  return (
    <div className="w-[320px]  px-6">
      <div className="flex flex-col gap-y-4  text-white">
        <p className="text-[#A4A4A4]">WRITTEN BY</p>
        <p className="font-semibold ">SHALINE_SAYS</p>
        <p className="text-[#A4A4A4]">
          Managing Director – Health & Public Service, Social Services and
          Workforce & Talent Transformation
        </p>
      </div>

      <div className=" mt-10 text-white">
        <h2 className="text-2xl font-medium">Recent blogs</h2>
        <div className="mt-8 flex flex-col gap-y-4">
          {recentBlog.map((blog) => (
            <RecentBlogCard
              imgUrl={blog.imgUrl}
              slug={blog.slug}
              title={blog.title}
              key={blog.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const recentBlog = [
  {
    title: "How talent leaders can help capitalize on generative AI",
    slug: "/",
    imgUrl: "/assets/images/recent-blog-1.svg",
  },
  {
    title: "How talent leaders can help capitalize on generative AI",
    slug: "/",
    imgUrl: "/assets/images/recent-blog-1.svg",
  },
  {
    title: "How talent leaders can help capitalize on generative AI",
    slug: "/",
    imgUrl: "/assets/images/recent-blog-1.svg",
  },
  {
    title: "How talent leaders can help capitalize on generative AI",
    slug: "/",
    imgUrl: "/assets/images/recent-blog-1.svg",
  },
];

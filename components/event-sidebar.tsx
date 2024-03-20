import React from "react";
import RecentBlogCard from "./card/recent-card";

export default function EventRightSidebar() {
  return (
    <div className="mt-12 w-full  px-6 lg:w-[320px]">
      <div className="mt-10 flex w-full flex-col items-center justify-center   text-white">
        <h2 className="text-2xl font-medium">Recent blogs</h2>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4">
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

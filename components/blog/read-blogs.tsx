"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../card/blog-card";
import CustomButton from "../shared/custom-button";
import { Blog } from "@/.contentlayer/generated";

export default function ReadBlogs({ blogs }: { blogs: Blog[] }) {
  // const allBlogs = blogs.slice(0, 48);
  const allBlogs = blogs;

  const [displayedBlogs, setDisplayedBlogs] = useState<Blog[]>([]);
  const [loadCount, setLoadCount] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDisplayedBlogs(allBlogs.slice(0, loadCount));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadCount]);

  const loadMoreBlogs = () => {
    setLoading(true);
    const newLoadCount = loadCount + 8;
    const newBlogs = sortedBlogs.slice(0, newLoadCount);
    setTimeout(() => {
      setDisplayedBlogs(newBlogs);
      setLoadCount(newLoadCount);
      setLoading(false);
    }, 1000);
  };

  const sortedBlogs = allBlogs;
  return (
    <section className="mx-auto  mt-4 max-w-7xl lg:mt-8 ">
      <h3 className="h2_semibold text-center">Read Our Blogs</h3>
      <div className="mt-16 flex flex-wrap justify-center gap-6 sm:mt-20 lg:mt-24">
        {displayedBlogs &&
          displayedBlogs.map((blog: Blog) => (
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

      {sortedBlogs.length > displayedBlogs.length && (
        <div className="mt-10 flex w-full items-center justify-center">
          <CustomButton className="rounded-3xl px-4 py-2.5">
            <p
              className="text-center font-semibold text-black"
              onClick={loadMoreBlogs}
            >
              {loading ? "Loading.." : " Load More.."}
            </p>
          </CustomButton>
        </div>
      )}
    </section>
  );
}

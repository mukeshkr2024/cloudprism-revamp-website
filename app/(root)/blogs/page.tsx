import { Blog, allBlogs } from "@/.contentlayer/generated";
import LatestBlog from "@/components/blog/latest-blog";
import ReadBlogs from "@/components/blog/read-blogs";
import BlogFormPopup from "@/components/forms/blog-form-dialog";
import ConnectToUs from "@/components/shared/connect-to-us";
import { sortBlogs } from "@/utils/cn";
import { Metadata } from "next";

const sortedBlogs: Blog[] = sortBlogs(allBlogs);
const latestBlogs: Blog[] = sortedBlogs?.slice(0, 2);

export const metadata: Metadata = {
  title: " Cloud Prism Solutions: Salesforce Blogs & Software Development Blog",
  description:
    "Explore Cloud Prism Solutions' insightful Salesforce blogs and stay updated on software development trends. Dive into expertise.",
  alternates: {
    canonical: "https://cloudprism.in/blogs",
  },
  openGraph: {
    title:
      " Cloud Prism Solutions: Salesforce Blogs & Software Development Blog",
    description:
      "Explore Cloud Prism Solutions' insightful Salesforce blogs and stay updated on software development trends. Dive into expertise.",
    url: "https://cloudprism.in/blogs",
    siteName: "Cloudprism",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    title:
      " Cloud Prism Solutions: Salesforce Blogs & Software Development Blog",
    card: "summary_large_image",
    site: "@_CloudPrism_",
    description:
      "Explore Cloud Prism Solutions' insightful Salesforce blogs and stay updated on software development trends. Dive into expertise.",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-[95rem]">
      <BlogFormPopup />
      <section
        className="flex h-[80vh] w-full flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/blog-bg-png.png')",
        }}
      >
        <div className=" flex flex-col gap-y-4 px-6 text-white lg:px-20">
          <p className="text-sm sm:text-base lg:text-xl ">Blogs</p>
          <h2 className="h2_semibold leading-[40px] sm:leading-[50px] lg:leading-[65px]">
            Discover, Learn, Inspire
          </h2>
          <h1 className="max-w-2xl text-sm sm:text-base md:text-xl">
            Explore insightful articles, captivating stories, and expert tips on
            our blog page, your go-to destination for inspiration and knowledge.
          </h1>
        </div>
      </section>
      <LatestBlog latestblogs={latestBlogs} />
      <ReadBlogs blogs={sortedBlogs} />
      <ConnectToUs />
    </div>
  );
}

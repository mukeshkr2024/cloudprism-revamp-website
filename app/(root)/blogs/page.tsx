import { Blog, allBlogs } from "@/.contentlayer/generated";
import LatestBlog from "@/components/blog/latest-blog";
import ReadBlogs from "@/components/blog/read-blogs";
import BlogFormPopup from "@/components/forms/blog-form-dialog";
import ConnectToUs from "@/components/shared/connect-to-us";
import { sortBlogs } from "@/utils/cn";

const sortedBlogs: Blog[] = sortBlogs(allBlogs);
const latestBlogs: Blog[] = sortedBlogs?.slice(0, 2);

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-[95rem]">
      <BlogFormPopup />
      <section
        className="flex h-[80vh] w-full flex-col justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/blog-bg-svg.svg')",
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
      <LatestBlog latestblogs={latestBlogs} />
      <ReadBlogs blogs={sortedBlogs} />
      <ConnectToUs />
    </div>
  );
}

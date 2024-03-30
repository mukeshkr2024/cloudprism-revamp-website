import { allBlogs } from "@/.contentlayer/generated";
import RightSideBar from "@/components/blog/right-sidebar";
import { TracingBeam } from "@/components/blog/tracing-beam";
import BlogFormPopup from "@/components/forms/blog-form-dialog";
import RenderMdx from "@/components/render-mdx";
import ConnectToUs from "@/components/shared/connect-to-us";
import { format } from "date-fns";
import { redirect } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

function BlogDetailsPage({ params }: Params) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return redirect("/blogs");
  }

  const formattedPublishedDate = format(
    new Date(blog.publishedAt),
    "MMMM dd, yyyy"
  );

  return (
    <>
      <div className="mx-auto flex w-full max-w-[90rem] flex-col justify-center  pb-32 pt-24 lg:flex-row lg:justify-between">
        <TracingBeam className="px-6">
          <BlogFormPopup />
          <article className="text-white">
            <div className="flex flex-col gap-y-8 py-4">
              <span className="text-base font-normal ">BLOG</span>
              <h1 className="h2_semibold !font-semibold lg:leading-[55px]">
                {blog?.title}{" "}
              </h1>
              <div className="flex gap-x-24 text-base font-semibold">
                <p className="capitalize">{blog?.readingTime?.text}</p>
                <p>{formattedPublishedDate}</p>
              </div>
            </div>
            <div className="h-1 w-full   rounded-md bg-gradient-to-r from-yellow-400 via-green-300 to-green-400" />
            <RenderMdx blog={blog} />
          </article>
        </TracingBeam>
        <RightSideBar
          author={blog.author}
          role={
            "Managing Director – Health & Public Service, Social Services and Workforce & Talent Transformation"
          }
        />
      </div>
      <ConnectToUs />
    </>
  );
}

export default BlogDetailsPage;

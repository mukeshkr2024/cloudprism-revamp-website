import { eventBySlug } from "@/actions/blog.actions";
import RightSideBar from "@/components/blog/right-sidebar";
import { TracingBeam } from "@/components/blog/tracing-beam";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

interface Params {
  params: {
    slug: string;
  };
}

function BlogDetailsPage({ params }: Params) {
  const result = eventBySlug(params.slug);

  if (!result) {
    redirect("/blogs");
  }

  return (
    <div className="flex w-full flex-col justify-center  pb-32 pt-40 lg:flex-row lg:justify-between">
      <TracingBeam className="px-6">
        <div className=" text-white">
          <div className="flex flex-col gap-y-8 py-4">
            <p className="text-base font-normal ">BLOG</p>
            <h1 className="h2_semibold !font-semibold">{result?.title} </h1>
            <div className="flex gap-x-20 text-base font-semibold">
              <p>{result?.readTime}</p>
              <p>{result?.postDate}</p>
            </div>
          </div>
          <div
            className="h-1 w-full rounded-md"
            style={{
              background:
                "linear-gradient(90deg, #F1CA64 15.38%, #02FFB3 99.49%);",
            }}
          />
          {result?.summary && (
            <div className="flex flex-col gap-y-6 py-16">
              {result?.summary.map((item, index) => (
                <p key={index} className="blog_paragraph">
                  {item.content}
                </p>
              ))}
            </div>
          )}
          {result.sections.length > 0 &&
            result.sections.map((item, index) => (
              <div key={index} className="flex w-full flex-col gap-y-6">
                <h2 className="h2_semibold mb-6 !font-semibold">
                  {item.title}
                </h2>

                {item?.contentSections.length > 0 &&
                  item.contentSections.map((item, index) => (
                    <React.Fragment key={index}>
                      <p className="blog_paragraph">{item?.content}</p>

                      {item?.imgUrl && (
                        <div>
                          <Image
                            src={`${item?.imgUrl}`}
                            alt="Post description"
                            width={600}
                            height={400}
                            className="aspect-video"
                          />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
              </div>
            ))}
        </div>
      </TracingBeam>
      {/* Sidebar  */}
      <RightSideBar />
    </div>
  );
}

export default BlogDetailsPage;

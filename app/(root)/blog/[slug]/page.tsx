import RightSideBar from "@/components/blog/right-sidebar";
import { TracingBeam } from "@/components/blog/tracing-beam";
import Image from "next/image";
import React from "react";

function BlogDetailsPage() {
  return (
    <div className="flex w-full flex-col justify-center  pb-32 pt-40 lg:flex-row lg:justify-between">
      <TracingBeam className="px-6">
        <div className=" text-white">
          <div className="flex flex-col gap-y-8 py-4">
            <p className="text-base font-normal ">BLOG</p>
            <h1 className="h2_semibold !font-semibold">
              How talent leaders can help capitalize on generative AI
            </h1>
            <div className="flex gap-x-20 text-base font-semibold">
              <p>5-MINUTE READ</p>
              <p>15 FEBUARY</p>
            </div>
          </div>

          <div
            className="h-1 w-full rounded-md"
            style={{
              background:
                "linear-gradient(90deg, #F1CA64 15.38%, #02FFB3 99.49%);",
            }}
          />

          <div className="flex flex-col gap-y-6 py-16">
            <p className="blog_paragraph">
              Generative AI has been making headlines across the world as
              individuals and business leaders explore the possibilities created
              by this powerful new tool. Public services are no exception. The
              technology is poised to reinvent many of the ways public service
              organizations serve citizen needs and get work done.
            </p>
            <p className="blog_paragraph">
              One recent Accenture study estimated that as much as
              three-quarters (74%) of public service employees’ working hours
              are spent on tasks that involve the use of language to some extent
              – across both front-line and back-office work, as well as
              interactions across different channels (voice, email, digital
              apps, and so on). Generative AI creates numerous opportunities for
              automating, augmenting and optimizing these language-based tasks.
              This includes everything from generating automated case summaries
              for social workers to providing intelligent multi-language
              chatbots for public services to performing proactive threat
              analysis in areas like public safety
            </p>
          </div>

          <div className="flex w-full flex-col gap-y-6">
            <h2 className="h2_semibold mb-6 !font-semibold">
              A timely arrival
            </h2>
            <p className="blog_paragraph">
              Generative AI has been making headlines across the world as
              individuals and business leaders explore the possibilities created
              by this powerful new tool. Public services are no exception. The
              technology is poised to reinvent many of the ways public service
              organizations serve citizen needs and get work done.
            </p>
            <p className="blog_paragraph">
              One recent Accenture study estimated that as much as
              three-quarters (74%) of public service employees’ working hours
              are spent on tasks that involve the use of language to some extent
              – across both front-line and back-office work, as well as
              interactions across different channels (voice, email, digital
              apps, and so on). Generative AI creates numerous opportunities for
              automating, augmenting and optimizing these language-based tasks.
              This includes everything from generating automated case summaries
              for social workers to providing intelligent multi-language
              chatbots for public services to performing proactive threat
              analysis in areas like public safety.
            </p>
            <div className=" py-4">
              <Image
                src="/assets/images/blog-1-picture-1.svg"
                alt="Post description"
                width={600}
                height={400}
                className="aspect-video"
              />
            </div>
            <p className="blog_paragraph">
              Generative AI has been making headlines across the world as
              individuals and business leaders explore the possibilities created
              by this powerful new tool. Public services are no exception. The
              technology is poised to reinvent many of the ways public service
              organizations serve citizen needs and get work done.
            </p>
            <p className="blog_paragraph">
              One recent Accenture study estimated that as much as
              three-quarters (74%) of public service employees’ working hours
              are spent on tasks that involve the use of language to some extent
              – across both front-line and back-office work, as well as
              interactions across different channels (voice, email, digital
              apps, and so on). Generative AI creates numerous opportunities for
              automating, augmenting and optimizing these language-based tasks.
              This includes everything from generating automated case summaries
              for social workers to providing intelligent multi-language
              chatbots for public services to performing proactive threat
              analysis in areas like public safety.
            </p>
          </div>
        </div>
      </TracingBeam>
      {/* Sidebar  */}
      <RightSideBar />
    </div>
  );
}

export default BlogDetailsPage;

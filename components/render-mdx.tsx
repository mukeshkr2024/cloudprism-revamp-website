import { Blog, News } from "@/.contentlayer/generated";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const components = {
  Image: (props: any) => (
    <Image
      className="my-8 rounded-lg"
      width={985}
      height={554}
      sizes="100vw"
      alt="salesforce consultation and Implementation partner"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className="mt-4 text-base font-normal text-[#A4A4A4] md:text-lg"
      {...props}
    />
  ),
  h1: (props: React.ComponentProps<"h1">) => (
    <h1
      className="mb-4 text-3xl font-medium md:mb-6 md:text-4xl lg:text-5xl"
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="mt-12 text-2xl font-normal md:text-3xl lg:text-4xl"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mb-4 mt-8 text-xl font-light md:text-2xl lg:text-3xl"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="my-4 ml-10 flex list-disc flex-col gap-4" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="text-base text-[#A4A4A4] md:text-lg" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      {...props}
      target="_blank"
      className="text-[20px] font-semibold  text-white"
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong {...props} className="text-white" />
  ),
};
export default function RenderMdx({ blog }: { blog: Blog | News }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="mt-14">
      <MDXContent components={components} />
    </div>
  );
}

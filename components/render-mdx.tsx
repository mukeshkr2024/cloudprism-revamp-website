import { Blog } from "@/.contentlayer/generated";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const components = {
  Image: (props: any) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className="my-6 rounded-lg"
      width={718}
      height={404}
      sizes="100vw"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className="mb-4 text-base font-medium text-[#A4A4A4] md:text-lg"
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
      className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mb-4 text-xl font-light md:text-2xl lg:text-3xl"
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
    <a {...props} target="_blank" className="text-blue-500 hover:underline" />
  ),
};
export default function RenderMdx({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div>
      <MDXContent components={components} />
    </div>
  );
}

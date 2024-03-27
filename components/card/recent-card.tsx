import { ImageProps } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  slug: string;
  image: ImageProps;
}

export default function RecentBlogCard({ image, slug, title }: Props) {
  const imgUrL = image?.filePath.replace("../public", "");

  return (
    <Link href={slug}>
      <div
        style={{
          backgroundImage: `url('${imgUrL}')`,
        }}
        className="relative h-44 w-[320px] rounded-[9px] bg-cover bg-no-repeat lg:h-40 lg:w-64"
      >
        <p className="absolute bottom-8 left-4 line-clamp-2 text-base font-normal">
          {title}
        </p>
      </div>
    </Link>
  );
}

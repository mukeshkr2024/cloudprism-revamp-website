import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  slug: string;
  imgUrl: string;
}

export default function RecentBlogCard({ imgUrl, slug, title }: Props) {
  return (
    <Link href={slug}>
      <div
        style={{
          backgroundImage: `url('${imgUrl}')`,
        }}
        className="relative h-44 w-[320px] rounded-[9px] bg-cover bg-no-repeat lg:h-40 lg:w-64"
      >
        <p className="absolute bottom-4 left-4 text-base font-normal">
          {title}
        </p>
      </div>
    </Link>
  );
}

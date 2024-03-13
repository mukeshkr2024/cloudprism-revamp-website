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
        className="relative h-40 w-64 rounded-[9px] bg-cover bg-no-repeat"
      >
        <p className="absolute bottom-4 left-4 text-base font-normal">
          {title}
        </p>
      </div>
    </Link>
  );
}
